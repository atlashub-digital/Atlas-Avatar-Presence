export function createMockAdapter(){
 return Object.freeze({kind:'mock',async sendTurn({text}){
  if(typeof text!=='string')throw new Error('invalid_text');
  const norm=text.trim().toLocaleLowerCase();
  if(norm.includes('olá')||norm.includes('ola'))return {text:'Olá! Sou uma demonstração visual offline do Atlas Avatar Presence. Não estou ligada à Helena real.'};
  if(norm.includes('voz'))return {text:'A integração com a voz do Hermes ainda é uma etapa de desenvolvimento.'};
  return {text:'Esta é uma resposta sintética. O agente Hermes real só será ligado depois de validar a sessão, autenticação e áudio.'};
 }});
}
