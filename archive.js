const list=document.querySelector('.archive-list');
try{
 const response=await fetch('runs.json');if(!response.ok)throw Error('Run list unavailable');const runs=await response.json();
 for(const run of runs){
  if(run.kind!=='culture')continue;
  if(!/^[a-z0-9][a-z0-9-]{0,119}$/.test(run.id))continue;
  const li=document.createElement('li'),a=document.createElement('a'),fill=document.createElement('span'),copy=document.createElement('span'),title=document.createElement('span'),meta=document.createElement('span');
  a.className='study-link';a.href='run.html?id='+encodeURIComponent(run.id);fill.className='slab-fill';fill.setAttribute('aria-hidden','true');title.className='slab-title';title.textContent=run.title;meta.className='slab-meta';meta.textContent=run.date+' · '+'Four cultural accounts';copy.append(title,meta);a.append(fill,copy,document.querySelector('.slab-arrow').cloneNode(true));li.append(a);list.append(li);
 }
}catch{const li=document.createElement('li');li.className='archive-error';li.textContent='More runs could not load. Refresh to try again.';list.append(li);}
list.addEventListener('keydown',event=>{const links=[...list.querySelectorAll('a')],i=links.indexOf(document.activeElement);let next=i;if(event.key==='ArrowDown')next=Math.min(i+1,links.length-1);else if(event.key==='ArrowUp')next=Math.max(i-1,0);else if(event.key==='Home')next=0;else if(event.key==='End')next=links.length-1;else return;event.preventDefault();links[next]?.focus();});
