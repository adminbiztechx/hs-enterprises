import { spawn } from 'child_process';
import { writeFileSync } from 'fs';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9222;

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=' + port,
    '--disable-gpu',
    '--no-sandbox',
    'about:blank'
  ]);

  let wsUrl = null;
  for (let i = 0; i < 20; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      const data = await res.json();
      wsUrl = data.webSocketDebuggerUrl;
      if (wsUrl) break;
    } catch (e) {
      await new Promise(r => setTimeout(r, 200));
    }
  }

  const ws = new WebSocket(wsUrl);
  let id = 1;
  const callbacks = new Map();
  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      callbacks.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && callbacks.has(msg.id)) {
      const { resolve, reject } = callbacks.get(msg.id);
      callbacks.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };
  await new Promise(resolve => ws.onopen = resolve);

  const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
  const pageWs = new WebSocket(`ws://127.0.0.1:${port}/devtools/page/${targetId}`);
  const pageCallbacks = new Map();
  let pageMsgId = 1;
  function pageSend(method, params = {}) {
    return new Promise((resolve, reject) => {
      const currentId = pageMsgId++;
      pageCallbacks.set(currentId, { resolve, reject });
      pageWs.send(JSON.stringify({ id: currentId, method, params }));
    });
  }
  pageWs.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pageCallbacks.has(msg.id)) {
      const { resolve, reject } = pageCallbacks.get(msg.id);
      pageCallbacks.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };
  await new Promise(resolve => pageWs.onopen = resolve);

  await pageSend('Page.enable');
  await pageSend('DOM.enable');

  await pageSend('Emulation.setDeviceMetricsOverride', {
    width: 375,
    height: 812,
    deviceScaleFactor: 2,
    mobile: true,
    fitWindow: false
  });

  await pageSend('Page.navigate', { url: 'http://127.0.0.1:5173/' });
  await new Promise(r => setTimeout(r, 2000));

  // Let's get the WhyChooseUs and Testimonials elements
  const rects = await pageSend('Runtime.evaluate', {
    expression: `(() => {
      const allSections = Array.from(document.querySelectorAll('section'));
      return allSections.map((s, idx) => {
        const text = s.innerText.substring(0, 40).replace(/\\n/g, ' ');
        const r = s.getBoundingClientRect();
        return { idx, text, top: r.top + window.scrollY, height: r.height };
      });
    })()`,
    returnByValue: true
  });

  console.log('Sections:', rects.result.value);

  for (const s of rects.result.value) {
    if (s.text.includes('Why Choose') || s.text.includes('What Our Customers') || s.text.includes('Implementation Process')) {
      await pageSend('Runtime.evaluate', {
        expression: `window.scrollTo(0, ${s.top});`
      });
      await new Promise(r => setTimeout(r, 400));

      const shot = await pageSend('Page.captureScreenshot', {
        format: 'png',
        clip: { x: 0, y: 0, width: 375, height: Math.min(s.height, 900), scale: 2 }
      });
      writeFileSync(`d:/section_${s.idx}.png`, Buffer.from(shot.data, 'base64'));
      console.log(`Saved section_${s.idx}.png for: ${s.text}`);
    }
  }

  // Also click mobile hamburger to see drawer
  await pageSend('Runtime.evaluate', {
    expression: `(() => {
      const menuBtn = document.querySelector('header button[aria-label="Toggle Navigation"]');
      if (menuBtn) menuBtn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 600));

  const drawerShot = await pageSend('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: 0, width: 375, height: 600, scale: 2 }
  });
  writeFileSync('d:/mobile_drawer.png', Buffer.from(drawerShot.data, 'base64'));
  console.log('Saved d:/mobile_drawer.png');

  ws.close();
  pageWs.close();
  chromeProc.kill();
}

main().catch(console.error);
