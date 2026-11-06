// laia_hologram.js - V37 MOLDE PLANO - 0.28 INTACTA + 0.108
// FIX V36: bolsa hombro wc 0.95 + bulge 0.06 + deltoide 0.075 + cuello 0.92 flotando + axila colgando + cadera 0.088 separada -> V37: hombro PLANO wc 0.68 + bulge 0.015 + deltoide 0.055 + cuello BAJO 0.84->0.74 pegado + cabeza hundida 0.84 + axila CIERRA 0.05 + cadera 0.082 junta
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

  // ===== MOLDE PLANO: CUELLO BAJO + HOMBRO PLANO + TORSO 72x64 - UNA SOLA MALLA =====
  add(72,64,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const cosA=Math.cos(ang); const sinA=Math.sin(ang);
    let py,wc;
    if(fy<0.12){
      // CUELLO BAJO Y PEGADO: 0.84->0.74, no 0.92 flotando. wc 0.20->0.34
      const t=smoothstep(fy/0.12);
      py=bezier2(0.84, 0.79, 0.74, t);
      wc=bezier2(0.20, 0.26, 0.34, t);
    } else if(fy<0.32){
      // HOMBRO PLANO - LINEA NARANJA: 0.74->0.64, wc 0.34->0.68 NO 0.95 bolsa
      const t=smoothstep((fy-0.12)/0.20);
      py=bezier2(0.74, 0.69, 0.64, t);
      wc=bezier2(0.34, 0.52, 0.68, t);
    } else if(fy<0.45){
      // PECHO + AXILA QUE CIERRA: 0.64->0.52, wc 0.68->0.52
      const t=smoothstep((fy-0.32)/0.13);
      py=bezier2(0.64, 0.58, 0.52, t);
      wc=bezier2(0.68, 0.60, 0.52, t);
    } else {
      // TORSO -> CINTURA 0.28 INTACTA NO TOCAR
      const fy2=(fy-0.45)/0.55;
      py=0.52 - fy2*0.39;
      if(fy2<0.20) wc=0.52 - fy2*0.55;
      else if(fy2<0.55) wc=0.41 - Math.pow((fy2-0.20)/0.35,1.3)*0.13;
      else wc=0.28 + (fy2-0.55)*0.60;
    }
    let rW=0.24*(wc/0.82); let rD=rW*0.58;
    // SIN BOLSA: bulge 0.015, no 0.06. Hombro plano, no cupula
    if(fy>=0.12 && fy<=0.45){
      const tT=(fy<0.32)? smoothstep((fy-0.12)/0.20) : smoothstep((fy-0.32)/0.13);
      const lat=Math.pow(Math.abs(cosA),2.0);
      const trap=lat*0.015*Math.sin(tT*Math.PI);
      rW+=trap; rD+=trap*0.20;
    }
    // AXILA CIERRA - FLECHAS ROJAS: dip mas fuerte 0.05 y sube, no cuelga
    if(fy>=0.30 && fy<=0.50){
      const tA=smoothstep((fy-0.30)/0.20);
      const axilaZone=(sinA<0.2)? Math.pow(Math.abs(cosA),2.0)*(1-Math.abs(sinA)*0.4):0;
      const dip=axilaZone*0.050*Math.sin(tA*Math.PI);
      rW-=dip; py-=dip*0.60;
    }
    return {x:cosA*rW, y:py, z:sinA*rD};
  });

  // HEAD HUNDIDA: nace en 0.84, base 0.13 traga el cuello 0.84 - no puesta encima
  add(28,24,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    let r; if(fy<0.33) r=0.128; else if(fy<0.66) r=0.118; else r=0.108;
    if(fy<0.15) r=0.130 - fy*0.15;
    return {x:Math.cos(ang)*r, y:0.84 + fy*0.18, z:Math.sin(ang)*r*0.90};
  });
  const breast=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const r=0.035+Math.cos(fy*Math.PI*0.5)*0.018;
    return {x: sign*0.085 + Math.cos(ang)*r*0.7, y: 0.52-fy*0.10, z: 0.14 + Math.sin(ang)*r*0.5};
  };
  add(14,18, breast(-1)); add(14,18, breast(1));

  // BRAZO PLANO - LINEA NARANJA LATERAL: recto a 0.60, deltoide 0.055 NO 0.075 bolsa
  const armPlano=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const len=bezier2(0.14, 0.34, 1.045, fy);
    let rad;
    if(fy<0.18) rad=bezier2(0.055, 0.045, 0.038, fy/0.18);
    else if(fy<0.50) rad=0.038;
    else rad=bezier2(0.038, 0.032, 0.028, (fy-0.50)/0.50);
    return {x:sign*len, y:0.60 + Math.sin(ang)*rad, z:Math.cos(ang)*rad};
  };
  add(28,28, armPlano(-1)); add(28,28, armPlano(1));

  // CADERA JUNTA - ABAJO ROJO: 0.082 NO 0.088, cierra forat entre piernas. Gluti 0.108
  const costuraAcosturada=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2; const cx=sign*0.082;
    let py,radius,zScale; const rCinturaBase=0.24*(0.28/0.82);
    if(fy<0.32){ const t=smoothstep(fy/0.32); py=bezier2(0.13,0.125,0.11,t); radius=rCinturaBase*(1-t)+0.095*t+Math.sin(t*Math.PI)*0.006; zScale=0.60*(1-t)+0.72*t; }
    else if(fy<0.68){ const t=smoothstep((fy-0.32)/0.36); py=bezier2(0.11,-0.02,-0.02,t)-Math.sin(t*Math.PI)*0.025; radius=bezier2(0.095,0.108,0.095,t)+Math.sin(t*Math.PI)*0.012; zScale=0.72+bezier2(0,0.18,0.08,t); }
    else { const t=smoothstep((fy-0.68)/0.32); py=bezier2(-0.02,-0.04,-0.07,t); radius=bezier2(0.095,0.084,0.073,t); zScale=0.80-t*0.08; }
    return {x:cx+Math.cos(ang)*radius, y:py, z:Math.sin(ang)*radius*zScale};
  };
  add(24,48, costuraAcosturada(-1)); add(24,48, costuraAcosturada(1));
  const lowerBlock=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2; const cx=sign*0.082; let py,radius;
    if(fy<0.35){ const t=fy/0.35; py=-0.07-t*0.12; radius=0.073-t*0.010; }
    else if(fy<0.70){ const t=(fy-0.35)/0.35; py=-0.19-t*0.28; radius=0.063-t*0.008; }
    else { const t=(fy-0.70)/0.30; py=-0.47-t*0.37; radius=0.055-t*0.020; }
    return {x:cx+Math.cos(ang)*radius, y:py, z:Math.sin(ang)*radius*0.72};
  };
  add(36,32, lowerBlock(-1)); add(36,32, lowerBlock(1));
  const foot=(sign)=>(u,fy)=>{ const ang=(u-0.5)*Math.PI*2; return {x:sign*0.082+Math.cos(ang)*0.028, y:-0.84-fy*0.05, z:0.04+fy*0.08+Math.sin(ang)*0.010}; };
  add(10,16, foot(-1)); add(10,16, foot(1));
  const hand=(sign)=>(u,fy)=>{
    if(fy<0.38){ const ang=(u-0.5)*Math.PI*2; return {x:sign*1.045+Math.cos(ang)*0.032, y:0.60+Math.sin(ang)*0.018, z:Math.sin(ang)*0.012}; }
    else{ const finger=Math.floor(u*5); const fu=(u*5)%1; const ang=(fu-0.5)*Math.PI*2; return {x:sign*(1.08+fy*0.06)+Math.cos(ang)*0.008, y:0.585+Math.sin(ang)*0.008, z:(finger-2)*0.016}; }
  };
  add(12,20, hand(-1)); add(12,20, hand(1));
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos,3));
  geo.setIndex(idx); geo.computeVertexNormals();
  const wire=new THREE.WireframeGeometry(geo);
  const mat=new THREE.LineBasicMaterial({color:0x00e5ff, transparent:true, opacity:0.40, depthWrite:false});
  group.add(new THREE.LineSegments(wire, mat));
  console.log("LAIA V37 MOLDE PLANO cuello 0.84 pegado + hombro plano 0.68 + axila cierra 0.05 + cadera 0.082 - 0.28 + 0.108");
  return geo;
}
export const buildV37_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV36_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV35_9_FROM_SCRATCH = buildV35_FROM_SCRATCH;
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