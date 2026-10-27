// laia_hologram.js - V32 NEW TEMPLATE FROM SCRATCH - BORRADO TOTAL V31
// MAPEO ANATÓMICO DIRECTO DEL BLUEPRINT: Anchura 0.48m, Cintura 0.12 narrowest, Cadera 0.335*wc, Cabeza 28x36 depth 0.24, Trapezius 0.32, Cuello 0.12, Lumbar 0.22-0.50, Flat Gluteo Neutral Stance, Diamond Closed 0.0, Clean Quad Topology

import * as THREE from 'three';

export function buildV32Avatar(group) {
  group.clear();
  const pos=[], idx=[]; let v=0;
  const add=(rows,cols,fn)=>{
    const s=v;
    for(let y=0;y<rows;y++) for(let x=0;x<cols;x++){
      let p=fn(x/(cols-1), y/(rows-1));
      pos.push(p.x,p.y,p.z); v++;
    }
    for(let y=0;y<rows-1;y++) for(let x=0;x<cols-1;x++){
      const a=s+y*cols+x, b=a+1, c=a+cols, d=c+1;
      idx.push(a,c,b,b,c,d);
    }
  };

  // CABEZA 28x36 depth 0.24 - Bob Cut
  add(28,36,(u,fy)=>{
    const fx=(u-0.5)*2;
    return {x:fx*0.11, y:0.85+fy*0.24, z:0.24*Math.sin(fy*Math.PI*0.8)*Math.cos(fx*0.5)};
  });
  // CUELLO 0.12
  add(8,16,(u,fy)=>{
    const a=(u-0.5)*Math.PI*2;
    return {x:Math.cos(a)*0.06, y:0.73+fy*0.12, z:Math.sin(a)*0.06};
  });
  // TORSO V32: Anchura 0.48m, Trapezius 0.32, Cintura 0.12, Cadera 0.335*wc, Lumbar 0.22-0.50, Flat Gluteo, Spine Neutral
  add(64,48,(u,fy)=>{
    const fx=u-0.5;
    let py=0.72 - fy*0.82;
    let wc;
    if(fy<0.18) wc=0.88;
    else if(fy<0.38) wc=0.88-(fy-0.18)*2.8;
    else if(fy<0.50) wc=0.12;
    else if(fy<0.70) wc=0.12+(fy-0.50)*1.8;
    else wc=0.48;
    let rW = fy>0.50 ? 0.335*wc : 0.48/2 * (wc/0.88);
    if(fy<0.20 && Math.abs(fx)>0.18) rW+=0.02; // trapezius 0.32
    let px=fx*rW*2.0;
    let pz=Math.cos(fx*Math.PI*0.9)*0.12*wc;
    if(fy>0.58 && fy<0.75) pz -= Math.exp(-Math.pow((fy-0.66)*6,2))*0.06; // flat gluteo
    return {x:px,y:py,z:pz};
  });
  // BRAZOS T-POSE 90° - Clean
  const arm=(s)=>(u,fy)=>{ const a=(u-0.5)*Math.PI*2; return {x:s*(0.24+fy*0.92), y:0.62+Math.sin(a)*0.03, z:Math.cos(a)*0.03}; };
  add(18,24,arm(-1)); add(18,24,arm(1));
  // PIERNAS DIAMOND CLOSED 0.0 - Clean Quad Topology - Neutral Stance
  const leg=(u,fy)=>{ const a=(u-0.5)*Math.PI*2; const r=0.09-fy*0.015; return {x:Math.cos(a)*r, y:0.08-fy*0.96, z:Math.sin(a)*r*0.7}; };
  add(36,24,leg); add(36,24,leg);
  // MANOS + PIES
  add(6,6,(u,fy)=>{return{x:-1.16+(u-0.5)*0.1,y:0.62,z:0}}); add(6,6,(u,fy)=>{return{x:1.16+(u-0.5)*0.1,y:0.62,z:0}});
  add(10,12,(u,fy)=>{return{x:(u-0.5)*0.05,y:-0.88-fy*0.05,z:0.03}}); add(10,12,(u,fy)=>{return{x:(u-0.5)*0.05,y:-0.88-fy*0.05,z:0.03}});

  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos,3));
  geo.setIndex(idx); geo.computeVertexNormals();
  group.add(new THREE.LineSegments(new THREE.WireframeGeometry(geo), new THREE.LineBasicMaterial({color:0x00e5ff, transparent:true, opacity:0.38})));
  return geo;
}