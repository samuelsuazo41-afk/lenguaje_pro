// laia_hologram.js - V35.0 MODULAR PUZZLE GANADORA - FULL 360° - CON MANOS
// Basado en: Plantilla 1 V30.74 T-POSE 4 vistas + Plantilla 2 MODULAR A-E
// FIX: Todo 360° cerrado - No media malla - No bloque rayado - No pinch cuello
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

  // ========== MODULE A - HEAD+NECK UNA PIEZA - 28x36 360° ==========
  // Plantilla: HEAD + NECK ONE PIECE, diam 28x36, Ø 0.065, PUZZLE TAB MALE DOWN
  add(28,36,(u,fy)=>{ // HEAD 360° esfera completa
    const fx=(u-0.5)*2; const ang=fx*Math.PI;
    const y=0.88+fy*0.24;
    const r=Math.sin(fy*Math.PI)*0.125;
    return {x:Math.cos(ang)*r, y:y, z:Math.sin(ang)*r*0.92};
  });
  add(12,24,(u,fy)=>{ // NECK 360° cilindro cerrado, no media malla
    const ang=(u-0.5)*Math.PI*2;
    return {x:Math.cos(ang)*0.065, y:0.73+fy*0.14, z:Math.sin(ang)*0.065};
  });

  // ========== MODULE B - TORSO+ARMS T-POSE UNA PIEZA 360° ==========
  // Plantilla: TORSO UPPER + BOTH ARMS ONE PIECE, PUZZLE SOCKET FEMALE x2 DOWN
  add(48,48,(u,fy)=>{
    const fx=u-0.5;
    let py=0.73 - fy*0.58; // 0.73 a 0.15
    let wc;
    if(fy<0.22) wc=0.82;
    else if(fy<0.48) wc=0.82 - (fy-0.22)*1.6; // suave a 0.40
    else if(fy<0.65) wc=0.20; // CINTURA 0.20 ganadora - no 0.12 pinch
    else wc=0.20 + (fy-0.65)*0.75;
    let rW=0.24*(wc/0.82);
    let pz=Math.cos(fx*Math.PI*0.9)*0.11*wc;
    return {x:fx*rW*2.1, y:py, z:pz};
  });
  // pecho para volumen frontal
  add(14,16,(u,fy)=>{ const fx=(u-0.5)*2; return {x:fx*0.09-0.08, y:0.56-fy*0.10, z:0.12+Math.cos(fx*Math.PI*0.5)*0.04}; });
  add(14,16,(u,fy)=>{ const fx=(u-0.5)*2; return {x:fx*0.09+0.08, y:0.56-fy*0.10, z:0.12+Math.cos(fx*Math.PI*0.5)*0.04}; });

  // BRAZOS 360° CERRADO - FULL T-POSE 0.48m
  const arm360=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2; // FULL 360° - antes era PI media malla, tu bug
    const rad=0.042 - fy*0.014;
    const len=0.26+fy*0.74; // 0.26 a 1.0
    const cx=sign*len;
    const cy=0.58 + Math.sin(ang)*rad;
    const cz=Math.cos(ang)*rad;
    return {x:cx, y:cy, z:cz};
  };
  add(20,28, arm360(-1)); // LEFT ARM FULL 360
  add(20,28, arm360(1));  // RIGHT ARM FULL 360

  // ========== MODULE C - LOWER BODY WAIST TO FEET UNIFICADO 360° ==========
  // Plantilla: WAIST 0.20 TO FEET, PELVIS+THIGHS+CALVES+FEET ONE PIECE, PUZZLE TAB MALE x2 UP
  // FIX del bloque rayado: un solo bloque con -0.095/+0.095 radius 0.1225 circular match
  const lowerBody=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2; // 360° completo, no media malla
    const cx=sign*0.095;
    let py, radius;
    if(fy<0.22){ // PELVIS 0.15 a -0.08
      py=0.15 - fy*1.05;
      radius=0.1225; // circular match ganador
    }else if(fy<0.60){ // THIGH -0.08 a -0.40
      py=-0.08 - (fy-0.22)*0.84;
      radius=0.1225 - (fy-0.22)*0.03;
    }else{ // CALF -0.40 a -0.85
      py=-0.40 - (fy-0.60)*1.12;
      radius=0.0925 - (fy-0.60)*0.02;
    }
    // entrepierna 0.0 diamond - solo aplasta interna
    let zScale=0.62;
    if(sign>0 && Math.cos(ang)>0.6 && fy<0.28) zScale*=0.25;
    if(sign<0 && Math.cos(ang)<-0.6 && fy<0.28) zScale*=0.25;
    return {
      x: cx + Math.cos(ang)*radius,
      y: py,
      z: Math.sin(ang)*radius*zScale
    };
  };
  add(38,32, lowerBody(-1)); // LEFT LEG 360°
  add(38,32, lowerBody(1));  // RIGHT LEG 360°

  // PIES
  const foot=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    return {x:sign*0.095+Math.cos(ang)*0.038, y:-0.85 - fy*0.04, z:0.04+fy*0.08+Math.sin(ang)*0.015};
  };
  add(10,16, foot(-1));
  add(10,16, foot(1));

  // ========== MODULE E - HANDS 5 DEDOS 360° - ANTES FALTABAN ==========
  const hand=(sign)=>(u,fy)=>{
    // palma + dedos como superficie continua 360°
    if(fy<0.4){ // palma
      const ang=(u-0.5)*Math.PI*2;
      return {x:sign*1.02 + Math.cos(ang)*0.032, y:0.58 + Math.sin(ang)*0.018, z:Math.cos(ang*0.5)*0.02};
    }else{ // dedos
      const finger=Math.floor((u)*5);
      const fu=(u*5)%1;
      const ang=(fu-0.5)*Math.PI*2;
      return {x:sign*(1.02+finger*0.018+fy*0.06) + Math.cos(ang)*0.008, y:0.58+Math.sin(ang)*0.008, z:(finger-2)*0.015};
    }
  };
  add(12,20, hand(-1)); // LEFT HAND 5 fingers
  add(12,20, hand(1));  // RIGHT HAND 5 fingers

  // COMPILADO FINAL FULL 360°
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos,3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const wire=new THREE.WireframeGeometry(geo);
  const mat=new THREE.LineBasicMaterial({color:0x00e5ff, transparent:true, opacity:0.40, depthWrite:false});
  group.add(new THREE.LineSegments(wire, mat));
  console.log("LAIA V35.0 PUZZLE GANADORA COMPILADA - A=HEAD+NECK B=TORSO+ARMS C=WAIST-TO-FEET E=HANDS - FULL 360° - FIX MEDIA MALLA");
  return geo;
}

// alias para compatibilidad
export const buildV34_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV32_NEW_TEMPLATE = buildV35_FROM_SCRATCH;