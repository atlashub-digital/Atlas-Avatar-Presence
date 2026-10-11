import {createMockAdapter} from './adapters/mock.mjs';
import {createPresenceSession} from './core/session.mjs';
const states=[];
const session=createPresenceSession({
 agent:createMockAdapter(),audioOwner:'hermes',sessionRef:'local-demo',
 renderer:{setState:s=>states.push(s),renderText:t=>console.log('Avatar:',t)}
});
await session.sendText('Olá!');
console.log(JSON.stringify({offline:true,agentConnected:false,audioOwner:'hermes',states},null,2));
