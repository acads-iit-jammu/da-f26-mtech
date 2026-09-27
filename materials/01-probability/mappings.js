'use strict';
const el=id=>document.getElementById(id), f=x=>x.toFixed(4);
function update(){
 const model=el('model').value,u=+el('u').value,v=+el('v').value;
 const t=model==='A'?Math.cos(Math.PI*u/2):model==='B'?u:Math.sqrt(u), phi=2*Math.PI*v;
 const n=[Math.cos(phi),Math.sin(phi)],h=Math.sqrt(1-t*t),m=n.map(x=>t*x);
 const p=[m[0]-h*n[1],m[1]+h*n[0]],q=[m[0]+h*n[1],m[1]-h*n[0]];
 const xy=p=>[190+130*p[0],160-130*p[1]];
 const a=xy(p),b=xy(q),c=xy(m);
 for(const [k,val]of Object.entries({x1:a[0],y1:a[1],x2:b[0],y2:b[1]}))el('chord').setAttribute(k,val);
 el('midpoint').setAttribute('cx',c[0]);el('midpoint').setAttribute('cy',c[1]);el('radius').setAttribute('x2',c[0]);el('radius').setAttribute('y2',c[1]);
 // Recover the inverse from endpoint geometry, independently of the supplied coordinates.
 const midpoint=[(p[0]+q[0])/2,(p[1]+q[1])/2],rt=Math.hypot(...midpoint);
 let angle=Math.atan2(midpoint[1],midpoint[0]);if(angle<0)angle+=2*Math.PI;
 const ru=model==='A'?2/Math.PI*Math.acos(rt):model==='B'?rt:rt*rt;
 el('uo').textContent=f(u);el('vo').textContent=f(v);
 el('formula').textContent={A:'t = cos(πu/2); u = (2/π) arccos(t)',B:'t = u; u = t',C:'t = √u; u = t²'}[model]+'; φ = 2πv; v = φ/(2π)';
 el('length').textContent='Length X = '+f(2*h);el('distance').textContent='t = D/R = '+f(t);el('event').textContent=t<.5?'X > √3: event holds':'X ≤ √3: event does not hold';
 el('forward').textContent='(φ, t) = ('+f(phi)+', '+f(t)+')';el('inverse').textContent='(u, v) = ('+f(ru)+', '+f(angle/(2*Math.PI))+')';
 const threshold={A:2/3,B:1/2,C:1/4}[model];el('interval').setAttribute('x1',20+560*(model==='A'?threshold:0));el('interval').setAttribute('x2',20+560*(model==='A'?1:threshold));el('source').setAttribute('cx',20+560*u);
 el('preimage').textContent={A:'Ψ_A⁻¹(E) = {(u,v): u > 2/3}. Probability = 1/3.',B:'Ψ_B⁻¹(E) = {(u,v): u < 1/2}. Probability = 1/2.',C:'Ψ_C⁻¹(E) = {(u,v): u < 1/4}. Probability = 1/4.'}[model];
 window.mappingState={model,u,v,t,p,q,recoveredU:ru,recoveredV:angle/(2*Math.PI)};
}
function coin(){el('coin').textContent={one:'X⁻¹({1}) = {HT, TH}. P_X({1}) = 2/4 = 1/2.',positive:'X⁻¹({1, 2}) = {HH, HT, TH}. P_X({1, 2}) = 3/4.',zero:'X⁻¹({0}) = {TT}. P_X({0}) = 1/4.'}[el('set').value];}
for(const id of ['model','u','v'])el(id).addEventListener('input',update);el('set').addEventListener('change',coin);update();coin();
