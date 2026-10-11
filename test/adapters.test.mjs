import test from 'node:test';
import assert from 'node:assert/strict';
import {createHermesAdapter} from '../src/adapters/hermes.mjs';
import {createOpenClawAdapter} from '../src/adapters/openclaw.mjs';
test('Hermes requires explicit transport, never silently connects',()=>assert.throws(()=>createHermesAdapter(),/trusted_hermes_transport_required/));
test('OpenClaw requires explicit transport, never directly controls nodes',()=>assert.throws(()=>createOpenClawAdapter(),/trusted_openclaw_transport_required/));
test('Hermes transport receives session-bound text',async()=>{
 const a=createHermesAdapter({sendTurn:async params=>({text:params.sessionRef+':'+params.text})});
 assert.deepEqual(await a.sendTurn({sessionRef:'s',text:'ola'}),{text:'s:ola'});
});
test('OpenClaw transport is optional replacement',async()=>{
 const a=createOpenClawAdapter({sendTurn:async()=>({text:'alternative'})});
 assert.equal((await a.sendTurn({sessionRef:'s',text:'ola'})).text,'alternative');
});
