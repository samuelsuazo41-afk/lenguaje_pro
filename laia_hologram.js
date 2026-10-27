// laia_hologram.js - V32.1 ORGANIC ANATOMICAL SEAM - BORRADO TOTAL CONO - 2 PIERNAS SEPARADAS REALES
// FIX CONO: antes sign*0.0 = 1 pierna. Ahora -0.095 y +0.095 = 2 piernas triangulares con cintura
// COSTURA NATURAL ORGÁNICA: cintura -> glúteos -> espalda -> entrepiernas -> axilas mamas -> cuello cabeza brazos manos pantorrillas pies

import * as THREE from 'three';

export function buildV32_FROM_SCRATCH(group) {
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

  // 1. CABEZA 28x36 depth 0.24 Bob Cut + CUELLO 0.12
  add(28,36,(u,fy)=>{
    const fx=(u-0.5)*2;
    return {x:fx*0.11, y:0.86+fy*0.24, z:0.24*Math.sin(fy*Math.PI*0.85)*Math.cos(fx*0.5)};
  });
  add(10,16,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    return {x:Math.cos(ang)*0.06, y:0.73+fy*0.13, z:Math.sin(ang)*0.06};
  });

  // 2. TORSO ANATÓMICO - ANCHURA 0.48m + CINTURA 0.12 narrowest + MAMAS + AXILAS + TRAPEZIUS 0.32 + LUMBAR 0.22-0.50 - TERMINA EN CADERA
  add(54,48,(u,fy)=>{
    const fx=u-0.5; 
    let py=0.73 - fy*0.62; // hasta cadera 0.11
    let wc;
    if(fy<0.22) wc=0.88;
    else if(fy<0.46) wc=0.88-(fy-0.22)*3.1;
    else if(fy<0.60) wc=0.12+(fy-0.46)*2.0;
    else wc=0.50;
    let rW = 0.24 * (wc/0.88);
    if(fy<0.24) rW+=0.03; // trapezius
    let pz = Math.cos(fx*Math.PI*0.88)*0.11*wc;
    // MAMAS orgánico
    if(fy>0.18 && fy<0.36 && Math.abs(fx)>0.08 && Math.abs(fx)<0.22){
      pz += 0.05*Math.exp(-Math.pow((fy-0.27)*8,2));
    }
    // ESPALDA FLAT GLUTEO
    if(fy>0.55) pz -= Math.exp(-Math.pow((fy-0.68)*5,2))*0.04;
    if(Math.abs(fx)<0.02) pz-=0.005;
    return {x:fx*rW*2.2, y:py, z:pz};
  });

  // 3. CADERA + GLÚTEOS + ENTREPIERNAS - DIAMOND CLOSED 0.0 - COSTURA NATURAL
  add(20,36,(u,fy)=>{
    const fx=u-0.5; let py=0.11 - fy*0.18;
    const rW = 0.26 - fy*0.02;
    let px=fx*rW*2.0;
    let pz=0.10*Math.cos(fx*Math.PI*0.9) - (fy>0.5?0.04:0);
    if(Math.abs(fx)<0.08) pz-=0.035; // entrepiernas
    return {x:px, y:py, z:pz};
  });

  // 4. 2 PIERNAS SEPARADAS REALES - FIX CONO - IZQ -0.095 DER +0.095 - CADERA 0.335*wc - TRIANGULARES CON CINTURA
  const legLeft = (u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const thigh=0.098 - fy*0.022;
    const cx=-0.095; // separación real
    return {
      x: cx + Math.cos(ang)*thigh,
      y: -0.07 - fy*0.84,
      z: Math.sin(ang)*thigh*0.68 + (fy<0.18?0.06*Math.exp(-Math.pow((fy-0.08)*5,2)):0)
    };
  };
  const legRight = (u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const thigh=0.098 - fy*0.022;
    const cx=0.095;
    return {
      x: cx + Math.cos(ang)*thigh,
      y: -0.07 - fy*0.84,
      z: Math.sin(ang)*thigh*0.68 + (fy<0.18?0.06*Math.exp(-Math.pow((fy-0.08)*5,2)):0)
    };
  };
  add(42,28, legLeft);
  add(42,28, legRight);

  // 5. BRAZOS T-POSE 90° + AXILAS LIMPIAS + MANOS + PANTORRILLAS + PIES
  const armT=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2; const rad=0.038 - fy*0.012;
    return {x:sign*(0.26+fy*0.88), y:0.60+Math.sin(ang)*rad, z:Math.cos(ang)*rad};
  };
  add(20,24, armT(-1));
  add(20,24, armT(1));
  add(8,8,(u,fy)=>{ return {x:-1.14+(u-0.5)*0.10, y:0.60, z:0}; });
  add(8,8,(u,fy)=>{ return {x:1.14+(u-0.5)*0.10, y:0.60, z:0}; });
  add(10,12,(u,fy)=>{ return {x:-0.095+(u-0.5)*0.06, y:-0.91-fy*0.05, z:0.04}; });
  add(10,12,(u,fy)=>{ return {x:0.095+(u-0.5)*0.06, y:-0.91-fy*0.05, z:0.04}; });

  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos,3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const wire=new THREE.WireframeGeometry(geo);
  const mat=new THREE.LineBasicMaterial({color:0x00e5ff, transparent:true, opacity:0.42, depthWrite:false});
  group.add(new THREE.LineSegments(wire, mat));
  return geo;
}

// Alias para compatibilidad
export const buildV32_NEW_TEMPLATE = buildV32_FROM_SCRATCH;
export function buildV32Avatar(g){ return buildV32_FROM_SCRATCH(g); }