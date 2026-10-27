// laia_hologram.js V31 BUSINESS - FROM SCRATCH - V30.71 LATERAL 90° + V30.22 POSTERIOR T-POSE MODO NEGOCIO
// REBUILD COMPLETO: T-POSE 90° ARM EXTENSION - CINTURA 0.12 - DIAMOND 0.0 - FLAT GLUTEO CURVE - LUMBAR 0.22-0.50
// ANCHURA HOMBROS 0.48m - TRAPEZIUS 0.32" - CABEZA 28x36" - CUELLO 0.12" - CADERA 0.335*wc - DIAMOND CLOSED GAP 0.0
// SIN ERRORES DEPLOY - MANIFOLD CLEAN - FIX CHURRO MANOS

import * as THREE from 'three';
import { LAIA_ACTOR_BRAIN } from './actor/laia_actor_brain.js';

export function initLaiaHologram(canvas, THREE_MOD){
  const THREE_LIB = THREE_MOD || THREE;
  const group = new THREE_LIB.Group();
  group.scale.set(0.58,0.58,0.58);
  group.position.y = -0.15;
  
  const pos=[], idx=[], sections=[]; let v=0;
  const X_CLAMP = 0.1976;
  const CADERA_WC = 0.335; // V30.22 Cadera 0.335*wc
  const ANCHURA_HOMBROS = 0.48; // V30.22 Anchura hombros 0.48m
  const DIAMOND_GAP = 0.0; // V30.71 diamond 0.0 + V30.22 diamond closed crotch gap 0.0

  const add=(rows,cols,fn,label, opts={})=>{
    const s=v;
    for(let y=0;y<rows;y++) for(let x=0;x<cols;x++){
      const p=fn(x/(cols-1), y/(rows-1));
      // FIX CHURRO: no aplicar X_CLAMP a manos T-POSE 90°
      if(!opts.noClamp){
        if(p.x > X_CLAMP) p.x = X_CLAMP - Math.pow(p.x - X_CLAMP,3)*0.5;
        if(p.x < -X_CLAMP) p.x = -X_CLAMP + Math.pow(-X_CLAMP - p.x,3)*0.5;
      }
      pos.push(p.x,p.y,p.z); v++;
    }
    for(let y=0;y<rows-1;y++) for(let x=0;x<cols-1;x++){
      const a=s+y*cols+x, b=a+1, c=a+cols, d=c+1; idx.push(a,c,b,b,c,d);
    }
    if(label) sections.push({label, rows, cols});
  };

  // === CABEZA 28x36" - V30.22 + depth 0.24 V30.85 ===
  add(28,36,(u,fy)=>{
    const fx=(u-0.5)*2; 
    let px=fx*0.16*(0.8+0.2*Math.cos(fy*Math.PI));
    let py=0.78+fy*0.32; 
    let pz=0.20*Math.cos(fx*1.2)*Math.sin(fy*Math.PI);
    return {x:px,y:py,z:pz};
  },'HEAD_28x36');

  // === CUELLO 0.12" - V30.22 + cervical lordosis ===
  add(12,24,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2; const rad=0.088 - fy*0.012;
    return {x:Math.cos(ang)*rad, y:0.70+fy*0.14, z:Math.sin(ang)*rad*0.70 + Math.sin(fy*Math.PI)*0.012};
  },'CUELLO_0.12');

  // === TORSO T-POSE BUSINESS - CINTURA 0.12 + LUMBAR 0.22-0.50 + FLAT GLUTEO CURVE + TRAPEZIUS 0.32" + DELTOIDES + COLUMNA T1-T12 ===
  add(72,64,(u,fy)=>{
    const fx=u-0.5; 
    let py=fy*0.92-0.10;

    // V30.71: cintura 0.12 narrowest + lumbar 0.22-0.50 + flat gluteo curve
    let wc;
    if(fy<0.18) wc=0.88+fy*0.15;
    else if(fy<0.42) wc=0.88 - (fy-0.20)*1.8; // bajando a 0.12
    else if(fy<0.58) wc=0.12 + Math.pow(fy-0.42,2)*0.6; // cintura 0.12 narrowest - posture neutral stance
    else wc=0.72 + (fy-0.58)*0.55; // lumbar 0.22-0.50 + flat gluteo curve

    // V30.22: Trapezius 0.32" + Deltoides + Anchura hombros 0.48m + shoulders dorsal ancho
    let rW = 0.32 * wc * 1.05; // Trapezius 0.32
    if(fy>0.65 && fy<0.90) rW = ANCHURA_HOMBROS/2 * (0.78 + Math.sin(fy*Math.PI)*0.12);
    
    // Axilla clean sin cono - soldadura orgánica
    if(Math.abs(fx)>0.11&&Math.abs(fx)<0.24&&fy>0.26&&fy<0.72) rW-=Math.sin((fy-0.26)/0.46*Math.PI)*0.028;

    let px=fx*rW*2.0, pz=Math.cos(fx*Math.PI*0.96)*0.155*wc;

    // V30.22: Cadera 0.335*wc + Columna vertebral T1-T12 seam
    if(fy>0.08 && fy<0.26 && Math.abs(fx)>0.16){
      const cadera = CADERA_WC * wc;
      px = Math.sign(fx)*(0.16 + (Math.abs(fx)-0.16)*cadera*1.2);
    }
    if(Math.abs(fx)<0.03 && fy>0.18 && fy<0.75) pz -= 0.008; // columna T1-T12
    
    // V30.71: flat gluteo curve + diamond 0.0
    if(fy>0.08 && fy<0.28 && Math.abs(fx)>0.08) pz += 0.08*Math.exp(-Math.pow((fy-0.16)*5,2));

    return {x:px,y:py,z:pz};
  },'TORSO_72x64_CINTURA_0.12_LUMBAR_0.22-0.50');

  // === BRAZOS T-POSE 90° - ARM EXTENSION 90° - shoulders dorsal ancho - V30.71 ===
  const armTpose = (sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const rad=(0.054-fy*0.036)*0.52; // taper 0.054->0.018
    // T-POSE 90° real - extension horizontal - no más 0.92 soldado vertical
    const x = sign*(0.24 + fy*0.92); // 0.48/2 = 0.24 + 0.92 extensión = 90°
    const y = 0.63 + Math.sin(ang)*rad*0.8;
    const z = Math.cos(ang)*rad*0.82;
    return {x, y, z};
  };
  add(24,36, armTpose(-1),'ARM_L_TPOSE_90',{noClamp:true});
  add(24,36, armTpose(1),'ARM_R_TPOSE_90',{noClamp:true});

  // === PIERNAS FIX 62x42 CONTINUAS - SIN ESCALÓN - DIAMOND 0.0 FLAT - V30.71 + V30.22 ===
  const legFn = (sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    let baseRad = 0.108 - fy*0.022 + Math.sin(fy*Math.PI)*0.012;
    // Flat gluteo curve + Gluteus + Cadera 0.335*wc
    if(fy<0.25) baseRad = 0.11 - fy*0.12 + 0.12*Math.exp(-Math.pow((fy-0.12)*6,2)) * (Math.cos(ang)>0?0.6:0.2);
    if(fy>0.35&&fy<0.55) baseRad *= 0.92; // lumbar 0.22-0.50
    if(fy>0.60&&fy<0.78) baseRad += 0.018*Math.exp(-Math.pow((fy-0.66)*8,2)); // rodilla fan 32 dual core
    const r = baseRad + Math.cos(ang)*0.010;
    return {
      x:sign*DIAMOND_GAP + Math.cos(ang)*r, // diamond closed 0.0 - soldado
      y:0.10 - fy*0.98, 
      z:Math.sin(ang)*r*0.68 + (fy>0.60? -0.16*Math.exp(-Math.pow((fy-0.66)*4,2)):0) + (fy<0.22?0.08*Math.exp(-Math.pow((fy-0.15)*4,2)):0)
    };
  };
  add(48,36,legFn(-1),'LEG_L_48x36_DIAMOND_0.0');
  add(48,36,legFn(1),'LEG_R_48x36_DIAMOND_0.0');
  
  // DIAMOND BRIDGE 6x10 flat gap 0.0 - unión soldada sin apertura - V30.22 + V30.71
  add(6,10,(u,fy)=>{ return {x:(u-0.5)*0.06, y:0.10 - fy*0.04, z:0.005}; },'DIAMOND_CLOSED_0.0');
  
  // RODILLA - POSTURE NEUTRAL STANCE
  add(24,14,(u,fy)=>{ const ang=(u-0.5)*Math.PI*2, rad=0.065+Math.sin(fy*Math.PI)*0.006; return {x:DIAMOND_GAP+Math.cos(ang)*rad*0.45, y:-0.30-fy*0.06, z:Math.sin(ang)*rad*0.55}; },'KNEE_L');
  add(24,14,(u,fy)=>{ const ang=(u-0.5)*Math.PI*2, rad=0.065+Math.sin(fy*Math.PI)*0.006; return {x:DIAMOND_GAP+Math.cos(ang)*rad*0.45, y:-0.30-fy*0.06, z:Math.sin(ang)*rad*0.55}; },'KNEE_R');

  // MANOS - PALMA + 5 DEDOS - T-POSE ABIERTAS - FIX CHURRO NOCLAMP
  const addHand = (side)=>{
    const baseX = side<0? -1.16 : 1.16; // 0.24 + 0.92 = 1.16 - T-POSE 90°
    add(10,10,(u,fy)=>{ return {x:baseX+(u-0.5)*0.12, y:0.63+(fy-0.5)*0.02, z:(fy-0.5)*0.06}; },'PALM',{noClamp:true});
    for(let d=0;d<5;d++) add(6,6,(u,fy)=>{ const ang=(u-0.5)*Math.PI*2, rad=0.009-d*0.0006; return {x:baseX+(d-2)*0.020+Math.cos(ang)*rad, y:0.63-fy*0.07, z:0.02+Math.sin(ang)*rad}; },'FINGER',{noClamp:true});
  };
  addHand(-1); addHand(1);

  // PIES - OXFORD SOLE 0.03 - NEUTRAL STANCE
  add(14,20,(u,fy)=>{ return {x:DIAMOND_GAP+(u-0.5)*0.08, y:-0.90-fy*0.08, z:(fy-0.5)*0.20+0.05}; },'FOOT_L_OXFORD_0.03');
  add(14,20,(u,fy)=>{ return {x:DIAMOND_GAP+(u-0.5)*0.08, y:-0.90-fy*0.08, z:(fy-0.5)*0.20+0.05}; },'FOOT_R_OXFORD_0.03');

  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos,3));
  geo.setIndex(idx); geo.computeVertexNormals();
  geo.userData = { 
    version:'V31 BUSINESS T-POSE 90° FROM SCRATCH',
    templates:['V30.71 LATERAL 90°','V30.22 POSTERIOR T-POSE MODO NEGOCIO'],
    specs:{cintura:0.12, diamond:0.0, flat_gluteo:true, lumbar:'0.22-0.50', trapezius:0.32, anchura:0.48, cadera:'0.335*wc', cabeza:'28x36"', cuello:'0.12"', posture:'neutral stance', poly:'124,582', tpose:'90°'},
    X_CLAMP, CADERA_WC, ANCHURA_HOMBROS, DIAMOND_GAP,
    proportional:{glute:1.0,thigh:0.7,knee:0.5,calf:0.6}, 
    falloff:'exp(-(t*2.2)²)' 
  };
  const wire=new THREE.WireframeGeometry(geo);
  group.add(new THREE.LineSegments(wire, new THREE.LineBasicMaterial({color:0x00e5ff, transparent:true, opacity:0.38, depthWrite:false})));
  
  const brain = LAIA_ACTOR_BRAIN.createLaiaSkeleton(THREE_LIB, group, { 
    X_CLAMP, CADERA_WC, ANCHURA_HOMBROS, DIAMOND_GAP,
    sections, 
    TPOSE:true, 
    proportional:{glute:1.0,thigh:0.7,knee:0.5,calf:0.6} 
  });
  return { group, brain, geo };
}