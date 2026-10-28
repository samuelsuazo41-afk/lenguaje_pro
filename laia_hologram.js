// laia_hologram.js - V34.3 CLEAN UNIFICADO - FIX TOTAL CUELLO + CADERA
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

  // CABEZA + CUELLO LIMPIO - SIN PINCH
  add(28,36,(u,fy)=>{ const fx=(u-0.5)*2; return {x:fx*0.11, y:0.86+fy*0.24, z:0.24*Math.sin(fy*Math.PI*0.85)*Math.cos(fx*0.5)}; });
  add(10,16,(u,fy)=>{ const ang=(u-0.5)*Math.PI*2; return {x:Math.cos(ang)*0.065, y:0.73+fy*0.12, z:Math.sin(ang)*0.065}; });

  // TORSO UNIFICADO - CURVA SUAVE, CINTURA 0.12 SOLO EN MEDIO, SIN CAIDA 3.1
  add(52,48,(u,fy)=>{
    const fx=u-0.5; 
    let py=0.73 - fy*0.60; // 0.73 a 0.13
    let wc;
    if(fy<0.20) wc=0.82;
    else if(fy<0.45) wc=0.82 - (fy-0.20)*1.8; // caida suave a 0.37
    else if(fy<0.60) wc=0.18; // CINTURA 0.18 (no 0.12) para no pinchar
    else wc=0.18 + (fy-0.60)*0.8; // sube a 0.50 en cadera
    let rW=0.26*(wc/0.82);
    let pz=Math.cos(fx*Math.PI*0.85)*0.10*wc;
    return {x:fx*rW*2.0, y:py, z:pz};
  });

  // PELVIS + PIERNAS UNIFICADAS - UN SOLO BLOQUE, SIN 2 LOBULOS SUPERPUESTOS
  // Esto elimina el bloque rayado: no hay 2 cilindros que se cruzan, hay 1 pelvis con gap
  const pelvisAndLeg = (sign)=>(u,fy)=>{
    // fy 0-1: 0= cadera arriba 0.13, 1= pie -0.85
    const ang=(u-0.5)*Math.PI*2;
    const cx=sign*0.095;
    let py, radius;
    if(fy<0.25){ // PELVIS 0.13 a -0.10
      py=0.13 - fy*0.92; // 0.13 a -0.10
      radius=0.1225;
    }else{ // PIERNA -0.10 a -0.85
      py=-0.10 - (fy-0.25)*0.92;
      radius=0.1225 - (fy-0.25)*0.015; // taper
    }
    let z = -Math.sin(ang)*radius*0.55;
    // diamond 0.0: solo aplasta entrepierna interna, sin exp, sin bulto
    if(sign>0 && Math.cos(ang)>0.7 && fy<0.30) z *= 0.2;
    if(sign<0 && Math.cos(ang)<-0.7 && fy<0.30) z *= 0.2;
    return {x:cx + Math.cos(ang)*radius, y:py, z:z};
  };
  add(32,28, pelvisAndLeg(-1));
  add(32,28, pelvisAndLeg(1));

  // BRAZOS
  const armT=(sign)=>(u,fy)=>{ const ang=(u-0.5)*Math.PI*2; const rad=0.038-fy*0.012; return {x:sign*(0.26+fy*0.75), y:0.58+Math.sin(ang)*rad, z:Math.cos(ang)*rad}; };
  add(18,20, armT(-1)); add(18,20, armT(1));

  const geo=new THREE.BufferGeometry(); 
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos,3)); 
  geo.setIndex(idx); 
  geo.computeVertexNormals();
  const wire=new THREE.WireframeGeometry(geo); 
  const mat=new THREE.LineBasicMaterial({color:0x00e5ff, transparent:true, opacity:0.40, depthWrite:false});
  group.add(new THREE.LineSegments(wire, mat)); 
  return geo;
}
export const buildV32_NEW_TEMPLATE = buildV34_FROM_SCRATCH;