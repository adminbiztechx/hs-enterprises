import { spawn } from 'child_process';
import { writeFileSync } from 'fs';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, ['--headless=new', '--remote-debugging-port=9992', '--disable-gpu', 'about:blank']);
  await new Promise(r => setTimeout(r, 1500));
  
  try {
    const res = await fetch('http://127.0.0.1:9992/json/version');
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
    const pWs = new WebSocket('ws://127.0.0.1:9992/devtools/page/' + targetId);
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
      width: 1280,
      height: 720,
      deviceScaleFactor: 2,
      mobile: false
    });
    await pSend('Page.navigate', { url: 'http://127.0.0.1:5174/' });
    await new Promise(r => setTimeout(r, 1500));

    // Click "TallyPrime" sub-item in Products dropdown
    const clickRes = await pSend('Runtime.evaluate', {
      expression: `
        // Click products dropdown button to open
        const navBtn = Array.from(document.querySelectorAll('nav button')).find(b => b.textContent.includes('Products'));
        if (navBtn) navBtn.click();
        'NAV_CLICKED';
      `
    });
    await new Promise(r => setTimeout(r, 400));

    // Click TallyPrime item in dropdown
    await pSend('Runtime.evaluate', {
      expression: `
        const item = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Complete business management with accounting & GST'));
        if (item) item.click();
      `
    });
    await new Promise(r => setTimeout(r, 1200));

    const screenshot = await pSend('Page.captureScreenshot', { format: 'png' });
    writeFileSync('d:/product_clicked_highlight.png', Buffer.from(screenshot.data, 'base64'));
    console.log('SUCCESS: Clicked product screenshot saved to d:/product_clicked_highlight.png');

    pWs.close();
    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
  }
}

main();
