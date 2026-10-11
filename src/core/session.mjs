import {createStateStore} from './state.mjs';
const AUDIO_OWNERS=new Set(['hermes','external','none']);
/**
 * Reference conversation controller, NO networking or actual voice capture.
 * Modes:
 * - hermes: provider already owns audio; NEVER call local TTS.
 * - external: call injected voice.speak(text) exactly once if explicitly authorized.
 * - none: text-only.
 */
export function createPresenceSession({agent,voice,renderer={},audioOwner='hermes',sessionRef='synthetic-session'}={}){
 if(!agent || typeof agent.sendTurn!=='function') throw new Error('agent_adapter_required');
 if(!AUDIO_OWNERS.has(audioOwner)) throw new Error('invalid_audio_owner');
 if(audioOwner==='external' && typeof voice?.speak!=='function') throw new Error('external_voice_adapter_required');
 const state=createStateStore((s)=>renderer.setState?.(s));
 let active=false;
 return Object.freeze({
   getState:()=>state.get(),
   async sendText(text,{signal}={}){
     if(typeof text!=='string'||!text.trim()) throw new Error('empty_turn');
     if(active || state.get()!=='idle') throw new Error('session_busy');
     if(signal?.aborted) throw new Error('aborted');
     active=true;
     state.dispatch('SUBMIT');
     try {
       const result=await agent.sendTurn({sessionRef,text:text.trim(),signal});
       if(signal?.aborted) throw new Error('aborted');
       if(!result || typeof result.text!=='string') throw new Error('invalid_agent_response');
       renderer.renderText?.(result.text);
       state.dispatch('REPLY');
       if(audioOwner==='external') await voice.speak(result.text,{sessionRef,signal});
       // audioOwner === 'hermes' means do not call any second voice adapter.
       state.dispatch('DONE');
       return result;
     } catch(error) {
       if(state.get()!=='error' && state.get()!=='paused') state.dispatch('FAIL');
       throw error;
     } finally {active=false;}
   },
   reset(){if(active) throw new Error('session_busy');if(state.get()==='error')state.dispatch('RESET');},
   pause(){if(active) throw new Error('cannot_pause_active_turn_without_abort_controller');if(state.get()!=='paused')state.dispatch('PAUSE');},
   resume(){if(state.get()==='paused')state.dispatch('RESUME');}
 });
}
