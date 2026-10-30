const el=(tag,text)=>{const n=document.createElement(tag);if(text)n.textContent=text;return n;};
const fields=['action','feedback','mechanism','difference','risks','feasibility','prototype'];
const tones=['#ead5ce','#e9d9bb','#d4dfe0','#d4dfeb'];
function block(item,index,cultural=false){
 const article=el('article'),card=el('div'),details=el('details'),summary=el('summary'),heading=el('h2',item.title.split(':')[0]),caption=el('p',cultural?item.scope:item.action),body=el('div');
 card.className='visual-card';card.style.setProperty('--country-paper',tones[index]);card.style.setProperty('--card-ink','#223a32');details.className='proposal-panel';summary.className='proposal-heading';heading.title=item.title;summary.append(heading,caption);body.className='idea-body';
 if(cultural){for(const [label,key] of [['Account','context'],['Interpretation','interpretation'],['Limits','uncertainty']])body.append(el('h3',label),el('p',item[key]));for(const source of item.sources){const u=new URL(source.url);if(u.protocol!=='https:')continue;const a=el('a',source.title);a.href=u.href;a.rel='noopener noreferrer';a.target='_blank';body.append(a);}}
 else for(const key of fields.filter(k=>k!=='action'))body.append(el('h3',key[0].toUpperCase()+key.slice(1)),el('p',item[key]));
 details.append(summary,body);card.append(details);article.append(card);
 card.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse')details.open=true;});card.addEventListener('pointerleave',()=>{if(!card.contains(document.activeElement))details.open=false;});details.addEventListener('keydown',event=>{if(event.key==='Escape'){details.open=false;summary.focus();}});return article;
}
try{
 const id=new URLSearchParams(location.search).get('id');if(!/^[a-z0-9][a-z0-9-]{0,119}$/.test(id||''))throw Error('Invalid run');
 const response=await fetch('runs/'+id+'.json');if(!response.ok)throw Error('Missing run');const run=await response.json(),root=document.querySelector('#run-blocks'),info=document.querySelector('#run-info'),select=document.querySelector('#result-select');
 document.title=run.title+' · Perspectives';document.querySelector('#run-title').textContent=run.title;info.append(el('h2',run.task),el('p',run.date),el('p',run.notice));const cover=el('img');cover.src='runs/'+id+'.png';cover.alt=run.title;cover.width=1200;cover.height=630;info.append(cover);
 if(run.kind==='method-study'){
  if(run.outputs?.length!==2||run.outputs.some(o=>o.proposals?.length!==4))throw Error('Four proposals required');
  select.hidden=false;run.outputs.forEach((result,index)=>{const option=el('option','Result '+(index+1));option.value=String(index);select.append(option);const notes=el('details');notes.append(el('summary',result.synthesis.title));for(const key of fields)notes.append(el('h3',key[0].toUpperCase()+key.slice(1)),el('p',result.synthesis[key]));info.append(notes);});
  const render=()=>root.replaceChildren(...run.outputs[Number(select.value)].proposals.map((item,index)=>block(item,index)));select.onchange=render;render();
 }else{if(run.scenes?.length!==4)throw Error('Four accounts required');root.replaceChildren(...run.scenes.map((item,index)=>block(item,index,true)));}
}catch{document.querySelector('#run-title').textContent='Run unavailable';document.querySelector('#run-content').append(el('p','Return to Archive and choose another run.'));}
