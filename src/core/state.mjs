/** Pure finite state machine. Does not access microphone, camera, renderer or network. */
export const STATES=Object.freeze(['idle','listening','thinking','speaking','paused','error']);
const NEXT={
 idle:{ACTIVATE:'listening',SUBMIT:'thinking',PAUSE:'paused',FAIL:'error'},
 listening:{SUBMIT:'thinking',CANCEL:'idle',PAUSE:'paused',FAIL:'error'},
 thinking:{REPLY:'speaking',CANCEL:'idle',PAUSE:'paused',FAIL:'error'},
 speaking:{DONE:'idle',CANCEL:'idle',PAUSE:'paused',FAIL:'error'},
 paused:{RESUME:'idle',FAIL:'error'},
 error:{RESET:'idle',PAUSE:'paused'}
};
export function nextState(current,event){
 if(!STATES.includes(current)) throw new Error('unknown_state');
 const next=NEXT[current]?.[event];
 if(!next) throw new Error('forbidden_transition:'+current+':'+event);
 return next;
}
export function createStateStore(onChange=()=>{}){
 let state='idle';
 return Object.freeze({get:()=>state,dispatch:(event)=>{
   const n=nextState(state,event);
   state=n;onChange(n,event);return n;
 }});
}
