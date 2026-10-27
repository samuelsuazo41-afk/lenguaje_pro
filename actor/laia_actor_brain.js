// actor/laia_actor_brain.js - V31 BUSINESS - FROM SCRATCH - T-POSE 90° ARM EXTENSION - V30.71 LATERAL + V30.22 POSTERIOR
// SPECS: CABEZA 28x36" - CUELLO 0.12" - TRAPEZIUS 0.32" - ANCHURA HOMBROS 0.48m - SHOULDERS DORSAL ANCHO
// CINTURA 0.12 - DIAMOND 0.0 - FLAT GLUTEO CURVE - LUMBAR 0.22-0.50 - CADERA 0.335*wc - DIAMOND CLOSED GAP 0.0
// POSTURE NEUTRAL STANCE - ARM EXTENSION 90° - COLUMNA T1-T12 - DELTOIDES - BODYSUIT TÉCNICO CERRADO

export const LAIA_ACTOR_BRAIN = {
  version: "V31 BUSINESS - FROM SCRATCH - V30.71 LATERAL 90° + V30.22 POSTERIOR T-POSE - CINTURA 0.12 - DIAMOND 0.0 - ANCHURA 0.48m - T-POSE 90°",

  createLaiaSkeleton(THREE, group, opts={}){
    const bones=[];
    const X_CLAMP = opts.X_CLAMP || 0.1976;
    const CADERA_WC = opts.CADERA_WC || 0.335;
    const ANCHURA_HOMBROS = opts.ANCHURA_HOMBROS || 0.48;
    const DIAMOND_GAP = opts.DIAMOND_GAP ?? 0.0;
    
    const mk=(name,pos,parent)=>{
      const b=new THREE.Bone();
      b.name=name;
      b.position.copy(pos);
      parent.add(b);
      bones.push(b);
      return b;
    };

    // HIPS ROOT - DIAMOND CLOSED GAP 0.0 - V30.71 + V30.22
    const hips=mk('Hips', new THREE.Vector3(0,0,0), group);
    // LUMBAR 0.22-0.50 - CINTURA 0.12 narrowest - FLAT GLUTEO CURVE
    const spine02=mk('Spine_02', new THREE.Vector3(0,0.16,0), hips); // lumbar 0.22-0.50
    const chest=mk('Chest', new THREE.Vector3(0,0.24,0), spine02); // columna T1-T12
    const head=mk('Head_Bone', new THREE.Vector3(0,0.22,0), chest); // CABEZA 28x36" + CUELLO 0.12"
    
    // BRAZOS T-POSE 90° - ARM EXTENSION 90° - ANCHURA HOMBROS 0.48m - TRAPEZIUS 0.32" - SHOULDERS DORSAL ANCHO - DELTOIDES
    // V30.22: Anchura hombros 0.48m = 0.24 por lado + V30.71 ARM EXTENSION 90°
    const shoulderL=mk('Shoulder.L', new THREE.Vector3(-ANCHURA_HOMBROS/2,0.18,0), chest);
    const shoulderR=mk('Shoulder.R', new THREE.Vector3(ANCHURA_HOMBROS/2,0.18,0), chest);
    const elbowL=mk('Elbow.L', new THREE.Vector3(-0.46,0,0), shoulderL); // extensión 90°
    const elbowR=mk('Elbow.R', new THREE.Vector3(0.46,0,0), shoulderR);
    
    // MANOS - T-POSE ABIERTAS - postura neutral stance
    const handL=mk('Hand.L', new THREE.Vector3(-0.46,0,0), elbowL);
    const handR=mk('Hand.R', new THREE.Vector3(0.46,0,0), elbowR);
    for(let i=0;i<5;i++){
      mk(`Finger.L.${i}`, new THREE.Vector3((i-2)*0.020, -0.04, 0.01), handL);
      mk(`Finger.R.${i}`, new THREE.Vector3((i-2)*0.020, -0.04, 0.01), handR);
    }
    
    // PIERNAS - DIAMOND CLOSED 0.0 - CADERA 0.335*wc - GLUTEUS - FLAT GLUTEO CURVE - V30.22 + V30.71
    const hipL=mk('Hip.L', new THREE.Vector3(-DIAMOND_GAP,-0.18,0), hips);
    const hipR=mk('Hip.R', new THREE.Vector3(DIAMOND_GAP,-0.18,0), hips);
    const kneeL=mk('Knee.L', new THREE.Vector3(0,-0.44,0), hipL);
    const kneeR=mk('Knee.R', new THREE.Vector3(0,-0.44,0), hipR);
    const calfL=mk('Calf.L', new THREE.Vector3(0,-0.40,0), kneeL);
    const calfR=mk('Calf.R', new THREE.Vector3(0,-0.40,0), kneeR);
    const footL=mk('Foot.L', new THREE.Vector3(0,-0.40,0.05), calfL); // Oxford sole 0.03
    const footR=mk('Foot.R', new THREE.Vector3(0,-0.40,0.05), calfR);

    // Metadata V31 BUSINESS
    const proportional = opts.proportional || { glute:1.0, thigh:0.7, knee:0.5, calf:0.6 };
    const falloffFn = (t, isCalf)=> Math.exp(-Math.pow(t*(isCalf?1.8:2.2),2));

    const skeleton=new THREE.Skeleton(bones);
    return { bones, skeleton, hips, spine02, chest, head, proportional, falloffFn, X_CLAMP, CADERA_WC, ANCHURA_HOMBROS, DIAMOND_GAP };
  },

  applyProportionalDeformation(geo, centroid, drag, peak, isCalf=false){
    if(!geo || !geo.attributes || !geo.attributes.position) return;
    const pos = geo.attributes.position;
    const falloffFn = (t)=> Math.exp(-Math.pow(t*(isCalf?1.8:2.2),2));
    for(let i=0;i<pos.count;i++){
      const x=pos.getX(i), y=pos.getY(i), z=pos.getZ(i);
      const dx=x-centroid.x, dy=y-centroid.y, dz=z-centroid.z;
      const dist = Math.sqrt(dx*dx+dy*dy+dz*dz);
      const t = dist / (isCalf?0.18:0.12);
      const falloff = falloffFn(t);
      const scale = 1 + drag*peak*falloff;
      pos.setXYZ(i, centroid.x + dx*scale, centroid.y + dy*scale, centroid.z + dz*scale);
    }
    pos.needsUpdate=true;
  },

  thinkAndMove(bones, ctx={}){
    if(!bones || !bones.length) return;
    const t=performance.now()*0.001;

    const hips=bones.find(b=>b.name==='Hips');
    const head=bones.find(b=>b.name==='Head_Bone');
    const spine=bones.find(b=>b.name==='Spine_02');
    const chest=bones.find(b=>b.name==='Chest');
    const shoulderL=bones.find(b=>b.name==='Shoulder.L');
    const shoulderR=bones.find(b=>b.name==='Shoulder.R');
    const handL=bones.find(b=>b.name==='Hand.L');
    const handR=bones.find(b=>b.name==='Hand.R');

    // RESPIRACIÓN SUAVE 0.002 - posture neutral stance
    if(hips) hips.position.y=Math.sin(t*0.6)*0.002;

    // CABEZA 28x36" - bob - V30.22
    if(head){
      head.rotation.y=Math.sin(t*0.28)*0.08;
      head.rotation.x=ctx.reading ? -0.10 + Math.sin(t*0.4)*0.01 : Math.sin(t*0.22)*0.015;
      head.rotation.z=Math.sin(t*0.15)*0.01;
    }

    // CHEST - columna vertebral T1-T12 + cintura 0.12
    if(chest){
      chest.rotation.y=Math.sin(t*0.20)*0.03;
      chest.rotation.x=Math.sin(t*0.26)*0.008;
    }
    // SPINE - lumbar 0.22-0.50 + flat gluteo curve
    if(spine){
      spine.rotation.y=Math.sin(t*0.24)*0.025;
    }

    // MANOS T-POSE 90° - postura neutral
    if(handL){
      handL.rotation.z = ctx.reading ? Math.sin(t*0.4)*0.06 : 0;
    }
    if(handR){
      handR.rotation.z = ctx.reading ? -Math.sin(t*0.4)*0.06 : 0;
    }

    // HOMBROS - T-POSE 90° ARM EXTENSION - shoulders dorsal ancho - celebratory suave
    if(shoulderL && ctx.celebrating){
      shoulderL.rotation.z=Math.sin(t*1.8)*0.10;
    }
    if(shoulderR && ctx.celebrating){
      shoulderR.rotation.z=-Math.sin(t*1.8)*0.10;
    }

    // INTENTION MOTOR V31 BUSINESS
    if(ctx.joints){
      Object.entries(ctx.joints).forEach(([name, rot])=>{
        const b=bones.find(x=>x.name===name || x.name===name.replace('_','.') || x.name.includes(name));
        if(b && Array.isArray(rot)){
          b.rotation.x+=rot[0]*0.001;
          b.rotation.y+=rot[1]*0.001;
          b.rotation.z+=rot[2]*0.001;
        }
      });
    }

    // X-CLAMP solo cadera/piernas - NO brazos/manos T-POSE 90°
    bones.forEach(b=>{
      if(b.name.startsWith('Hip') || b.name.startsWith('Knee') || b.name.startsWith('Calf')){
        if(b.position.x > 0.1976) b.position.x = 0.1976 - Math.pow(b.position.x - 0.1976,3)*0.5;
        if(b.position.x < -0.1976) b.position.x = -0.1976 + Math.pow(-0.1976 - b.position.x,3)*0.5;
      }
    });
  },

  decideFrame(metrics={}){
    if(metrics.same_error_count>=3) return { emotion: "STRICT_ENGINEER", state: "HOLO_STRICT" };
    if(metrics.streak_days>=7 || metrics.level_up) return { emotion: "ELEVATION", state: "HOLO_CELEB" };
    if(metrics.hesitation_ms>4000) return { emotion: "SCAFFOLDING", state: "HOLO_EXPLAIN" };
    return { emotion: "TRANSMISSION", state: "HOLO_OPEN" };
  }
};

export const LAIA_BRAIN = LAIA_ACTOR_BRAIN;
export default LAIA_ACTOR_BRAIN;