// laia_hologram.js - V34.1 SOLDADURA ORGANICA + PUZZLE X-CLAMP ±0.1976
// BASE TU V32.4 - FIX CIRCULAR MATCH 0.1225mm - CAP QUAD CLOSED - DIAMOND 0.0
// V30.74 BLUEPRINT VALIDATED + V34 BLUEPRINT

import * as THREE from 'three';

export function buildV34_FROM_SCRATCH(group) {
  group.clear();
  const pos=[], idx=[]; let v=0;
  const add=(rows,cols,fn)=>{
    const s=v;
    for(let y=0;y<rows;y++) for(let x=0;x<cols;x++){
      const p=fn(x/(cols-1), y/(rows-1));
      pos.push(p.x,p.y,p.z); v++;
    }
    for(let y=0;y<rows-1;y++) for(let x=0;x<cols-1;x++){
      const a=s+y*cols+x, b=a+1, c=a+cols, d=c+1;
      idx.push(a,c,b,b,c,d);
    }
  };

  // 1. CABEZA 28x36 depth 0.24 + CUELLO 0.12 - Mismo tuyo
  add(28,36,(u,fy)=>{ const fx=(u-0.5)*2; return {x:fx*0.11, y:0.86+fy*0.24, z:0.24*Math.sin(fy*Math.PI*0.85)*Math.cos(fx*0.5)}; });
  add(10,16,(u,fy)=>{ const ang=(u-0.5)*Math.PI*2; return {x:Math.cos(ang)*0.06, y:0.73+fy*0.13, z:Math.sin(ang)*0.06}; });

  // 2. TORSO + CINTURA 0.12 + CRESTA 0.1976 - S CURVE - Hasta 0.11
  add(52,48,(u,fy)=>{
    const fx=u-0.5; let py=0.73 - fy*0.62;
    let wc; if(fy<0.22) wc=0.88; else if(fy<0.46) wc=0.88-(fy-0.22)*3.1; else if(fy<0.60) wc=0.12; else wc=0.50;
    let rW=0.24*(wc/0.88); if(fy<0.24) rW+=0.03;
    let pz=Math.cos(fx*Math.PI*0.88)*0.11*wc;
    if(fy>0.18&&fy<0.36&&Math.abs(fx)>0.08&&Math.abs(fx)<0.22) pz+=0.05*Math.exp(-Math.pow((fy-0.27)*8,2));
    if(fy>0.55) pz-=Math.exp(-Math.pow((fy-0.68)*5,2))*0.04;
    return {x:fx*rW*2.2, y:py, z:pz};
  });

  // 3. PELVIS SOLDADA - TU LÓGICA + RADIUS V34 0.1225 PARA X-CLAMP ±0.1976
  // FIX: radio pasa de 0.108 a 0.1225 para que cresta = 0.38*wc = 0.1976
  const pelvisLobe = (sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const cx=sign*0.095; // MISMO CENTRO PIERNAS - CIRCULAR MATCH
    const radius=0.1225; // V34 FIX - antes 0.108 tuyo -> ahora 0.1225 validado
    const py=0.11 - fy*0.24; // 0.11 a -0.13 siembre
    let zBase = -Math.sin(ang)*radius*0.68;
    if(fy>0.5) zBase -= 0.05*Math.exp(-Math.pow((fy-0.7)*4,2));
    if(Math.abs(Math.cos(ang))>0.7 && fy>0.7){ zBase -= 0.035; } // diamond 0.0 flat
    return {x:cx + Math.cos(ang)*radius, y:py, z:zBase + 0.06*Math.cos((u-0.5)*Math.PI)};
  };
  add(24,28, pelvisLobe(-1));
  add(24,28, pelvisLobe(1));

  // 4. PIERNAS SOLDADAS - EMPIEZAN EN -0.13 MISMO RADIO - SIN ESCALON
  const legWelded = (sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const cx=sign*0.095;
    const thigh=0.1225 - fy*0.015; // V34 FIX taper 0.1225 -> 0.1075
    let zBase = -Math.sin(ang)*thigh*0.68;
    if(fy<0.15) zBase -= 0.05*Math.exp(-Math.pow((fy-0.06)*5,2));
    return {x:cx + Math.cos(ang)*thigh, y:-0.13 - fy*0.78, z:zBase};
  };
  add(44,28, legWelded(-1));
  add(44,28, legWelded(1));

  // 5. BRAZOS T-POSE + MANOS + PIES
  const armT=(sign)=>(u,fy)=>{ const ang=(u-0.5)*Math.PI*2; const rad=0.038-fy*0.012; return {x:sign*(0.26+fy*0.88), y:0.60+Math.sin(ang)*rad, z:Math.cos(ang)*rad}; };
  add(20,24, armT(-1)); add(20,24, armT(1));
  add(8,8,(u,fy)=>({x:-1.14+(u-0.5)*0.10, y:0.60, z:0})); add(8,8,(u,fy)=>({x:1.14+(u-0.5)*0.10, y:0.60, z:0}));
  add(10,12,(u,fy)=>({x:-0.095+(u-0.5)*0.06, y:-0.91-fy*0.05, z:0.04})); add(10,12,(u,fy)=>({x:0.095+(u-0.5)*0.06, y:-0.91-fy*0.05, z:0.04}));

  const geo=new THREE.BufferGeometry(); 
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos,3)); 
  geo.setIndex(idx); 
  geo.computeVertexNormals();
  const wire=new THREE.WireframeGeometry(geo); 
  const mat=new THREE.LineBasicMaterial({color:0x00e5ff, transparent:true, opacity:0.38, depthWrite:false});
  group.add(new THREE.LineSegments(wire, mat)); 
  return geo;
}
export const buildV32_NEW_TEMPLATE = buildV34_FROM_SCRATCH;
export const buildV34Avatar = buildV34_FROM_SCRATCH;
export function buildV32Avatar(g){ return buildV34_FROM_SCRATCH(g); } 