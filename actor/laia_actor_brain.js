// laia_hologram.js V30.21 FINAL TEMPLATE BEST - PANTALÓN + OXFORDS - CURVAS SUAVES - 0.52->0.146
import * as THREE from 'three';
import { LAIA_ACTOR_BRAIN } from './actor/laia_actor_brain.js';

export function initLaiaHologram(canvas, THREE_MOD){
  const THREE_LIB = THREE_MOD || THREE;
  const group = new THREE_LIB.Group();
  group.scale.set(0.58,0.58,0.58); // FIX mobile 0.32 -> 0.58
  group.position.y = -0.15;

  // Material doble - FIX 0.19 invisible -> 0.38 visible
  const pos=[], idx=[]; let v=0;
  const add=(rows,cols,fn)=>{
    const s=v;
    for(let y=0;y<rows;y++) for(let x=0;x<cols;x++){ const p=fn(x/(cols-1), y/(rows-1)); pos.push(p.x,p.y,p.z); v++; }
    for(let y=0;y<rows-1;y++) for(let x=0;x<cols-1;x++){ const a=s+y*cols+x, b=a+1, c=a+cols, d=c+1; idx.push(a,c,b,b,c,d); }
  };

  // CABEZA 48x64 HUMANOIDE - NO SPHERE
  add(48,64,(u,fy)=>{
    const fx=(u-0.5)*2; let px=fx*0.16*(0.8+0.2*Math.cos(fy*Math.PI));
    let py=0.78+fy*0.32; let pz=0.14*Math.cos(fx*1.2)*Math.sin(fy*Math.PI);
    if(fy>0.65||Math.abs(fx)>0.55){ const bob=Math.exp(-Math.pow((fy-0.75)*2,2)); pz+=(Math.abs(fx)>0.5?0.03:0)*bob; px*=1.08; }
    return {x:px,y:py,z:pz};
  });

  // TORSO 90x70 BLAZER 0.52->0.146 CURVA SUAVE + LAPELAS 0.042 + BOTONES 0.008
  add(90,70,(u,fy)=>{
    const fx=u-0.5; let py=fy*0.92-0.12;
    let wc=fy<0.18?0.86+fy*0.2:fy<0.58?0.52+Math.pow((fy-0.38)*1.8,2)*0.18:0.82+(fy-0.58)*0.55;
    let rW=0.33*wc; 
    if(Math.abs(fx)>0.11&&Math.abs(fx)<0.24&&fy>0.26&&fy<0.72) rW-=Math.sin((fy-0.26)/0.46*Math.PI)*0.038;
    let px=fx*rW*2.0, pz=Math.cos(fx*Math.PI*0.96)*0.155*wc;
    if(fy>0.60&&fy<0.92){ const lap=Math.exp(-Math.pow((fy-0.78)*5.8,2)); if(fx>0.01&&fx<0.22){ pz+=0.042*lap; px+=0.018*lap; } if(fx<-0.01&&fx>-0.22){ pz+=0.042*lap; px-=0.018*lap; } }
    if(Math.abs(fx)<0.02&&((fy>0.42&&fy<0.46)||(fy>0.55&&fy<0.59))) pz+=0.014;
    if(fy>0.87){ pz+=(fy-0.87)*0.14; py+=(fy-0.87)*0.20; px*=0.62; }
    return {x:px,y:py,z:pz};
  });

  // BRAZOS 28x28 T-POSE 0.92 SOLDADOS
  add(28,28,(u,fv)=>{ const ang=(u-0.5)*Math.PI*2, rad=0.052*(1-fv*0.22); return {x:-0.34-fv*0.92+Math.cos(ang)*rad*0.32, y:0.63-fv*0.02+Math.sin(ang)*rad, z:Math.cos(ang)*rad*0.82}; });
  add(28,28,(u,fv)=>{ const ang=(u-0.5)*Math.PI*2, rad=0.052*(1-fv*0.22); return {x:0.34+fv*0.92+Math.cos(ang)*rad*0.32, y:0.63-fv*0.02+Math.sin(ang)*rad, z:Math.cos(ang)*rad*0.82}; });

  // PANTALÓN 60x40 SASTRE + DIAMOND CLOSED 100%
  const legSep=0.068; // V30.11 gap soldado
  add(60,40,(u,fy)=>{ const ang=(u-0.5)*Math.PI*2; let rad=0.105-fy*0.015; return {x:-legSep+Math.cos(ang)*rad, y:0.08-fy*0.98, z:Math.sin(ang)*rad*0.65}; });
  add(60,40,(u,fy)=>{ const ang=(u-0.5)*Math.PI*2; let rad=0.105-fy*0.015; return {x:legSep+Math.cos(ang)*rad, y:0.08-fy*0.98, z:Math.sin(ang)*rad*0.65}; });
  
  // FIX DIAMOND BRIDGE - cierra hueco entre piernas
  add(3,6,(u,fy)=>{ return {x:(u-0.5)*0.136, y:0.08-fy*0.06, z:0.02*Math.cos((u-0.5)*Math.PI)}; });

  // OXFORDS 18x28
  add(18,28,(u,fy)=>{ const fx=u-0.5; let px=-0.068+fx*0.11, py=-0.92-fy*0.12, pz=(fy-0.5)*0.28+0.08; return {x:px,y:py,z:pz}; });
  add(18,28,(u,fy)=>{ const fx=u-0.5; let px=0.068+fx*0.11, py=-0.92-fy*0.12, pz=(fy-0.5)*0.28+0.08; return {x:px,y:py,z:pz}; });

  const geo=new THREE_LIB.BufferGeometry();
  geo.setAttribute('position', new THREE_LIB.Float32BufferAttribute(pos,3));
  geo.setIndex(idx); geo.computeVertexNormals();
  const wire=new THREE_LIB.WireframeGeometry(geo);
  const mat=new THREE_LIB.LineBasicMaterial({color:0x00e5ff, transparent:true, opacity:0.38, depthWrite:false});
  group.add(new THREE_LIB.LineSegments(wire, mat));
  
  const brain = LAIA_ACTOR_BRAIN.createLaiaSkeleton(THREE_LIB, group);
  return { group, brain, geo };
}