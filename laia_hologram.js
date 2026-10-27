// laia_hologram.js - V32 NEW TEMPLATE FROM SCRATCH - BORRADO TOTAL V30/V31
// MAPEO ANATÓMICO BASADO EN BLUEPRINT: FRONT + LATERAL 90° + BACK
// SPECS NUEVAS: Anchura 0.48m, Cintura 0.12 narrowest, Cadera 0.335*wc, Cabeza 28x36 depth 0.24, Trapezius 0.32, Cuello 0.12, Lumbar 0.22-0.50, Flat Gluteo Curve Neutral Stance, Diamond Closed Gap 0.0, Clean Quad Topology

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

  // 1. CABEZA 28x36 depth 0.24 - Bob Cut Hair
  add(28,36,(u,fy)=>{
    const fx=(u-0.5)*2;
    let px=fx*0.11*(0.9+0.1*Math.cos(fy*Math.PI));
    let py=0.85+fy*0.24;
    let pz=0.24*Math.cos(fx*0.6)*Math.sin(fy*Math.PI*0.8);
    return {x:px,y:py,z:pz};
  });

  // 2. CUELLO 0.12
  add(10,20,(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    return {x:Math.cos(ang)*0.06, y:0.73+fy*0.12, z:Math.sin(ang)*0.06};
  });

  // 3. TORSO - MAPEO ANATÓMICO V32
  // Anchura hombros 0.48m, Trapezius 0.32, Cintura 0.12 narrowest, Cadera 0.335*wc, Lumbar 0.22-0.50, Flat Gluteo
  add(64,48,(u,fy)=>{
    const fx=u-0.5;
    let py = 0.72 - fy*0.82; // de hombro a cadera
    
    // CINTURA CURVE 0.12 narrowest + LUMBAR 0.22-0.50
    let waistCurve;
    if(fy<0.18) waistCurve = 0.88; // hombros
    else if(fy<0.38) waistCurve = 0.88 - (fy-0.18)*2.8; // bajando a cintura
    else if(fy<0.50) waistCurve = 0.12; // CINTURA 0.12 narrowest
    else if(fy<0.70) waistCurve = 0.12 + (fy-0.50)*1.8; // subiendo a cadera
    else waistCurve = 0.48; // cadera

    // ANCHURA HOMBROS 0.48m + CADERA 0.335*wc
    let rW = 0.48/2;
    if(fy>0.15 && fy<0.45) rW *= waistCurve/0.88;
    if(fy>0.50) rW = (0.335 * waistCurve);

    // TRAPEZIUS 0.32
    let trap = 0;
    if(fy<0.20 && Math.abs(fx)>0.18) trap = 0.32 * Math.exp(-Math.pow(fy-0.10,2)*20);

    let px = fx * rW * 2.0 + Math.sign(fx)*trap*0.02;
    let pz = Math.cos(fx*Math.PI*0.9)*0.12*waistCurve;

    // FLAT GLUTEO CURVE NEUTRAL STANCE - Lumbar 0.22-0.50
    if(fy>0.58 && fy<0.75){
      const gluteFlat = Math.exp(-Math.pow((fy-0.66)*6,2));
      pz -= gluteFlat * 0.06; // flat no volumen
      if(Math.abs(fx)<0.15) pz -= gluteFlat*0.04;
    }

    // SPINE ALIGNMENT NEUTRAL
    if(Math.abs(fx)<0.02) pz -= 0.006;

    return {x:px,y:py,z:pz};
  });

  // 4. BRAZOS T-POSE 90° HORIZONTAL - Clean
  const armT = (sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    const rad = 0.042 - fy*0.018;
    return {
      x: sign*(0.24 + fy*0.92), // extension total 0.48m+brazo
      y: 0.62 + Math.sin(ang)*rad,
      z: Math.cos(ang)*rad
    };
  };
  add(18,24, armT(-1));
  add(18,24, armT(1));

  // 5. PIERNAS - DIAMOND CLOSED GAP 0.0 - Clean Quad Topology - Flat Gluteo
  const legV32 = (sign)=>(u,fy)=>{
    const ang=(u-0.5)*Math.PI*2;
    let baseRad = 0.092 - fy*0.018; // pierna limpia
    if(fy>0.55 && fy<0.70) baseRad *= 0.85; // rodilla
    const r = baseRad + Math.cos(ang)*0.008;
    return {
      x: sign*0.0 + Math.cos(ang)*r, // DIAMOND CLOSED GAP 0.0
      y: 0.08 - fy*0.96,
      z: Math.sin(ang)*r*0.70
    };
  };
  add(36,24, legV32(-1));
  add(36,24, legV32(1));

  // 6. MANOS + PIES clean
  add(8,8,(u,fy)=>{ return {x:-1.16+(u-0.5)*0.10, y:0.62+(fy-0.5)*0.02, z:0}; });
  add(8,8,(u,fy)=>{ return {x:1.16+(u-0.5)*0.10, y:0.62+(fy-0.5)*0.02, z:0}; });
  add(10,14,(u,fy)=>{ return {x:(u-0.5)*0.06, y:-0.88-fy*0.06, z:0.04}; });
  add(10,14,(u,fy)=>{ return {x:(u-0.5)*0.06, y:-0.88-fy*0.06, z:0.04}; });

  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos,3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  
  const wire=new THREE.WireframeGeometry(geo);
  const mat=new THREE.LineBasicMaterial({color:0x00e5ff, transparent:true, opacity:0.38, depthWrite:false});
  group.add(new THREE.LineSegments(wire, mat));
  
  return geo;
}