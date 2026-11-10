import { spawn } from 'child_process';
import { writeFileSync } from 'fs';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, ['--headless=new', '--remote-debugging-port=9222', '--disable-gpu', 'about:blank']);
  await new Promise(r => setTimeout(r, 1000));
  const res = await fetch('http://127.0.0.1:9222/json/version');
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
  const pWs = new WebSocket('ws://127.0.0.1:9222/devtools/page/' + targetId);
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

  // Test 375px
  await pSend('Emulation.setDeviceMetricsOverride', { width: 375, height: 812, deviceScaleFactor: 2, mobile: true, fitWindow: false });
  await pSend('Page.navigate', { url: 'http://127.0.0.1:5173/' });
  await new Promise(r => setTimeout(r, 1500));

  const shot375 = await pSend('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: 0, width: 375, height: 120, scale: 2 }
  });
  writeFileSync('d:/navbar_hs_375.png', Buffer.from(shot375.data, 'base64'));

  // Test 320px
  await pSend('Emulation.setDeviceMetricsOverride', { width: 320, height: 600, deviceScaleFactor: 2, mobile: true, fitWindow: false });
  await new Promise(r => setTimeout(r, 500));

  const shot320 = await pSend('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: 0, width: 320, height: 120, scale: 2 }
  });
  writeFileSync('d:/navbar_hs_320.png', Buffer.from(shot320.data, 'base64'));

  // Test Desktop Footer with H S ENTERPRISES
  await pSend('Emulation.setDeviceMetricsOverride', { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false, fitWindow: false });
  await pSend('Runtime.evaluate', {
    expression: 'window.scrollTo(0, document.documentElement.scrollHeight);'
  });
  await new Promise(r => setTimeout(r, 500));

  const shotFooter = await pSend('Page.captureScreenshot', { format: 'png' });
  writeFileSync('d:/footer_hs_desktop.png', Buffer.from(shotFooter.data, 'base64'));

  console.log('Saved all brand verification screenshots');

  pWs.close(); ws.close(); chrome.kill();
}

main().catch(console.error);
