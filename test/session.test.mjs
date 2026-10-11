import test from 'node:test';
import assert from 'node:assert/strict';
import {createPresenceSession} from '../src/core/session.mjs';
import {createMockAdapter} from '../src/adapters/mock.mjs';
const agent=createMockAdapter();
test('Hermes audio ownership prohibits second TTS',async()=>{
 let calls=0;const states=[];
 const s=createPresenceSession({agent,voice:{speak:async()=>calls++},audioOwner:'hermes',renderer:{setState:v=>states.push(v)}});
 await s.sendText('olá');
 assert.equal(calls,0);
 assert.deepEqual(states,['thinking','speaking','idle']);
});
test('external audio explicitly invokes TTS once',async()=>{
 let calls=0;
 const s=createPresenceSession({agent,voice:{speak:async()=>{calls++;}},audioOwner:'external'});
 await s.sendText('voz');assert.equal(calls,1);
});
test('external audio without adapter rejected',()=>assert.throws(()=>createPresenceSession({agent,audioOwner:'external'}),/external_voice_adapter_required/));
test('session in none mode text only',async()=>{
 const s=createPresenceSession({agent,audioOwner:'none'});const r=await s.sendText('teste');assert.match(r.text,/sintética/);
});
test('invalid input never sends agent request',async()=>{
 let called=0;const s=createPresenceSession({agent:{sendTurn:async()=>{called++;}}});
 await assert.rejects(()=>s.sendText(' '),/empty_turn/);assert.equal(called,0);
});
test('aborted signal stops turn',async()=>{
 const abort=new AbortController();abort.abort();
 const s=createPresenceSession({agent});
 await assert.rejects(()=>s.sendText('test',{signal:abort.signal}),/aborted/);
});
test('provider failure leaves explicit error state',async()=>{
 const s=createPresenceSession({agent:{sendTurn:async()=>{throw new Error('offline');}}});
 await assert.rejects(()=>s.sendText('test'),/offline/);
 assert.equal(s.getState(),'error');s.reset();assert.equal(s.getState(),'idle');
});
