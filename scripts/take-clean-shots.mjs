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

  // Wait until element exists
  let found = false;
  for (let attempt = 0; attempt < 30; attempt++) {
    const check = await pSend('Runtime.evaluate', {
      expression: '!!document.getElementById("why-us")',
      returnByValue: true
    });
    if (check.result.value) {
      found = true;
      break;
    }
    await new Promise(r => setTimeout(r, 200));
  }

  console.log('Element found:', found);

  // Disable smooth scroll
  await pSend('Runtime.evaluate', {
    expression: `(() => {
      document.documentElement.classList.remove('scroll-smooth');
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.scrollBehavior = 'auto';
    })()`
  });

  // Scroll to why-us
  await pSend('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('why-us');
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, top - 60);
      }
    })()`
  });
  await new Promise(r => setTimeout(r, 500));

  const shot1 = await pSend('Page.captureScreenshot', { format: 'png' });
  writeFileSync('d:/why_us_final_mobile.png', Buffer.from(shot1.data, 'base64'));
  console.log('Saved d:/why_us_final_mobile.png');

  // Scroll down to reviews-blogs
  await pSend('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('reviews-blogs');
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, top - 60);
      }
    })()`
  });
  await new Promise(r => setTimeout(r, 500));

  const shot2 = await pSend('Page.captureScreenshot', { format: 'png' });
  writeFileSync('d:/reviews_final_mobile.png', Buffer.from(shot2.data, 'base64'));
  console.log('Saved d:/reviews_final_mobile.png');

  pWs.close(); ws.close(); chrome.kill();
}

main().catch(console.error);
