/** Transport-injected Hermes shim. Deliberately NO invented API URL, auth or wire protocol. */
export function createHermesAdapter({sendTurn}={}){
 if(typeof sendTurn!=='function')throw new Error('trusted_hermes_transport_required');
 return Object.freeze({kind:'hermes',async sendTurn({sessionRef,text,signal}){
  if(!sessionRef||typeof text!=='string'||!text.trim())throw new Error('invalid_turn');
  return sendTurn({sessionRef,text,signal});
 }});
}
