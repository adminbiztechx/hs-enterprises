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

  // Wait for Chrome to be ready
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

  if (!wsUrl) {
    console.error('Failed to get WebSocket debugger URL');
    chromeProc.kill();
    return;
  }

  console.log('Connected to Chrome:', wsUrl);

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

  // Create a new target/page
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

  await pageSend('Page.navigate', { url: 'http://127.0.0.1:5173/' });
  await new Promise(r => setTimeout(r, 2000));

  // Test multiple screen sizes: 390, 375, 360, 320
  for (const width of [390, 375, 360, 320]) {
    await pageSend('Emulation.setDeviceMetricsOverride', {
      width,
      height: 800,
      deviceScaleFactor: 2,
      mobile: true,
      fitWindow: false
    });

    await new Promise(r => setTimeout(r, 500));

    const check = await pageSend('Runtime.evaluate', {
      expression: `(() => {
        const header = document.querySelector('header');
        const brand = header.children[0].children[0].children[0];
        const rightBar = header.children[0].children[0].children[3];
        const brandRect = brand.getBoundingClientRect();
        const rightRect = rightBar.getBoundingClientRect();
        return {
          width: window.innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          brandRight: brandRect.right,
          rightBarLeft: rightRect.left,
          gap: rightRect.left - brandRect.right,
          rightBarRight: rightRect.right,
          overflow: rightRect.right > window.innerWidth
        };
      })()`,
      returnByValue: true
    });

    console.log(`Width ${width}px:`, check.result.value);

    const shot = await pageSend('Page.captureScreenshot', {
      format: 'png',
      clip: { x: 0, y: 0, width, height: 120, scale: 2 }
    });
    writeFileSync(`d:/mobile_header_${width}.png`, Buffer.from(shot.data, 'base64'));
  }

  ws.close();
  pageWs.close();
  chromeProc.kill();
}

main().catch(console.error);
