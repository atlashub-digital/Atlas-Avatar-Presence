/* Offline 2D presence demonstration. No mic permission, network, screenshot, API or storage. */
const avatar=document.getElementById('avatar'),state=document.getElementById('state'),reply=document.getElementById('reply'),form=document.getElementById('chat'),prompt=document.getElementById('prompt');
const speech=document.getElementById('speech');
let status='idle';let pending=null;
const setStatus=s=>{status=s;state.textContent=s;avatar.className='avatar '+s;};
const stopVoice=()=>{try{window.speechSynthesis?.cancel();}catch{}};
const clearPending=()=>{if(pending)clearTimeout(pending);pending=null;stopVoice();};
const respond=text=>{
 const value=text.toLowerCase();
 if(value.includes('olá')||value.includes('ola'))return 'Olá! Sou uma demonstração de presença visual AtlasHub, ainda sem ligação ao Hermes.';
 if(value.includes('voz'))return 'Posso simular fala através do navegador, se ativar essa opção. Não é a voz real da Helena.';
 return 'Esta demonstração usa respostas fixas e não envia nada à internet. O agente real será integrado numa etapa futura.';
};
document.getElementById('activate').addEventListener('click',()=>{clearPending();setStatus('listening');reply.textContent='Simulação visual de escuta; o microfone NÃO é ativado.';});
document.getElementById('stop').addEventListener('click',()=>{clearPending();setStatus('paused');reply.textContent='Animação pausada; a captura de áudio nunca esteve ativa.';});
document.getElementById('reset').addEventListener('click',()=>{clearPending();setStatus('idle');reply.textContent='Demo reposta. Sem conversação real.';prompt.value='';});
form.addEventListener('submit',event=>{
 event.preventDefault();const text=prompt.value.trim();if(!text)return;
 clearPending();setStatus('thinking');reply.textContent='A simular a resposta do agente...';
 pending=setTimeout(()=>{
   pending=null;const answer=respond(text);reply.textContent=answer;setStatus('speaking');
   const finish=()=>{if(status==='speaking')setStatus('idle');};
   if(speech.checked && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window){
    try{
     const utterance=new SpeechSynthesisUtterance(answer);utterance.lang='pt-PT';utterance.onend=finish;utterance.onerror=finish;
     speechSynthesis.speak(utterance);
     pending=setTimeout(()=>{pending=null;finish();},16000);
    }catch{pending=setTimeout(()=>{pending=null;finish();},2400);}
   }else pending=setTimeout(()=>{pending=null;finish();},2400);
 },480);
});
setStatus('idle');
