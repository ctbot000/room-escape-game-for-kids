// Star Key Escape — hidden-artwork check
//
// SVG has no z-index: it paints in document order, so a later sibling silently
// covers an earlier one. Nothing errors, and the automated playthrough still
// passes, because it types known answers instead of reading the picture. This
// catches the whole class.
//
// Usage: open the game, then paste into the browser console. It walks every
// room (via the saved-progress slot, reloading between rooms) and reports any
// <text> more than 20% covered by a later, opaque shape. A clean board prints
// an empty list.
//
//   sessionStorage.setItem('src', <this file's SWEEP string>);
//   sessionStorage.setItem('step','0'); sessionStorage.setItem('sw','[]');
//   localStorage.setItem('starKeyEscape.furthest','0'); location.reload();
//   // then repeatedly:  await eval(sessionStorage.getItem('src'))
//   // and finally:      JSON.parse(sessionStorage.getItem('sw'))

const SWEEP = `(async()=>{
 const step=+(sessionStorage.getItem('step')||0);
 const C=e=>e&&e.dispatchEvent(new MouseEvent('click',{bubbles:true}));
 for(let i=0;i<40;i++){ if(document.querySelector('[data-resume],[data-start]')) break;
   await new Promise(r=>setTimeout(r,40)); }
 C(document.querySelector('[data-resume]')||document.querySelector('[data-start]'));
 await new Promise(r=>setTimeout(r,140));
 const g=document.querySelector('.stage svg'), n=document.getElementById('roomno').textContent;
 const B=e=>{try{const b=e.getBBox();return{x:b.x,y:b.y,w:b.width,h:b.height}}catch(_){return null}};
 const O=(a,b)=>Math.max(0,Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x))
               *Math.max(0,Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y));
 const out=[];
 if(g){
   const S=[...g.querySelectorAll('rect,circle,ellipse,path,polygon')].filter(e=>{
     const f=e.getAttribute('fill'); return f&&f!=='none'&&+(e.getAttribute('opacity')||1)>=0.5;});
   for(const t of g.querySelectorAll('text')){
     const tb=B(t); if(!tb||!tb.w) continue;
     let c=0;
     for(const s of S){
       if(!(t.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING)) continue;
       if(s.contains(t)) continue;
       const sb=B(s); if(sb) c=Math.max(c,O(tb,sb)/(tb.w*tb.h));
     }
     if(c>0.2) out.push(n+' | "'+t.textContent.trim().slice(0,22)+'" '+Math.round(c*100)+'% covered');
   }
 }
 const acc=JSON.parse(sessionStorage.getItem('sw')||'[]').concat(out);
 sessionStorage.setItem('sw',JSON.stringify(acc));
 const nxt=step+1; sessionStorage.setItem('step',String(nxt));
 if(nxt<100){ localStorage.setItem('starKeyEscape.furthest',String(nxt)); location.reload(); }
 return {room:n, swept:nxt, findings:acc.length};
})()`;

if (typeof window !== 'undefined') window.SWEEP_SRC = SWEEP;
