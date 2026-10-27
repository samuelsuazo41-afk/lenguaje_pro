// actor/laia_actor_brain.js - V32.1 ORGANIC ANATOMICAL SEAM - BORRADO TOTAL CONO - 2 PIERNAS SEPARADAS REALES
// FIX: Hips separados -0.095 y +0.095 + costura natural cintura->glúteos->espalda->entrepiernas->axilas mamas->cuello cabeza->brazos manos->pantorrillas pies

export const LAIA_ACTOR_BRAIN = {
  version: "V32.1 ORGANIC SEAM - 2 PIERNAS SEPARADAS - Cintura 0.12 - Diamond 0.0 - Anchura 0.48m - Cadera 0.335*wc - Cabeza 28x36 depth 0.24 - Costura natural orgánica completa",

  createLaiaSkeleton(THREE, group){
    const bones=[]; 
    const mk=(n,p,par)=>{ const b=new THREE.Bone(); b.name=n; b.position.copy(p); par.add(b); bones.push(b); return b; };
    
    // HIPS ROOT - DIAMOND CLOSED 0.0
    const hips=mk('Hips', new THREE.Vector3(0,0,0), group);
    const spine=mk('Spine_02', new THREE.Vector3(0,0.16,0), hips); // lumbar 0.22-0.50 + flat gluteo
    const chest=mk('Chest', new THREE.Vector3(0,0.24,0), spine); // columna T1-T12 + cintura 0.12 + mamas + axilas + trapezius 0.32
    const head=mk('Head_Bone', new THREE.Vector3(0,0.22,0), chest); // cabeza 28x36 depth 0.24 + cuello 0.12

    // BRAZOS T-POSE 90° - ANCHURA 0.48m
    const shoulderL=mk('Shoulder.L', new THREE.Vector3(-0.24,0.18,0), chest);
    const shoulderR=mk('Shoulder.R', new THREE.Vector3(0.24,0.18,0), chest);
    const elbowL=mk('Elbow.L', new THREE.Vector3(-0.46,0,0), shoulderL);
    const elbowR=mk('Elbow.R', new THREE.Vector3(0.46,0,0), shoulderR);
    const handL=mk('Hand.L', new THREE.Vector3(-0.46,0,0), elbowL);
    const handR=mk('Hand.R', new THREE.Vector3(0.46,0,0), elbowR);
    
    // MANOS
    for(let i=0;i<5;i++){
      mk(`Finger.L.${i}`, new THREE.Vector3((i-2)*0.020, -0.04, 0.01), handL);
      mk(`Finger.R.${i}`, new THREE.Vector3((i-2)*0.020, -0.04, 0.01), handR);
    }
    
    // 2 PIERNAS SEPARADAS REALES - FIX CONO - CADERA 0.335*wc - GLÚTEOS - ENTREPIERNAS DIAMOND CLOSED 0.0
    // Antes: 0,-0.18 los 2 = cono. Ahora: -0.095 y +0.095 = 2 piernas
    const hipL=mk('Hip.L', new THREE.Vector3(-0.095,-0.08,0), hips); // izq separada
    const hipR=mk('Hip.R', new THREE.Vector3(0.095,-0.08,0), hips); // der separada
    const kneeL=mk('Knee.L', new THREE.Vector3(0,-0.44,0), hipL);
    const kneeR=mk('Knee.R', new THREE.Vector3(0,-0.44,0), hipR);
    const calfL=mk('Calf.L', new THREE.Vector3(0,-0.40,0), kneeL); // pantorrillas
    const calfR=mk('Calf.R', new THREE.Vector3(0,-0.40,0), kneeR);
    const footL=mk('Foot.L', new THREE.Vector3(0,-0.40,0.05), calfL); // pies
    const footR=mk('Foot.R', new THREE.Vector3(0,-0.40,0.05), calfR);

    const proportional = { glute:1.0, thigh:0.7, knee:0.5, calf:0.6 };
    const falloffFn = (t, isCalf)=> Math.exp(-Math.pow(t*(isCalf?1.8:2.2),2));

    const skeleton=new THREE.Skeleton(bones);
    return { bones, skeleton, hips, spine, chest, head, proportional, falloffFn };
  },

  thinkAndMove(bones, ctx={}){
    if(!bones || !bones.length) return;
    const t=performance.now()*0.001;
    const hips=bones.find(b=>b.name==='Hips');
    const head=bones.find(b=>b.name==='Head_Bone');
    const chest=bones.find(b=>b.name==='Chest');
    
    // RESPIRACIÓN SUAVE
    if(hips) hips.position.y=Math.sin(t*0.6)*0.002;
    if(chest) chest.rotation.y=Math.sin(t*0.20)*0.02;
    if(head){
      head.rotation.y=Math.sin(t*0.28)*0.06;
      head.rotation.x=ctx.reading ? -0.08 : 0;
    }
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