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

  const widths = [320, 360, 375, 412, 540, 768];

  for (const width of widths) {
    await pSend('Emulation.setDeviceMetricsOverride', {
      width,
      height: 700,
      deviceScaleFactor: 2,
      mobile: true,
      fitWindow: false
    });

    await pSend('Page.navigate', { url: 'http://127.0.0.1:5173/' });
    await new Promise(r => setTimeout(r, 1200));

    const check = await pSend('Runtime.evaluate', {
      expression: `(() => {
        const header = document.querySelector('header');
        const row = header.children[0].children[0];
        const brand = row.children[0];
        const rightBar = row.children[3]; // mobile right bar
        const brandRect = brand.getBoundingClientRect();
        const rightRect = rightBar.getBoundingClientRect();
        return {
          windowWidth: window.innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          brandWidth: Math.round(brandRect.width),
          brandRight: Math.round(brandRect.right),
          rightBarLeft: Math.round(rightRect.left),
          rightBarWidth: Math.round(rightRect.width),
          rightBarRight: Math.round(rightRect.right),
          gapBetween: Math.round(rightRect.left - brandRect.right),
          isOverlapping: rightRect.left < brandRect.right,
          isClippingRight: rightRect.right > window.innerWidth
        };
      })()`,
      returnByValue: true
    });

    console.log(`Width ${width}px:`, check.result.value);

    const shot = await pSend('Page.captureScreenshot', {
      format: 'png',
      clip: { x: 0, y: 0, width, height: 80, scale: 2 }
    });
    writeFileSync(`d:/navbar_fit_${width}.png`, Buffer.from(shot.data, 'base64'));
  }

  pWs.close(); ws.close(); chrome.kill();
}

main().catch(console.error);
