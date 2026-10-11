/** Optional alternate conversational backend shim; NO direct node/device command access. */
export function createOpenClawAdapter({sendTurn}={}){
 if(typeof sendTurn!=='function')throw new Error('trusted_openclaw_transport_required');
 return Object.freeze({kind:'openclaw',async sendTurn({sessionRef,text,signal}){
  if(!sessionRef||typeof text!=='string'||!text.trim())throw new Error('invalid_turn');
  return sendTurn({sessionRef,text,signal});
 }});
}
