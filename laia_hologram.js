// laia_hologram.js - V35.8 SOLDADA CUELLO-HOMBRO-BRAZO + AXILA - CINTURA 0.28 INTACTA + BEZIER GLUTI
// FIX V35.7: cuello 14x24 separado -> 62x48 unificado + hombro 0.285 protuberancia + brazo soldado + linea axila
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
    return s;
  };

  const smoothstep=(t)=> t*t*(3-2*t);
  const bezier2=(p0,p1,p2,t)=>{ const it=1-t; return it*it*p0 + 2*it*t*p1 + t*t*p2; };

  // ===== MODULE A+B UNIFICADO - CUELLO + TORSO 62x48 - UNA SOLA MALLA - QUITA CAMPANA AZUL =====
  add(62,48,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const cosA=Math.cos(ang);
    const sinA=Math.sin(ang);
    let py, wc;

    if(fy<0.15){
      // CUELLO SOLDADO - Y 0.99 -> 0.73 - 48 cols
      const t=smoothstep(fy/0.15);
      py=bezier2(0.99, 0.86, 0.73, t);
      const rNeck=0.22; // 0.065 equiv
      wc=bezier2(rNeck, 0.45, 0.82, t);
    } else {
      // TORSO - Y 0.73 -> 0.13 - CINTURA 0.28 INTACTA NO TOCAR
      const fy2=(fy-0.15)/0.85;
      py=0.73 - fy2*0.60;
      if(fy2<0.06) wc=0.82;
      else if(fy2<0.28) wc=0.82 - (fy2-0.06)*1.45;
      else if(fy2<0.58) wc=0.50 - Math.pow((fy2-0.28)/0.30,1.3)*0.22;
      else wc=0.28 + (fy2-0.58)*0.72;
    }

    let rW=0.24*(wc/0.82);
    let rD=rW*0.60;

    // HOMBRO SOLDADO - protuberancia 0.065 donde nace brazo
    if(fy>=0.12 && fy<=0.32){
      const tShoulder=smoothstep((fy-0.12)/0.20);
      const shoulderPeak=Math.pow(Math.abs(cosA), 4);
      const bulge=shoulderPeak * 0.065 * Math.sin(tShoulder*Math.PI);
      rW+=bulge;
      if(shoulderPeak>0.5) rD+=bulge*0.3;
    }

    // LINEA AXILA - dip 0.035 crea linea rosa que pedias
    if(fy>=0.22 && fy<=0.38){
      const tAxila=smoothstep((fy-0.22)/0.16);
      const axilaZone = (sinA < -0.2) ? Math.pow(Math.abs(cosA),2) : 0;
      const dip=axilaZone * 0.035 * Math.sin(tAxila*Math.PI);
      rW-=dip;
      py-=dip*0.15;
    }

    return {x: cosA*rW, y: py, z: sinA*rD};
  });

  // HEAD 28x24 - encima cuello ya soldado 0.99
  add(28,24,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    let r; if(fy<0.33) r=0.128; else if(fy<0.66) r=0.118; else r=0.108;
    const y=0.99 + fy*0.18;
    return {x:Math.cos(ang)*r, y:y, z:Math.sin(ang)*r*0.90};
  });

  const breast=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const r=0.035+Math.cos(fy*Math.PI*0.5)*0.018;
    return {x: sign*0.085 + Math.cos(ang)*r*0.7, y: 0.56-fy*0.10, z: 0.14 + Math.sin(ang)*r*0.5};
  };
  add(14,18, breast(-1));
  add(14,18, breast(1));

  // ===== BRAZOS SOLDADOS - ROOT 0.285 SUPERFICIE HOMBRO - NO 0.26 FLOTANDO =====
  const armSoldado=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const shoulderSurface=0.285; // soldado a protuberancia torso
    const len=shoulderSurface + fy*0.76;
    const rad=fy<0.08 ? bezier2(0.042,0.040,0.038,fy/0.08) : (fy<0.50?0.038:0.028);
    return {x:sign*len, y:0.58+Math.sin(ang)*rad, z:Math.cos(ang)*rad};
  };
  add(24,28, armSoldado(-1));
  add(24,28, armSoldado(1));

  // ===== V35.7 -> V35.8 COSTURA GLUTI 48 COLS + BEZIER 0.112 INTACTA =====
  const costuraAcosturada=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const cx=sign*0.088;
    let py, radius, zScale;
    const rCinturaBase=0.24*(0.28/0.82);
    if(fy<0.32){
      const t=smoothstep(fy/0.32);
      py=bezier2(0.13, 0.125, 0.11, t);
      radius= rCinturaBase*(1-t) + 0.095*t + Math.sin(t*Math.PI)*0.006;
      zScale=0.60*(1-t) + 0.72*t;
    } else if(fy<0.68){
      const t=smoothstep((fy-0.32)/0.36);
      py=bezier2(0.11, -0.02, -0.02, t) - Math.sin(t*Math.PI)*0.025;
      radius=bezier2(0.095, 0.112, 0.095, t) + Math.sin(t*Math.PI)*0.012;
      zScale=0.72 + bezier2(0, 0.18, 0.08, t);
    } else {
      const t=smoothstep((fy-0.68)/0.32);
      py=bezier2(-0.02, -0.04, -0.07, t);
      radius=bezier2(0.095, 0.084, 0.073, t);
      zScale=0.80 - t*0.08;
    }
    return {x: cx + Math.cos(ang)*radius, y: py, z: Math.sin(ang)*radius*zScale};
  };
  add(24,48, costuraAcosturada(-1));
  add(24,48, costuraAcosturada(1));

  const lowerBlock=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const cx=sign*0.088;
    let py, radius;
    if(fy<0.35){ const t=fy/0.35; py=-0.07 - t*0.12; radius=0.073 - t*0.010; }
    else if(fy<0.70){ const t=(fy-0.35)/0.35; py=-0.19 - t*0.28; radius=0.063 - t*0.008; }
    else { const t=(fy-0.70)/0.30; py=-0.47 - t*0.37; radius=0.055 - t*0.020; }
    const zScale=0.72;
    return {x: cx + Math.cos(ang)*radius, y: py, z: Math.sin(ang)*radius*zScale};
  };
  add(36,32, lowerBlock(-1));
  add(36,32, lowerBlock(1));

  const foot=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    return {x:sign*0.088+Math.cos(ang)*0.028, y:-0.84 - fy*0.05, z:0.04+fy*0.08+Math.sin(ang)*0.010};
  };
  add(10,16, foot(-1));
  add(10,16, foot(1));

  const hand=(sign)=>(u,fy)=>{
    if(fy<0.38){
      const ang=(u-0.5)*Math.PI*2;
      return {x:sign*1.045 + Math.cos(ang)*0.032, y:0.58 + Math.sin(ang)*0.018, z:Math.sin(ang)*0.012};
    }else{
      const finger=Math.floor(u*5); const fu=(u*5)%1; const ang=(fu-0.5)*Math.PI*2;
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
  console.log("LAIA V35.8 SOLDADA CUELLO-HOMBRO-BRAZO + AXILA - CINTURA 0.28 INTACTA + 48 COLS + BEZIER 0.112");
  return geo;
}

export const buildV35_8_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV35_7_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV35_6_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV35_5_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV35_4_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV35_3_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV35_1_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV35_2_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV34_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV32_NEW_TEMPLATE = buildV35_FROM_SCRATCH;