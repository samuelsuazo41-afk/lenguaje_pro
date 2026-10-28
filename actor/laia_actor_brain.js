// actor/laia_actor_brain.js - V34.1 ORGANIC ANATOMICAL SEAM - PUZZLE X-CLAMP 0.1976
// FIX: Hips separados -0.095 y +0.095 + radius 0.1225 CIRCULAR MATCH + costura natural completa
// BASE: Tu V32.1 + FIX V34.1

export const LAIA_ACTOR_BRAIN = {
  version: "V34.1 ORGANIC SEAM - 2 PIERNAS SEPARADAS - Cintura 0.12 - Diamond 0.0 - Anchura 0.48m - Cadera 0.1225 - Cabeza 28x36 depth 0.24 - X-CLAMP 0.1976 - Costura natural orgánica completa",

  createLaiaSkeleton(THREE, group){
    const bones=[]; 
    const mk=(n,p,par)=>{ const b=new THREE.Bone(); b.name=n; b.position.copy(p); par.add(b); bones.push(b); return b; };
    
    // HIPS ROOT - DIAMOND CLOSED 0.0 - CIRCULAR MATCH V34.1
    const hips=mk('Hips', new THREE.Vector3(0,0,0), group);
    const spine=mk('Spine_02', new THREE.Vector3(0,0.16,0), hips);
    const chest=mk('Chest', new THREE.Vector3(0,0.24,0), spine);
    const head=mk('Head_Bone', new THREE.Vector3(0,0.22,0), chest);

    // BRAZOS T-POSE 90° - ANCHURA 0.48m - TRAPEZIUS 0.32 SIN CONO
    const shoulderL=mk('Shoulder.L', new THREE.Vector3(-0.24,0.18,0), chest);
    const shoulderR=mk('Shoulder.R', new THREE.Vector3(0.24,0.18,0), chest);
    const elbowL=mk('Elbow.L', new THREE.Vector3(-0.46,0,0), shoulderL);
    const elbowR=mk('Elbow.R', new THREE.Vector3(0.46,0,0), shoulderR);
    const handL=mk('Hand.L', new THREE.Vector3(-0.46,0,0), elbowL);
    const handR=mk('Hand.R', new THREE.Vector3(0.46,0,0), elbowR);
    
    // MANOS 120v - 5 dedos
    for(let i=0;i<5;i++){
      mk(`Finger.L.${i}`, new THREE.Vector3((i-2)*0.020, -0.04, 0