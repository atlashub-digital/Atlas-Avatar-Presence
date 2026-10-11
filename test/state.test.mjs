import test from 'node:test';
import assert from 'node:assert/strict';
import {nextState,createStateStore} from '../src/core/state.mjs';
test('normal turn: idle → thinking → speaking → idle',()=>{
 const s=createStateStore();for(const ev of ['SUBMIT','REPLY','DONE'])s.dispatch(ev);assert.equal(s.get(),'idle');
});
test('mic activation only from idle',()=>assert.equal(nextState('idle','ACTIVATE'),'listening'));
test('cannot speak without reply',()=>assert.throws(()=>nextState('idle','REPLY'),/forbidden_transition/));
test('paused state only resumes explicitly',()=>{
 const s=createStateStore();s.dispatch('PAUSE');assert.throws(()=>s.dispatch('SUBMIT'));s.dispatch('RESUME');assert.equal(s.get(),'idle');
});
test('errors reset explicitly',()=>assert.equal(nextState('error','RESET'),'idle'));
