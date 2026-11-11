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
    await pSend('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 700,
      deviceScaleFactor: 2,
      mobile: true
    });
    await pSend('Page.navigate', { url: 'http://127.0.0.1:5174/' });
    await new Promise(r => setTimeout(r, 2000));

    // Scroll to #challenges
    await pSend('Runtime.evaluate', {
      expression: "document.getElementById('challenges')?.scrollIntoView({ behavior: 'instant', block: 'start' });"
    });
    await new Promise(r => setTimeout(r, 600));

    const screenshot = await pSend('Page.captureScreenshot', { format: 'png' });
    writeFileSync('d:/challenges_gradient_mobile.png', Buffer.from(screenshot.data, 'base64'));
    console.log('SUCCESS: Mobile gradient challenges screenshot saved to d:/challenges_gradient_mobile.png');

    pWs.close();
    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
  }
}

main();
