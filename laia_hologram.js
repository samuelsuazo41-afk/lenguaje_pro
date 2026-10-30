// laia_hologram.js - V35.5 BLOCK THEORY - TECNICA VIDEO HEAD 1/3 + CINTURA 0.28 INTACTA
// BASE: tu V35.4 + BLOCK: empotrado 0.088/0.095 + divisiones 1/3 y 1/2 planares
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

  // MODULE A - HEAD BLOCK 1/3 TECHNIQUE COMO VIDEO - 36x24 planar
  // Antes 28x36 orgánico -> ahora 36x24 block 1/3 divisiones
  add(36,24,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    let r;
    if(fy<0.33) r=0.128; // 1/3 superior pelo
    else if(fy<0.66) r=0.118; // 1/3 medio frente
    else r=0.108; // 1/3 inferior mandíbula
    const y=0.88 + fy*0.26;
    return {x:Math.cos(ang)*r, y:y, z:Math.sin(ang)*r*0.90};
  });
  add(14,24,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    return {x:Math.cos(ang)*0.065, y:0.73+fy*0.14, z:Math.sin(ang)*0.065};
  });

  // MODULE B - TORSO BLOCK 1/3 + 1/2 - V35.4 INTACTO 0.28 NO TOCAR - pero con loops block
  add(52,48,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    let py=0.73 - fy*0.60;
    let wc;
    if(fy<0.20) wc=0.82; // 1/3 pecho
    else if(fy<0.42) wc=0.82 - (fy-0.20)*1.45;
    else if(fy<0.68) wc=0.50 - Math.pow((fy-0.42)/0.26,1.3)*0.22; // ->0.28
    else wc=0.28 + (fy-0.68)*0.72; // CINTURA INTACTA 0.28 - 1/2 final
    const rW=0.24*(wc/0.82);
    const rD=rW*0.60;
    return {x: Math.cos(ang)*rW, y: py, z: Math.sin(ang)*rD};
  });
  
  const breast=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const r=0.035+Math.cos(fy*Math.PI*0.5)*0.018;
    return {x: sign*0.085 + Math.cos(ang)*r*0.7, y: 0.56-fy*0.10, z: 0.14 + Math.sin(ang)*r*0.5};
  };
  add(14,18, breast(-1));
  add(14,18, breast(1));

  // BRAZOS BLOCK 1/2 - T-POSE
  const armBlock=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const rad=fy<0.50?0.038:0.028; // 1/2 division hombro/antebrazo
    const len=0.26+fy*0.76;
    return {x:sign*len, y:0.58+Math.sin(ang)*rad, z:Math.cos(ang)*rad};
  };
  add(22,28, armBlock(-1));
  add(22,28, armBlock(1));

  // MODULE C - LOWER BODY BLOCK 1/2 - V35.5 FIX EMPOTRADO - CINTURA INTACTA
  const lowerBlock=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const cx=sign*0.088; // V35.4 0.095 -> 0.088 más juntas empotradas técnica block sella gap
    let py, radius;

    if(fy<0.08){
      // EMPOTRADO DENTRO CINTURA - sella gap lateral que se ve en tus fotos
      py=0.16 - fy*0.50; // ANTES 0.13 -> 0.16 entra 3cm dentro torso
      radius=0.095; // V35.4 0.092 -> 0.095 más gruesa calza grosor cintura 0.28
    } else if(fy<0.26){
      const t=(fy-0.08)/0.18;
      py=0.12 - t*0.12;
      radius=0.095 - t*0.022; // 0.095 -> 0.073 ángulo natural pelvis BLOCK 1/2
    } else if(fy<0.58){
      const t=(fy-0.26)/0.32;
      py=0.0 - t*0.37;
      radius=0.073 - t*0.018; // 0.073 -> 0.055 rodilla BLOCK 1/2
    } else {
      const t=(fy-0.58)/0.42;
      py=-0.37 - t*0.47;
      radius=0.055 - t*0.020; // 0.055 -> 0.035 pantorrilla BLOCK 1/2
    }

    const zScale=0.72; // V35.4 0.68 -> 0.72 más grueso posterior calza cintura 0.28
    return {x: cx + Math.cos(ang)*radius, y: py, z: Math.sin(ang)*radius*zScale};
  };
  add(40,32, lowerBlock(-1));
  add(40,32, lowerBlock(1));

  // PIES - siguen nueva posición 0.088 block
  const foot=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    return {x:sign*0.088+Math.cos(ang)*0.028, y:-0.84 - fy*0.05, z:0.04+fy*0.08+Math.sin(ang)*0.010};
  };
  add(10,16, foot(-1));
  add(10,16, foot(1));

  // MODULE E - HANDS BLOCK
  const hand=(sign)=>(u,fy)=>{
    if(fy<0.38){
      const ang=(u-0.5)*Math.PI*2;
      return {x:sign*1.04 + Math.cos(ang)*0.032, y:0.58 + Math.sin(ang)*0.018, z:Math.sin(ang)*0.012};
    }else{
      const finger=Math.floor(u*5);
      const fu=(u*5)%1;
      const ang=(fu-0.5)*Math.PI*2;
      return {x:sign*(1.08+fy*0.06) + Math.cos(ang)*0.008, y:0.585+Math.sin(ang)*0.008, z:(finger-2)*0.016};
    }
  };
  add(12,20, hand(-1));
  add(12,20, hand(1));

  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos,3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const wire=new THREE.WireframeGeometry(geo);
  const mat=new THREE.LineBasicMaterial({color:0x00e5ff, transparent:true, opacity:0.40, depthWrite:false});
  group.add(new THREE.LineSegments(wire, mat));
  console.log("LAIA V35.5 BLOCK THEORY - HEAD 1/3 + BODY 1/2 - CINTURA 0.28 INTACTA + PIERNAS 0.088/0.095 EMPOTRADAS");
  return geo;
}

export const buildV35_5_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV35_4_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV35_3_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV35_1_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV35_2_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV34_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV32_NEW_TEMPLATE = buildV35_FROM_SCRATCH;