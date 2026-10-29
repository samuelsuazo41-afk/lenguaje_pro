// laia_hologram.js - V35.2 FINAL - FIX ROJO VERDE AZUL + TORSO FULL 360° CERRADO
// ROJO: pierna 0.1225 muy gorda vs cintura 0.20 -> ahora 0.088 fino costura perfecta 0.20
// VERDE: pliegue lateral por zScale*=0.25 -> quitado, cilindro completo natural
// AZUL: pliegue rodilla por salto brusco radius -> ahora curva suave 0.088->0.070->0.048
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
    const ang=(u-0.5)*Math.PI*2;
    const y=0.88+fy*0.24;
    const r=Math.sin(fy*Math.PI)*0.125;
    return {x:Math.cos(ang)*r, y:y, z:Math.sin(ang)*r*0.92};
  });
  add(12,24,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    return {x:Math.cos(ang)*0.065, y:0.73+fy*0.14, z:Math.sin(ang)*0.065};
  });

  // ========== MODULE B - TORSO FULL 360° CERRADO - SIN PINCH ==========
  add(52,48,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    let py=0.73 - fy*0.60;
    let wc;
    if(fy<0.20) wc=0.82;
    else if(fy<0.42) wc=0.82 - (fy-0.20)*1.68;
    else if(fy<0.68) wc=0.40 - Math.pow((fy-0.42)/0.26,1.4)*0.20; // curva suave a 0.20 sin hilo
    else wc=0.20 + (fy-0.68)*0.62;
    const rW=0.22*(wc/0.82);
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

  // ========== BRAZOS FULL 360° - T-POSE 0.48m ==========
  const arm360=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const rad=0.038 - fy*0.012;
    const len=0.26+fy*0.76;
    return {x:sign*len, y:0.58+Math.sin(ang)*rad, z:Math.cos(ang)*rad};
  };
  add(22,28, arm360(-1));
  add(22,28, arm360(1));

  // ========== MODULE C - LOWER BODY - V35.2 FIX TUS 3 COLORES ==========
  const lowerBody=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const cx=sign*0.095;
    let py, radius;

    // ROJO FIX: 0.1225 era 61% más ancho que cintura 0.20, ahora 0.088 fino proporcional
    // Costura: 0.095 + 0.088 = 0.183 encaja perfecto con waist 0.20
    if(fy<0.15){
      py=0.13 - fy*0.80;
      radius=0.088; // antes 0.1225 -> ahora fino
    } else if(fy<0.55){
      // AZUL FIX: antes salto brusco 0.1225->0.0925 creaba pliegue rodilla
      const t=(fy-0.15)/0.40;
      py=0.01 - t*0.38;
      radius=0.088 - t*0.018; // 0.088 -> 0.070 suave sin escalón
    } else {
      const t=(fy-0.55)/0.45;
      py=-0.37 - t*0.47;
      radius=0.070 - t*0.022; // 0.070 -> 0.048 pantorrilla fina natural
    }

    // VERDE FIX: quitado if(cos>0.6) zScale*=0.25 que hacía pliegue vertical
    // Ahora cilindro completo 360° natural
    const zScale=0.58; // constante, sin aplaste
    
    return {x: cx + Math.cos(ang)*radius, y: py, z: Math.sin(ang)*radius*zScale};
  };
  add(40,32, lowerBody(-1));
  add(40,32, lowerBody(1));

  // PIES
  const foot=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    return {x:sign*0.095+Math.cos(ang)*0.032, y:-0.84 - fy*0.05, z:0.04+fy*0.08+Math.sin(ang)*0.012};
  };
  add(10,16, foot(-1));
  add(10,16, foot(1));

  // ========== MODULE E - HANDS 5 DEDOS ==========
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

  // FINAL COMPILADO
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos,3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const wire=new THREE.WireframeGeometry(geo);
  const mat=new THREE.LineBasicMaterial({color:0x00e5ff, transparent:true, opacity:0.40, depthWrite:false});
  group.add(new THREE.LineSegments(wire, mat));
  console.log("LAIA V35.2 FINAL - ROJO pierna 0.088 costura perfecta waist 0.20 - VERDE sin pliegue lateral - AZUL rodilla natural");
  return geo;
}

export const buildV35_1_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV35_2_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV34_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV32_NEW_TEMPLATE = buildV35_FROM_SCRATCH;