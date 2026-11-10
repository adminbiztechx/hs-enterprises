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
  await pSend('Emulation.setDeviceMetricsOverride', { width: 375, height: 812, deviceScaleFactor: 2, mobile: true, fitWindow: false });
  await pSend('Page.navigate', { url: 'http://127.0.0.1:5173/' });
  await new Promise(r => setTimeout(r, 2000));
  
  const info = await pSend('Runtime.evaluate', {
    expression: `(() => {
      document.documentElement.classList.remove('scroll-smooth');
      const el = document.getElementById('why-us');
      if (el) {
        el.scrollIntoView({ behavior: 'instant' });
      }
      return {
        exists: !!el,
        rect: el ? el.getBoundingClientRect() : null,
        scrollY: window.scrollY
      };
    })()`,
    returnByValue: true
  });
  console.log('Why us element info:', info.result.value);

  await new Promise(r => setTimeout(r, 500));

  const shot = await pSend('Page.captureScreenshot', { format: 'png' });
  writeFileSync('d:/why_us_live_shot.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved d:/why_us_live_shot.png');

  // Also scroll to reviews-blogs
  await pSend('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('reviews-blogs');
      if (el) {
        el.scrollIntoView({ behavior: 'instant' });
      }
    })()`
  });
  await new Promise(r => setTimeout(r, 500));

  const shot2 = await pSend('Page.captureScreenshot', { format: 'png' });
  writeFileSync('d:/reviews_live_shot.png', Buffer.from(shot2.data, 'base64'));
  console.log('Saved d:/reviews_live_shot.png');

  pWs.close(); ws.close(); chrome.kill();
}

main().catch(console.error);
