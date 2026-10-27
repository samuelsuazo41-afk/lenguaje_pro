// actor/laia_actor_brain.js - V30.85 FIX FRONT - PROPORTIONAL BALLOON + X-CLAMP 0.1976 + DIAMOND CLOSED 0.0 + PIERNAS 62x42 + MANOS

export const LAIA_ACTOR_BRAIN = {
  version: "30.85 FIX FRONT - 0.58 - 0.38 - WAIST 0.52->0.146 - GAP 0.052 - DIAMOND CLOSED 0.0 - X-CLAMP 0.1976 - PROPORTIONAL BALLOON - MANOS 0.14x0.08",

  createLaiaSkeleton(THREE, group, opts={}){
    const bones=[];
    const X_CLAMP = opts.X_CLAMP || 0.1976;
    const mk=(name,pos,parent)=>{
      const b=new THREE.Bone();
      b.name=name;
      b.position.copy(pos);
      parent.add(b);
      bones.push(b);
      return b;
    };

    // HIPS ROOT - GAP 0.052 CLOSED + X-CLAMP
    const hips=mk('Hips', new THREE.Vector3(0,0,0), group);
    const spine02=mk('Spine_02', new THREE.Vector3(0,0.18,0), hips);
    const chest=mk('Chest', new THREE.Vector3(0,0.22,0), spine02);
    const head=mk('Head_Bone', new THREE.Vector3(0,0.22,0), chest);
    
    // BRAZOS T-POSE 0.92 + Braquial taper 0.054->0.018 + Axilla clean
    const shoulderL=mk('Shoulder.L', new THREE.Vector3(-0.31,0.15,0), chest);
    const shoulderR=mk('Shoulder.R', new THREE.Vector3(0.31,0.15,0), chest);
    const elbowL=mk('Elbow.L', new THREE.Vector3(-0.42,0,0), shoulderL);
    const elbowR=mk('Elbow.R', new THREE.Vector3(0.42,0,0), shoulderR);
    
    // MANOS - Palma 0.14x0.08 + 5 dedos 125 verts 3 falanges + wrist twist 360°
    const handL=mk('Hand.L', new THREE.Vector3(-0.52,0,0), elbowL);
    const handR=mk('Hand.R', new THREE.Vector3(0.52,0,0), elbowR);
    for(let i=0;i<5;i++){
      mk(`Finger.L.${i}`, new THREE.Vector3((i-2)*0.022, -0.04 - i*0.005, 0.01), handL);
      mk(`Finger.R.${i}`, new THREE.Vector3((i-2)*0.022, -0.04 - i*0.005, 0.01), handR);
    }
    
    // PIERNAS FIX 62x42 - GAP 0.052 CLOSED + X-CLAMP 0.1976 + PROPORTIONAL BALLOON
    const hipL=mk('Hip.L', new THREE.Vector3(-0.052,-0.18,0), hips);
    const hipR=mk('Hip.R', new THREE.Vector3(0.052,-0.18,0), hips);
    const kneeL=mk('Knee.L', new THREE.Vector3(0,-0.42,0), hipL);
    const kneeR=mk('Knee.R', new THREE.Vector3(0,-0.42,0), hipR);
    // Rodilla fan 32 dual core seamless + Gastrocnemius 0.66 depth -0.16
    const calfL=mk('Calf.L', new THREE.Vector3(0,-0.38,0), kneeL);
    const calfR=mk('Calf.R', new THREE.Vector3(0,-0.38,0), kneeR);
    const footL=mk('Foot.L', new THREE.Vector3(0,-0.42,0.05), calfL);
    const footR=mk('Foot.R', new THREE.Vector3(0,-0.42,0.05), calfR);

    // Metadata para proportional balloon
    const proportional = opts.proportional || { glute:1.0, thigh:0.7, knee:0.5, calf:0.6 };
    const falloffFn = (t, isCalf)=> Math.exp(-Math.pow(t*(isCalf?1.8:2.2),2));

    const skeleton=new THREE.Skeleton(bones);
    return { bones, skeleton, hips, spine02, chest, head, proportional, falloffFn, X_CLAMP };
  },

  // FALL-OFF RADIAL - FIX picos rojos
  // scaleRadial = 1 + drag*Peak*falloff
  // newPos = centroid + (old-centroid)*scaleRadial
  // falloff = exp(-(t*2.2)²) radius 0.12 general 0.18 calf
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

    // RESPIRACIÓN SUAVE 0.003 + proportional balloon
    if(hips) hips.position.y=Math.sin(t*0.7)*0.003;

    // CABEZA - bob humanoide 28x36 Ø0.24
    if(head){
      head.rotation.y=Math.sin(t*0.32)*0.10;
      head.rotation.x=ctx.reading ? -0.12 + Math.sin(t*0.5)*0.01 : Math.sin(t*0.26)*0.02;
      head.rotation.z=Math.sin(t*0.18)*0.015;
    }

    // CHEST + SPINE - cintura 0.52->0.146 curvas suaves + cresta 0.335*wc
    if(chest){
      chest.rotation.y=Math.sin(t*0.24)*0.04;
      chest.rotation.x=Math.sin(t*0.31)*0.01;
    }
    if(spine){
      spine.rotation.y=Math.sin(t*0.28)*0.03;
    }

    // MANOS - wrist twist 360° + falanges
    if(handL){
      handL.rotation.z = ctx.reading ? Math.sin(t*0.5)*0.08 : Math.sin(t*0.22)*0.03;
      if(ctx.celebrating) handL.rotation.y = Math.sin(t*2.0)*0.2;
    }
    if(handR){
      handR.rotation.z = ctx.reading ? -Math.sin(t*0.5)*0.08 : -Math.sin(t*0.22)*0.03;
      if(ctx.celebrating) handR.rotation.y = -Math.sin(t*2.0)*0.2;
    }

    // HOMBROS - T-POSE 0.92 best template - celebratory
    if(shoulderL && ctx.celebrating){
      shoulderL.rotation.x=Math.sin(t*2.2)*0.15;
    }
    if(shoulderR && ctx.celebrating){
      shoulderR.rotation.x=Math.sin(t*2.2)*0.15;
    }

    // INTENTION MOTOR V30.85 FRONT
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

    // X-CLAMP 0.1976 - evita repisa alerón lateral
    bones.forEach(b=>{
      if(b.name.startsWith('Hip') || b.name.startsWith('Knee') || b.name.startsWith('Calf')){
        if(b.position.x > 0.1976) b.position.x = 0.1976 - Math.pow(b.position.x - 0.1976,3)*0.5;
        if(b.position.x < -0.1976) b.position.x = -0.1976 + Math.pow(-0.1976 - b.position.x,3)*0.5;
      }
    });
  },

  // DECIDE FRAME POR MÉTRICAS - V30.85 FRONT
  decideFrame(metrics={}){
    if(metrics.same_error_count>=3) return { emotion: "STRICT_ENGINEER", state: "HOLO_STRICT" };
    if(metrics.streak_days>=7 || metrics.level_up) return { emotion: "ELEVATION", state: "HOLO_CELEB" };
    if(metrics.hesitation_ms>4000) return { emotion: "SCAFFOLDING", state: "HOLO_EXPLAIN" };
    return { emotion: "TRANSMISSION", state: "HOLO_OPEN" };
  }
};

export const LAIA_BRAIN = LAIA_ACTOR_BRAIN;
export default LAIA_ACTOR_BRAIN;