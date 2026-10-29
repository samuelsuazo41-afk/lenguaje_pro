// laia_hologram.js - V35.1 PUZZLE GANADORA - TORSO FULL 360° CERRADO - FIX MALLA FRONTAL
// Plantilla 1 V30.74 + Plantilla 2 MODULAR A-E + Fix torso = piernas/brazos
// FIX: Torso ahora es cilindro elíptico cerrado 360°, no plano frontal
import * as THREE from 'three';

export function buildV35_FROM_SCRATCH(group) {
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

  // ========== MODULE A - HEAD+NECK 28x36 360° ==========
  add(28,36,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2; // FIX 360° completo
    const y=0.88+fy*0.24;
    const r=Math.sin(fy*Math.PI)*0.125;
    return {x:Math.cos(ang)*r, y:y, z:Math.sin(ang)*r*0.92};
  });
  add(12,24,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    return {x:Math.cos(ang)*0.065, y:0.73+fy*0.14, z:Math.sin(ang)*0.065};
  });

  // ========== MODULE B - TORSO FULL 360° CERRADO - FIX GANADOR ==========
  // ANTES: x=fx*rW*2.1 -> plano frontal solo - AHORA: cilindro elíptico 360° como piernas
  add(52,48,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2; // FULL 360° CERRADO
    let py=0.73 - fy*0.60; // 0.73 a 0.13
    let wc;
    if(fy<0.22) wc=0.82;
    else if(fy<0.48) wc=0.82 - (fy-0.22)*1.6; // 0.82 a 0.40
    else if(fy<0.65) wc=0.20; // CINTURA 0.20 ganadora
    else wc=0.20 + (fy-0.65)*0.75; // 0.20 a 0.50 cadera

    const rW=0.22*(wc/0.82); // radio lateral
    const rD=rW*0.58; // profundidad pecho-espalda más estrecha
    
    return {
      x: Math.cos(ang)*rW,
      y: py,
      z: Math.sin(ang)*rD
    };
  });
  
  // Pecho volumen - 2 esferas pequeñas 360°
  const breast=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const r=0.035+Math.cos(fy*Math.PI*0.5)*0.018;
    return {
      x: sign*0.085 + Math.cos(ang)*r*0.7,
      y: 0.56-fy*0.10,
      z: 0.14 + Math.sin(ang)*r*0.5
    };
  };
  add(14,18, breast(-1));
  add(14,18, breast(1));

  // ========== BRAZOS FULL 360° - T-POSE 0.48m ==========
  const arm360=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const rad=0.042 - fy*0.014;
    const len=0.26+fy*0.76;
    return {x:sign*len, y:0.58+Math.sin(ang)*rad, z:Math.cos(ang)*rad};
  };
  add(22,28, arm360(-1));
  add(22,28, arm360(1));

  // ========== MODULE C - LOWER BODY WAIST TO FEET - FULL 360° - -0.095/+0.095 radius 0.1225 ==========
  const lowerBody=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const cx=sign*0.095;
    let py, radius;
    if(fy<0.22){ py=0.13 - fy*1.05; radius=0.1225; }
    else if(fy<0.60){ py=-0.08 - (fy-0.22)*0.84; radius=0.1225 - (fy-0.22)*0.03; }
    else{ py=-0.40 - (fy-0.60)*1.12; radius=0.0925 - (fy-0.60)*0.02; }
    let zScale=0.62;
    if(sign>0 && Math.cos(ang)>0.6 && fy<0.28) zScale*=0.25;
    if(sign<0 && Math.cos(ang)<-0.6 && fy<0.28) zScale*=0.25;
    return {x: cx + Math.cos(ang)*radius, y: py, z: Math.sin(ang)*radius*zScale};
  };
  add(40,32, lowerBody(-1));
  add(40,32, lowerBody(1));

  // PIES
  const foot=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    return {x:sign*0.095+Math.cos(ang)*0.036, y:-0.85 - fy*0.05, z:0.05+fy*0.09+Math.sin(ang)*0.014};
  };
  add(10,16, foot(-1));
  add(10,16, foot(1));

  // ========== MODULE E - HANDS 5 DEDOS FULL 360° ==========
  const hand=(sign)=>(u,fy)=>{
    if(fy<0.38){
      const ang=(u-0.5)*Math.PI*2;
      return {x:sign*1.04 + Math.cos(ang)*0.034, y:0.58 + Math.sin(ang)*0.020, z:Math.sin(ang)*0.015};
    }else{
      const finger=Math.floor(u*5);
      const fu=(u*5)%1;
      const ang=(fu-0.5)*Math.PI*2;
      return {x:sign*(1.08+fy*0.07) + Math.cos(ang)*0.009, y:0.585+Math.sin(ang)*0.009, z:(finger-2)*0.018};
    }
  };
  add(14,24, hand(-1));
  add(14,24, hand(1));

  // FINAL COMPILADO
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos,3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const wire=new THREE.WireframeGeometry(geo);
  const mat=new THREE.LineBasicMaterial({color:0x00e5ff, transparent:true, opacity:0.40, depthWrite:false});
  group.add(new THREE.LineSegments(wire, mat));
  console.log("LAIA V35.1 - TORSO FULL 360° CERRADO - A=HEAD+NECK B=TORSO C=WAIST-TO-FEET E=HANDS - FIX MALLA FRONTAL");
  return geo;
}

export const buildV35_1_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV34_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV32_NEW_TEMPLATE = buildV35_FROM_SCRATCH; 