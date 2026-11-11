import { spawn } from 'child_process';
import { writeFileSync } from 'fs';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, ['--headless=new', '--remote-debugging-port=9993', '--disable-gpu', 'about:blank']);
  await new Promise(r => setTimeout(r, 1500));
  
  try {
    const res = await fetch('http://127.0.0.1:9993/json/version');
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
    const pWs = new WebSocket('ws://127.0.0.1:9993/devtools/page/' + targetId);
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
    
    // Test 1: Desktop View
    await pSend('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
      mobile: false
    });
    
    // Navigate to Products page
    await pSend('Page.navigate', { url: 'http://127.0.0.1:5174/#products' });
    await new Promise(r => setTimeout(r, 2000));
    
    // Take desktop screenshot of hero
    const ssDesktop = await pSend('Page.captureScreenshot', { format: 'png' });
    writeFileSync('d:/product_hero_desktop.png', Buffer.from(ssDesktop.data, 'base64'));
    console.log('Saved d:/product_hero_desktop.png');

    // Test 2: Mobile View
    await pSend('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      mobile: true
    });
    await new Promise(r => setTimeout(r, 1000));
    const ssMobile = await pSend('Page.captureScreenshot', { format: 'png' });
    writeFileSync('d:/product_hero_mobile.png', Buffer.from(ssMobile.data, 'base64'));
    console.log('Saved d:/product_hero_mobile.png');

    pWs.close();
    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
  }
}

main();
