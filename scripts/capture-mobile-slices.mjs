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
  await new Promise(r => setTimeout(r, 2500));

  // Get total height of document
  const layout = await pageSend('Runtime.evaluate', {
    expression: `(() => {
      return {
        height: document.documentElement.scrollHeight,
        sections: Array.from(document.querySelectorAll('section')).map(s => ({
          top: Math.round(s.getBoundingClientRect().top + window.scrollY),
          height: Math.round(s.getBoundingClientRect().height),
          cls: (s.className || '').substring(0, 40)
        }))
      };
    })()`,
    returnByValue: true
  });

  console.log('Page layout:', layout.result.value);

  // Take screenshots at y=0, y=800, y=1600, y=2400, y=3200, y=4000
  for (let y = 0; y < layout.result.value.height; y += 750) {
    const shot = await pageSend('Page.captureScreenshot', {
      format: 'png',
      clip: { x: 0, y, width: 375, height: 750, scale: 2 }
    });
    writeFileSync(`d:/mobile_slice_${y}.png`, Buffer.from(shot.data, 'base64'));
  }

  console.log('Saved mobile slices');

  ws.close();
  pageWs.close();
  chromeProc.kill();
}

main().catch(console.error);
