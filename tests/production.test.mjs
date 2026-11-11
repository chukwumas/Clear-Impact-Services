import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { setTimeout as delay } from 'node:timers/promises';

test('production serves only client assets and validates chat without a key', async (t) => {
  const probe = createServer();
  await new Promise(resolve => probe.listen(0, '127.0.0.1', resolve));
  const port = probe.address().port;
  await new Promise(resolve => probe.close(resolve));
  const child = spawn(process.execPath, ['dist/server.mjs', '--production'], {
    env: { ...process.env, NODE_ENV: 'production', PORT: String(port), GEMINI_API_KEY: '' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  t.after(() => child.kill());
  const base = 'http://127.0.0.1:' + port;
  let ready = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    try { ready = (await fetch(base + '/api/health')).ok; } catch {}
    if (ready) break;
    await delay(100);
  }
  assert.ok(ready, 'production server must start without an API key and honor PORT');
  assert.match(await (await fetch(base)).text(), /<div id="root"><\/div>/);
  for (const asset of ['/server.mjs', '/server.mjs.map', '/server.cjs', '/server.cjs.map']) {
    const response = await fetch(base + asset);
    assert.match(response.headers.get('content-type'), /text\/html/);
    assert.doesNotMatch(await response.text(), /GEMINI_API_KEY|systemInstruction/);
  }
  assert.equal((await fetch(base + '/api/missing')).status, 404);
  const post = body => fetch(base + '/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  for (const messages of [[], [null], [{role:'system',content:'hi'}], [{role:'user',content:123}], [{role:'user',content:'x'.repeat(2001)}]]) {
    assert.equal((await post({messages})).status, 400);
  }
  assert.equal((await post({messages:[{role:'user',content:'Hello'}]})).status, 503);
  assert.equal((await post({messages:[{role:'user',content:'x'.repeat(40000)}]})).status, 413);
});
