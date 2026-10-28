// actor/laia_actor_brain.js - V34.3 CLEAN UNIFICADO - SIN BLOQUE RAYADO
// FIX: Hips -0.095/+0.095 limpios + radius 0.1225 + sin exp bulto + cintura 0.18 sin pinch

export const LAIA_ACTOR_BRAIN = {
  version: "V34.3 CLEAN - 2 PIERNAS SEPARADAS - Cintura 0.18 sin pinch - Diamond 0.0 - Anchura 0.48m - Cadera 0.1225 - X-CLAMP 0.1976 - Sin bloque rayado - Unificado",

  createLaiaSkeleton(THREE, group){
    const bones=[]; 
    const mk=(n,p,par)=>{ const b=new THREE.Bone(); b.name=n; b.position.copy(p); par.add(b); bones.push(b); return b; };
    
    // ROOT - CIRCULAR MATCH
    const hips=mk('Hips', new THREE.Vector3(0,0,0), group);
    const spine=mk('Spine_02', new THREE.Vector3(0,0.16,0), hips);
    const chest=mk('Chest', new THREE.Vector3(0,0.24,0), spine);
    const head=mk('Head_Bone', new THREE.Vector3(0,0.20,0), chest);

    // BRAZOS T-POSE 90° - 0.48m ancho - sin cono
    const shoulderL=mk('Shoulder.L', new THREE.Vector3(-0.24,0.16,0), chest);
    const shoulderR=mk('Shoulder.R', new THREE.Vector3(0.24,0.16,0), chest);
    const elbowL=mk('Elbow.L', new THREE.Vector3(-0.42,0,0), shoulderL);
    const elbowR=mk('Elbow.R', new THREE.Vector3(0.42,0,0), shoulderR);
    const handL=mk('Hand.L', new THREE.Vector3(-0.38,0,0), elbowL);
    const handR=mk('Hand.R', new THREE.Vector3(0.38,0,0), elbowR);
    
    // MANOS
    for(let i=0;i<5;i++){
      mk(`Finger.L.${i}`, new THREE.Vector3((i-2)*0.018, -0.04, 0), handL);
      mk(`Finger.R.${i}`, new THREE.Vector3((i-2)*0.018, -0.04, 0), handR);
    }

    // CADERA - 2 PIERNAS SEPARADAS LIMPIAS - CIRCULAR MATCH - SIN BLOQUE RAYADO
    // FIX V34.3: sin exp, sin bulto, gap 0.19 limpio
    const hipL=mk('Hip.L', new THREE.Vector3(-0.095, -0.05, 0), hips);
    const hipR=mk('Hip.R', new THREE.Vector3(0.095, -0.05, 0), hips);
    
    const kneeL=mk('Knee.L', new THREE.Vector3(0, -0.38, 0), hipL);
    const kneeR=mk('Knee.R', new THREE.Vector3(0, -0.38, 0), hipR);
    
    const calfL=mk('Calf.L', new THREE.Vector3(0, -0.38, 0), kneeL);
    const calfR=mk('Calf.R', new THREE.Vector3(0, -0.38, 0), kneeR);
    
    const footL=mk('Foot.L', new THREE.Vector3(0, -0.08, 0.04), calfL);
    const footR=mk('Foot.R', new THREE.Vector3(0, -0.08, 0.04), calfR);

    return {bones, hips, spine, chest, head, hipL, hipR};
  },

  thinkAndMove(bones, ctx){
    if(!bones || !bones.length) return;
    const t=Date.now()*0.001;
    bones.forEach(b=>{
      if(b.name.includes('Spine')) b.rotation.x = Math.sin(t*0.6)*0.04;
      if(b.name.includes('Head')) { b.rotation.y = Math.sin(t*0.4)*0.10; b.rotation.x = -0.05; }
      if(b.name.includes('Shoulder.L')) b.rotation.z = -0.05 + Math.sin(t*0.5)*0.03;
      if(b.name.includes('Shoulder.R')) b.rotation.z = 0.05 - Math.sin(t*0.5)*0.03;
    });
  }
};

export const LAIA_FINAL_ACTOR_BRAIN = LAIA_ACTOR_BRAIN;