// laia_hologram.js V30.85 FIX PROPORCIONAL - SIN ERRORES DEPLOID
import * as THREE from 'three';
import { LAIA_ACTOR_BRAIN } from './actor/laia_actor_brain.js';

export function initLaiaHologram(canvas, THREE_MOD){
  const THREE_LIB = THREE_MOD || THREE;
  const group = new THREE_LIB.Group();
  group.scale.set(0.58,0.58,0.58);
  group.position.y = -0.15;
  const pos=[], idx=[], sections=[]; let v=0;
  const X_CLAMP = 0.1976;
  const add=(rows,cols,fn,label)=>{
    const s=v;
    for(let y=0;y<rows;y++) for(let x=0;x<cols;x++){
      const p=fn(x/(cols-1), y/(rows-1));
      if(p.x > X_CLAMP) p.x = X_CLAMP - Math.pow(p.x - X_CLAMP,3)*0.5;
      if(p.x < -X_CLAMP) p.x = -X_CLAMP + Math.pow(-X_CLAMP - p.x,3)*0.5;
      pos.push(p.x,p.y,p.z); v++;
    }
    for(let y=0;y<rows-1;y++) for(let x=0;x<cols-1;x++){
      const a=s+y*cols+x, b=a+1, c=a+cols, d=c+1; idx.push(a,c,b,b,c,d);
    }
    if(label) sections.push({label, rows, cols});
  };

  // CABEZA 28x36 Ø0.24
  add(48,64,(u,fy)=>{
    const fx=(u-0.5)*2; let px=fx*0.16*(0.8+0.2*Math.cos(fy*Math.PI));
    let py=0.78+fy*0.32; let pz=0.14*Math.cos(fx*1.2)*Math.sin(fy*Math.PI);
    return {x:px,y:py,z:pz};
  },'HEAD');

  // TORSO 90x70 0.52->0.146 + Cresta 0.335*wc + Axilla clean sin cono
  add(90,70,(u,fy)=>{
    const fx=u-0.5; let py=fy*0.92-0.12;
    let wc = fy<0.18?0.86+fy*0.2:fy<0.58?0.52+Math.pow((fy-0.38)*1.8,2)*0.18:0.82+(fy-0.58)*0.55;
    let rW=0.33*wc; 
    if(Math.abs(fx)>0.11&&Math.abs(fx)<0.24&&fy>0.26&&fy<0.72) rW-=Math.sin((fy-0.26)/0.46*Math.PI)*0.028;
    let px=fx*rW*2.0, pz=Math.cos(fx*Math.PI*0.96)*0.155*wc;
    if(fy>0.60&&fy<0.92){ const lap=Math.exp(-Math.pow((fy-0.78)*5.8,2)); if(fx>0.01&&fx<0.22){ pz+=0.042*lap; px+=0.018*lap; } if(fx<-0.01&&fx>-0.22){ pz+=0.042*lap; px-=0.018*lap; } }
    return {x:px,y:py,z:pz};
  },'TORSO');

  // BRAZOS 28x28 + taper 0.054->0.018
  add(28,28,(u,fv)=>{ const ang=(u-0.5)*Math.PI*2, rad=(0.054-fv*0.036)*0.52; return {x:-0.34-fv*0.92+Math.cos(ang)*rad*0.32, y:0.63-fv*0.02+Math.sin(ang)*rad, z:Math.cos(ang)*rad*0.82}; });
  add(28,28,(u,fv)=>{ const ang=(u-0.5)*Math.PI*2, rad=(0.054-fv*0.036)*0.52; return {x:0.34+fv*0.92+Math.cos(ang)*rad*0.32, y:0.63-fv*0.02+Math.sin(ang)*rad, z:Math.cos(ang)*rad*0.82}; });

  // PIERNAS FIX 62x42 CONTINUAS - SIN ESCALÓN
  const legSep=0.052;
  const legFn = (sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    let baseRad = 0.108 - fy*0.022 + Math.sin(fy*Math.PI)*0.018;
    if(fy<0.25) baseRad = 0.11 - fy*0.14 + 0.145*Math.exp(-Math.pow((fy-0.12)*6,2)) * (Math.cos(ang)>0?0.6:0.2);
    if(fy>0.35&&fy<0.55) baseRad *= 0.88;
    if(fy>0.60&&fy<0.78) baseRad += 0.022*Math.exp(-Math.pow((fy-0.66)*8,2));
    const r = baseRad + Math.cos(ang)*0.012;
    return {x:sign*legSep + Math.cos(ang)*r, y:0.10 - fy*0.98, z:Math.sin(ang)*r*0.72 + (fy>0.60? -0.16*Math.exp(-Math.pow((fy-0.66)*4,2)):0)};
  };
  add(62,42,legFn(-1),'LEG_L');
  add(62,42,legFn(1),'LEG_R');
  
  // DIAMOND BRIDGE 8x12 U-shape flat gap 0.0
  add(8,12,(u,fy)=>{ return {x:(u-0.5)*0.104, y:0.10 - fy*0.08, z:Math.cos((u-0.5)*Math.PI)*0.02 + 0.01}; },'DIAMOND');
  
  // RODILLA FAN 32 dual core seamless
  add(32,16,(u,fy)=>{ const ang=(u-0.5)*Math.PI*2, rad=0.068+Math.sin(fy*Math.PI)*0.008; return {x:-0.052+Math.cos(ang)*rad*0.5, y:-0.28-fy*0.08, z:Math.sin(ang)*rad*0.6}; },'KNEE_L');
  add(32,16,(u,fy)=>{ const ang=(u-0.5)*Math.PI*2, rad=0.068+Math.sin(fy*Math.PI)*0.008; return {x:0.052+Math.cos(ang)*rad*0.5, y:-0.28-fy*0.08, z:Math.sin(ang)*rad*0.6}; },'KNEE_R');

  // MANOS Palma 0.14x0.08 + 5 dedos 125 verts
  const addHand = (side)=>{
    const baseX = side<0? -1.28 : 1.28;
    add(14,12,(u,fy)=>{ return {x:baseX+(u-0.5)*0.14*0.6, y:0.58-fy*0.14, z:(fy-0.5)*0.08}; },'PALM');
    for(let d=0;d<5;d++) add(8,8,(u,fy)=>{ const ang=(u-0.5)*Math.PI*2, rad=0.012-d*0.001; return {x:baseX+(d-2)*0.022+Math.cos(ang)*rad, y:0.44-fy*0.10, z:0.02+Math.sin(ang)*rad}; });
  };
  addHand(-1); addHand(1);

  add(18,28,(u,fy)=>{ return {x:-0.052+(u-0.5)*0.11, y:-0.92-fy*0.12, z:(fy-0.5)*0.28+0.08}; });
  add(18,28,(u,fy)=>{ return {x:0.052+(u-0.5)*0.11, y:-0.92-fy*0.12, z:(fy-0.5)*0.28+0.08}; });

  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos,3));
  geo.setIndex(idx); geo.computeVertexNormals();
  geo.userData = { X_CLAMP, proportional:{glute:1.0,thigh:0.7,knee:0.5,calf:0.6}, falloff:'exp(-(t*2.2)²)' };
  const wire=new THREE.WireframeGeometry(geo);
  group.add(new THREE.LineSegments(wire, new THREE.LineBasicMaterial({color:0x00e5ff, transparent:true, opacity:0.38})));
  
  const brain = LAIA_ACTOR_BRAIN.createLaiaSkeleton(THREE_LIB, group, { X_CLAMP:0.1976, sections, proportional:{glute:1.0,thigh:0.7,knee:0.5,calf:0.6} });
  return { group, brain, geo };
}