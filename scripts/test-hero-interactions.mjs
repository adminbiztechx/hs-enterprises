import { spawn } from 'child_process';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, ['--headless=new', '--remote-debugging-port=9994', '--disable-gpu', 'about:blank']);
  await new Promise(r => setTimeout(r, 1500));
  
  try {
    const res = await fetch('http://127.0.0.1:9994/json/version');
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
    const pWs = new WebSocket('ws://127.0.0.1:9994/devtools/page/' + targetId);
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
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
      mobile: false
    });
    
    await pSend('Page.navigate', { url: 'http://127.0.0.1:5174/#products' });
    await new Promise(r => setTimeout(r, 1500));

    // Test 1: Click "Get TallyPrime Demo" hotspot
    await pSend('Runtime.evaluate', {
      expression: `
        const btn = document.querySelector('button[aria-label="Get TallyPrime Demo"]');
        if (btn) btn.click();
      `
    });
    await new Promise(r => setTimeout(r, 400));
    const modalCheck1 = await pSend('Runtime.evaluate', {
      expression: `
        const modal = document.querySelector('form') || document.querySelector('.fixed');
        modal ? 'MODAL_OPENED' : 'NO_MODAL';
      `
    });
    console.log('Test 1 (Demo Modal Click):', modalCheck1.result.value);

    // Close modal if opened
    await pSend('Runtime.evaluate', {
      expression: `
        const closeBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerHTML.includes('svg') && b.className.includes('rounded'));
        if (closeBtn) closeBtn.click();
      `
    });
    await new Promise(r => setTimeout(r, 400));

    // Test 2: Click Pill 3 ("GST & Compliance")
    const pillCheck = await pSend('Runtime.evaluate', {
      expression: `
        const pill = document.querySelector('button[aria-label="GST & Compliance"]');
        if (pill) pill.click();
        'PILL_CLICKED';
      `
    });
    await new Promise(r => setTimeout(r, 500));
    
    // Check if editlog card is selected/popped
    const cardCheck = await pSend('Runtime.evaluate', {
      expression: `
        const card = document.getElementById('product-card-editlog');
        card && card.className.includes('border-[#0052CC]') ? 'CARD_HIGHLIGHTED' : 'CARD_NOT_HIGHLIGHTED';
      `
    });
    console.log('Test 2 (GST & Compliance -> Edit Log Card):', cardCheck.result.value);

    pWs.close();
    ws.close();
  } catch (err) {
    console.error('Test error:', err);
  } finally {
    chrome.kill();
  }
}

main();
