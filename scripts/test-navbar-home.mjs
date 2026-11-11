import { spawn } from 'child_process';
import { writeFileSync } from 'fs';

async function main() {
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--remote-debugging-port=9970',
    '--disable-gpu',
    '--user-data-dir=C:\\Users\\user\\AppData\\Local\\Temp\\chrome-tmp-' + Date.now(),
    'about:blank'
  ]);
  await new Promise(r => setTimeout(r, 2500));
  const res = await fetch('http://127.0.0.1:9970/json/version');
  const data = await res.json();
  const ws = new WebSocket(data.webSocketDebuggerUrl);
  let id = 1;
  const send = (m, p = {}) => new Promise(res => {
    const i = id++;
    const h = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === i) { ws.removeEventListener('message', h); res(msg.result); }
    };
    ws.addEventListener('message', h);
    ws.send(JSON.stringify({ id: i, method: m, params: p }));
  });
  await new Promise(r => ws.onopen = r);
  const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
  const pWs = new WebSocket('ws://127.0.0.1:9970/devtools/page/' + targetId);
  const pSend = (m, p = {}) => new Promise(res => {
    const i = id++;
    const h = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === i) { pWs.removeEventListener('message', h); res(msg.result); }
    };
    pWs.addEventListener('message', h);
    pWs.send(JSON.stringify({ id: i, method: m, params: p }));
  });
  await new Promise(r => pWs.onopen = r);
  await pSend('Page.enable');
  await pSend('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false
  });
  
  await pSend('Page.navigate', { url: 'http://127.0.0.1:5174/' });
  await new Promise(r => setTimeout(r, 1500));
  
  // Take screenshot of navbar area
  const ssNavbar = await pSend('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: 0, width: 1440, height: 120, scale: 2 }
  });
  writeFileSync('d:/navbar_with_home.png', Buffer.from(ssNavbar.data, 'base64'));

  // Test clicking Products, then clicking Home
  await pSend('Runtime.evaluate', {
    expression: `
      const prodBtn = Array.from(document.querySelectorAll('nav button')).find(b => b.textContent.includes('Products'));
      if (prodBtn) prodBtn.click();
    `
  });
  await new Promise(r => setTimeout(r, 800));

  // Now click Home button
  await pSend('Runtime.evaluate', {
    expression: `
      const homeBtn = Array.from(document.querySelectorAll('nav button')).find(b => b.textContent.trim() === 'Home');
      if (homeBtn) homeBtn.click();
    `
  });
  await new Promise(r => setTimeout(r, 800));

  const urlCheck = await pSend('Runtime.evaluate', {
    expression: 'window.location.hash'
  });
  console.log('Current hash after clicking Home:', urlCheck.result.value);

  pWs.close();
  ws.close();
  chrome.kill();
  console.log('Saved d:/navbar_with_home.png');
}
main();
