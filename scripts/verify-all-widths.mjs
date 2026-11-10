import { spawn } from 'child_process';

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

  const widths = [320, 360, 375, 390, 412, 768, 1024, 1280];

  for (const width of widths) {
    await pageSend('Emulation.setDeviceMetricsOverride', {
      width,
      height: 800,
      deviceScaleFactor: 2,
      mobile: width < 1024,
      fitWindow: false
    });

    await pageSend('Page.navigate', { url: 'http://127.0.0.1:5173/' });
    await new Promise(r => setTimeout(r, 1200));

    const result = await pageSend('Runtime.evaluate', {
      expression: `(() => {
        const docW = document.documentElement.clientWidth;
        const scrW = document.documentElement.scrollWidth;
        const header = document.querySelector('header');
        const headerRect = header ? header.getBoundingClientRect() : null;
        
        // Find overflowing elements if any
        const overflowing = [];
        for (const el of document.querySelectorAll('*')) {
          const style = window.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden') continue;
          if (el.classList.contains('pointer-events-none')) continue;
          const r = el.getBoundingClientRect();
          if (r.right > docW + 1 && style.position !== 'fixed') {
            overflowing.push({
              tag: el.tagName,
              cls: (el.className || '').toString().substring(0, 50),
              right: Math.round(r.right),
              w: Math.round(r.width)
            });
          }
        }

        return {
          width: docW,
          scrollWidth: scrW,
          hasHorizontalScroll: scrW > docW,
          overflowCount: overflowing.length,
          topOverflow: overflowing.slice(0, 3)
        };
      })()`,
      returnByValue: true
    });

    console.log(`Width ${width}px:`, result.result.value);
  }

  ws.close();
  pageWs.close();
  chromeProc.kill();
}

main().catch(console.error);
