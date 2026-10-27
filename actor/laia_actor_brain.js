// V32 NEW TEMPLATE FROM SCRATCH - BORRADO TOTAL V31
export const LAIA_ACTOR_BRAIN = {
  version: "V32 NEW TEMPLATE FROM SCRATCH - T-POSE 90° - Cintura 0.12 - Diamond 0.0 - Anchura 0.48m - Trapezius 0.32 - Cadera 0.335*wc - Cabeza 28x36 depth 0.24 - Cuello 0.12 - Lumbar 0.22-0.50 - Flat Gluteo Neutral",
  createLaiaSkeleton(THREE, group){
    const bones=[]; const mk=(n,p,par)=>{ const b=new THREE.Bone(); b.name=n; b.position.copy(p); par.add(b); bones.push(b); return b; };
    const hips=mk('Hips', new THREE.Vector3(0,0,0), group);
    const spine=mk('Spine_02', new THREE.Vector3(0,0.16,0), hips);
    const chest=mk('Chest', new THREE.Vector3(0,0.24,0), spine);
    const head=mk('Head_Bone', new THREE.Vector3(0,0.22,0), chest);
    const shoulderL=mk('Shoulder.L', new THREE.Vector3(-0.24,0.18,0), chest);
    const shoulderR=mk('Shoulder.R', new THREE.Vector3(0.24,0.18,0), chest);
    const elbowL=mk('Elbow.L', new THREE.Vector3(-0.46,0,0), shoulderL);
    const elbowR=mk('Elbow.R', new THREE.Vector3(0.46,0,0), shoulderR);
    const handL=mk('Hand.L', new THREE.Vector3(-0.46,0,0), elbowL);
    const handR=mk('Hand.R', new THREE.Vector3(0.46,0,0), elbowR);
    const hipL=mk('Hip.L', new THREE.Vector3(0,-0.18,0), hips);
    const hipR=mk('Hip.R', new THREE.Vector3(0,-0.18,0), hips);
    const kneeL=mk('Knee.L', new THREE.Vector3(0,-0.44,0), hipL);
    const kneeR=mk('Knee.R', new THREE.Vector3(0,-0.44,0), hipR);
    const calfL=mk('Calf.L', new THREE.Vector3(0,-0.40,0), kneeL);
    const calfR=mk('Calf.R', new THREE.Vector3(0,-0.40,0), kneeR);
    return { bones, hips, spine, chest, head };
  },
  thinkAndMove(bones, ctx={}){
    const t=performance.now()*0.001;
    const hips=bones.find(b=>b.name==='Hips');
    const head=bones.find(b=>b.name==='Head_Bone');
    if(hips) hips.position.y=Math.sin(t*0.6)*0.002;
    if(head) head.rotation.y=Math.sin(t*0.28)*0.06;
  }
};