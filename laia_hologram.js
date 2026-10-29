// laia_hologram.js - V35.2 FIX TUS 3 COLORES - ROJO VERDE AZUL
// ROJO: pierna muy gorda vs cintura 0.20 - ahora radius 0.085 - costura perfecta
// VERDE: pliegue lateral vertical - quitado, zScale constante
// AZUL: pliegue rodilla - quitado, radius curva suave sin escalón
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

  // HEAD+NECK 28x36 FULL 360° Ø 0.065
  add(28,36,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const y=0.86+fy*0.24;
    const r=Math.sin(fy*Math.PI)*0.122;
    return {x:Math.cos(ang)*r, y:y, z:Math.sin(ang)*r*0.92};
  });
  add(12,24,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    return {x:Math.cos(ang)*0.065, y:0.73+fy*0.14, z:Math.sin(ang)*0.065};
  });

  // TORSO FULL 360° CERRADO - WAIST 0.20 REAL
  add(52,48,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    let py=0.73 - fy*0.60;
    let wc;
    if(fy<0.20) wc=0.82;
    else if(fy<0.45) wc=0.82 - (fy-0.20)*1.68;
    else if(fy<0.68) wc=0.40 - Math.pow((fy-0.45)/0.23,1.4)*0.20;
    else wc=0.20 + (fy-0.68)*0.62;
    const rW=0.24*(wc/0.82);
    const rD=rW*0.60;
    return {x:Math.cos(ang)*rW, y:py, z:Math.sin(ang)*rD};
  });
  // pecho
  add(14,18,(u,fy)=>{ const ang=(u-0.5)*Math.PI*2; const r=0.034+Math.cos(fy*Math.PI*0.5)*0.016; return {x:-0.085+Math.cos(ang)*r*0.6, y:0.55-fy*0.10, z:0.14+Math.sin(ang)*r*0.4}; });
  add(14,18,(u,fy)=>{ const ang=(u-0.5)*Math.PI*2; const r=0.034+Math.cos(fy*Math.PI*0.5)*0.016; return {x:0.085+Math.cos(ang)*r*0.6, y:0.55-fy*0.10, z:0.14+Math.sin(ang)*r*0.4}; });

  // BRAZOS T-POSE 0.48m FULL 360°
  const armT=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const rad=0.038 - fy*0.012;
    return {x:sign*(0.26+fy*0.76), y:0.58+Math.sin(ang)*rad, z:Math.cos(ang)*rad};
  };
  add(20,28, armT(-1));
  add(20,28, armT(1));

  // ====== FIX TUS 3 COLORES - PIERNAS V35.2 ======
  const lowerBody=(sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    // ROJO FIX: -0.095/+0.095 sigue, pero radius de 0.1225 -> 0.085 fino proporcional a waist 0.20
    // Costura perfecta: empieza en 0.085 igual que cintura, no bloque gigante
    const cx=sign*0.095;
    let py, radius;

    // Curva natural sin escalones - FIX AZUL Y VERDE
    // Antes tenías if con salto brusco 0.1225 -> 0.11 que creaba pliegue azul rodilla
    // y zScale*=0.22 que creaba pliegue verde lateral
    if(fy<0.15){
      // Cadera a muslo - conexión perfecta cintura
      py=0.13 - fy*0.80;
      radius=0.088; // ROJO FIX: 0.1225 -> 0.088 fino y proporcional
    } else if(fy<0.55){
      // Muslo a rodilla - forma natural cónica suave
      const t=(fy-0.15)/0.40;
      py=0.01 - t*0.38; // 0.01 a -0.37
      radius=0.088 - t*0.018; // 0.088 -> 0.070 natural - FIX AZUL sin escalón
    } else {
      // Rodilla a pantorrilla a tobillo - natural sin pliegue
      const t=(fy-0.55)/0.45;
      py=-0.37 - t*0.47; // -0.37 a -0.84
      radius=0.070 - t*0.022; // 0.070 -> 0.048 pantorrilla fina - FIX AZUL
    }

    // FIX VERDE: quitado el zScale*=0.22 que hacía pliegue vertical
    // Ahora cilindro completo natural
    const zScale=0.58; // constante, sin aplaste lateral

    return {
      x: cx + Math.cos(ang)*radius,
      y: py,
      z: Math.sin(ang)*radius*zScale
    };
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

  // HANDS 5 FINGERS
  const hand=(sign)=>(u,fy)=>{
    if(fy<0.35){
      const ang=(u-0.5)*Math.PI*2;
      return {x:sign*1.04 + Math.cos(ang)*0.032, y:0.58 + Math.sin(ang)*0.018, z:Math.sin(ang)*0.012};
    }else{
      const finger=Math.floor(u*5);
      const fu=(u*5)%1;
      const ang=(fu-0.5)*Math.PI*2;
      return {x:sign*(1.04+0.04+fy*0.06+finger*0.002) + Math.cos(ang)*0.008, y:0.585+Math.sin(ang)*0.008, z:(finger-2)*0.016};
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
  console.log("LAIA V35.2 - ROJO pierna fina 0.088 no 0.1225 - VERDE sin pliegue lateral - AZUL rodilla natural sin escalón");
  return geo;
}

export const buildV34_FROM_SCRATCH = buildV35_FROM_SCRATCH;
export const buildV32_NEW_TEMPLATE = buildV35_FROM_SCRATCH;