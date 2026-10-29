// actor/laia_actor_brain.js - V35.4 SOLO PIERNAS - CINTURA 0.28 INTACTA NO TOCAR
// FIX: piernas juntas 0.12->0.095 + engrosadas costura 0.065->0.092 calza grosor cintura + ángulo natural

export const LAIA_ACTOR_BRAIN = {
  version: "V35.4 SOLO PIERNAS - Cintura 0.28 INTACTA + Piernas juntas 0.095 engrosada 0.092 ángulo natural",

  createLaiaSkeleton(THREE, group){
    const bones=[]; 
    const mk=(n,p,par)=>{ const b=new THREE.Bone(); b.name=n; b.position.copy(p); par.add(b); bones.push(b); return b; };
    
    const hips=mk('Hips_V35_4_CinturaIntacta0.28_PiernasJuntas0.095', new THREE.Vector3(0,0,0), group);
    hips.userData.puzzle = { waist: 0.28, hipOffset: "±0.095", radiusCostura: 0.092, fix: "CINTURA INTACTA 0.28 NO TOCADA + piernas juntas y engrosadas" };

    const spineLow=mk('Spine_00_Lower_V35_4_Waist0.28_Intacta', new THREE.Vector3(0,0.08,0), hips);
    spineLow.userData.puzzle = { waist: 0.28, note: "INTACTA NO TOCAR" };
    
    const spine=mk('Spine_02_ModuleB_V35_4_Waist0.28_Intacta', new THREE.Vector3(0,0.08,0), spineLow);
    const chest=mk('Chest_V35_4_Torso360', new THREE.Vector3(0,0.24,0), spine);
    const head=mk('Head_Bone_V35_4_28x36', new THREE.Vector3(0,0.20,0), chest);

    const shoulderL=mk('Shoulder.L_V35_4', new THREE.Vector3(-0.24,0.16,0), chest);
    const shoulderR=mk('Shoulder.R_V35_4', new THREE.Vector3(0.24,0.16,0), chest);
    const elbowL=mk('Elbow.L_V35_4', new THREE.Vector3(-0.38,0,0), shoulderL);
    const elbowR=mk('Elbow.R_V35_4', new THREE.Vector3(0.38,0,0), shoulderR);
    const handL=mk('Hand.L_V35_4_5Fingers', new THREE.Vector3(-0.38,0,0), elbowL);
    const handR=mk('Hand.R_V35_4_5Fingers', new THREE.Vector3(0.38,0,0), elbowR);
    
    for(let i=0;i<5;i++){
      mk(`Finger.L.${i}_V35_4`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handL);
      mk(`Finger.R.${i}_V35_4`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handR);
    }

    // V35.4 SOLO PIERNAS - CINTURA 0.28 INTACTA
    const hipL=mk('Hip.L_V35_4_SoloPiernas_Juntas0.095_Engrosada0.092_AnguloNatural_CinturaIntacta0.28', new THREE.Vector3(-0.095, -0.05, 0), hips);
    const hipR=mk('Hip.R_V35_4_SoloPiernas_Juntas0.095_Engrosada0.092_AnguloNatural_CinturaIntacta0.28', new THREE.Vector3(0.095, -0.05, 0), hips);
    hipL.userData.puzzle = { 
      offset: -0.095, 
      radiusCostura: 0.092, 
      waist: 0.28,
      note: "CINTURA 0.28 INTACTA NO TOCADA",
      fixPiernas: "juntas 0.12->0.095 lateral y posterior calza círculo azul",
      fixGrosor: "engrosada 0.065->0.092 calza grosor cintura + zScale 0.58->0.68",
      angulo: "0.092 costura -> 0.073 muslo medio -> 0.055 rodilla -> 0.035 pantorrilla orgánico uniforme"
    };
    hipR.userData.puzzle = { offset: 0.095, radiusCostura: 0.092, waist: 0.28, fix: "Solo piernas juntas y engrosadas" };
    
    const kneeL=mk('Knee.L_V35_4_0.055_AnguloNatural', new THREE.Vector3(0, -0.38, 0), hipL);
    const kneeR=mk('Knee.R_V35_4_0.055_AnguloNatural', new THREE.Vector3(0, -0.38, 0), hipR);
    kneeL.userData.puzzle = { radius: 0.055, curve: "0.092->0.073->0.055 ángulo natural pelvis->rodilla" };
    kneeR.userData.puzzle = { radius: 0.055 };
    
    const calfL=mk('Calf.L_V35_4_0.035_Pantorrilla', new THREE.Vector3(0, -0.38, 0), kneeL);
    const calfR=mk('Calf.R_V35_4_0.035_Pantorrilla', new THREE.Vector3(0, -0.38, 0), kneeR);
    calfL.userData.puzzle = { radius: "0.055->0.035" };
    calfR.userData.puzzle = { radius: "0.055->0.035" };
    
    const footL=mk('Foot.L_V35_4_Offset0.095', new THREE.Vector3(0, -0.08, 0.04), calfL);
    const footR=mk('Foot.R_V35_4_Offset0.095', new THREE.Vector3(0, -0.08, 0.04), calfR);

    return {bones, hips, spine, chest, head, hipL, hipR, handL, handR};
  },

  thinkAndMove(bones, ctx){
    if(!bones || !bones.length) return;
    const t=Date.now()*0.001;
    bones.forEach(b=>{
      if(b.name.includes('Spine_00_Lower')) {
        b.rotation.x = Math.sin(t*0.5)*0.02;
        b.rotation.y = Math.sin(t*0.3)*0.02;
      }
      if(b.name.includes('Spine_02')) b.rotation.x = Math.sin(t*0.6)*0.03;
      if(b.name.includes('Head_Bone')) { b.rotation.y = Math.sin(t*0.35)*0.12; b.rotation.x = -0.04 + Math.sin(t*0.28)*0.03; }
      if(b.name.includes('Shoulder.L')) b.rotation.z = -0.04 + Math.sin(t*0.45)*0.025;
      if(b.name.includes('Shoulder.R')) b.rotation.z = 0.04 - Math.sin(t*0.45)*0.025;
      if(b.name.includes('Hand')) b.rotation.x = Math.sin(t*0.6)*0.06;
      if(b.name.includes('Finger')) b.rotation.x = Math.sin(t*0.8)*0.08;
    });
  }
};

export const LAIA_FINAL_ACTOR_BRAIN = LAIA_ACTOR_BRAIN;
export const LAIA_V35_4_SOLO_PIERNAS = LAIA_ACTOR_BRAIN;
export const LAIA_V35_3_BALANCE_FINAL = LAIA_ACTOR_BRAIN;
export const LAIA_V35_2_FINAL_FIX_RGB = LAIA_ACTOR_BRAIN;
export const LAIA_V35_PUZZLE_GANADORA = LAIA_ACTOR_BRAIN; 