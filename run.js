const el=(tag,text)=>{const n=document.createElement(tag);if(text)n.textContent=text;return n;};
try{
 const id=new URLSearchParams(location.search).get('id');if(!/^[a-z0-9][a-z0-9-]{0,119}$/.test(id||''))throw Error('Invalid run');
 const response=await fetch('runs/'+id+'.json');if(!response.ok)throw Error('Missing run');const run=await response.json(),root=document.querySelector('#run-content');
 document.title=run.title+' · Perspectives';document.querySelector('#run-title').textContent=run.title;
 const intro=el('section'),cover=el('img');intro.className='run-intro';cover.src='runs/'+id+'.png';cover.alt=run.title;cover.width=1200;cover.height=630;intro.append(el('p',run.date+' · '+(run.kind==='method-study'?'Idea study':'Cultural accounts')),el('h2',run.task),el('p',run.notice),cover);root.append(intro);
 if(run.kind==='method-study'){
  const results=el('section');results.className='idea-results';results.setAttribute('aria-label','Two proposed outcomes');
  for(const result of run.outputs){const article=el('article');article.append(el('h2',result.synthesis.title));for(const key of ['action','feedback','mechanism','difference','risks','feasibility','prototype']){article.append(el('h3',key[0].toUpperCase()+key.slice(1)),el('p',result.synthesis[key]));}const details=el('details');details.append(el('summary','Earlier ideas'));for(const proposal of result.proposals){details.append(el('h3',proposal.title),el('p',proposal.action),el('p',proposal.mechanism));}article.append(details);results.append(article);}root.append(results);
 }else{
  const scenes=el('section');scenes.className='idea-results';for(const scene of run.scenes){const article=el('article');article.append(el('h2',scene.title),el('p',scene.scope),el('p',scene.context),el('h3','Interpretation'),el('p',scene.interpretation),el('h3','Limits'),el('p',scene.uncertainty));for(const source of scene.sources){const a=el('a',source.title);const u=new URL(source.url);if(u.protocol!=='https:')continue;a.href=u.href;a.rel='noopener noreferrer';a.target='_blank';article.append(a);}scenes.append(article);}root.append(scenes);
 }
}catch{document.querySelector('#run-title').textContent='Run unavailable';document.querySelector('#run-content').append(el('p','Return to Archive and choose another run.'));}
