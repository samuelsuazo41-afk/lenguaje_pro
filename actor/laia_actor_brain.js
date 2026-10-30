// actor/laia_actor_brain.js - V35.5 BLOCK THEORY - TECNICA VIDEO HEAD 1/3 + CINTURA 0.28 INTACTA + PIERNAS BLOCK 0.088/0.095 EMPOTRADAS
// BASE: tu V35.4 + FIX: Block planar 1/3 head + 1/2 body + piernas empotradas sella gap

export const LAIA_ACTOR_BRAIN = {
  version: "V35.5 BLOCK THEORY - Head 1/3 + Body 1/2 + Cintura 0.28 INTACTA + Piernas 0.088/0.095 empotradas Block",

  createLaiaSkeleton(THREE, group){
    const bones=[]; 
    const mk=(n,p,par)=>{ const b=new THREE.Bone(); b.name=n; b.position.copy(p); par.add(b); bones.push(b); return b; };
    
    const hips=mk('Hips_V35_5_Block_1/3_1/2_Cintura0.28_0.088_0.095', new THREE.Vector3(0,0,0), group);
    hips.userData.puzzle = { waist: 0.28, head:"1/3", torso:"1/3", legs:"1/2", technique:"Block Theory Asaro + 1/3 head", hipOffset:"±0.088", radiusCostura:0.095, fix:"V35.4->V35.5 Block empotrado sella gap" };

    const spineLow=mk('Spine_00_Lower_V35_5_Block_Waist0.28_Intacta', new THREE.Vector3(0,0.08,0), hips);
    spineLow.userData.puzzle = { waist: 0.28, note:"INTACTA NO TOCAR - Block 1/3" };
    
    const spine=mk('Spine_02_Block_1/3_V35_5_Waist0.28', new THREE.Vector3(0,0.08,0), spineLow);
    const chest=mk('Chest_V35_5_Block_1/3_Torso', new THREE.Vector3(0,0.24,0), spine);
    const head=mk('Head_Bone_V35_5_Block_1/3_36x24', new THREE.Vector3(0,0.20,0), chest);
    head.userData.puzzle = { technique:"Different Angles Head Theory 1/3 + 1/2 lateral", rows:36, cols:24, division:"1/3 top/mid/bottom" };

    const shoulderL=mk('Shoulder.L_V35_5_Block_1/2', new THREE.Vector3(-0.24,0.16,0), chest);
    const shoulderR=mk('Shoulder.R_V35_5_Block_1/2', new THREE.Vector3(0.24,0.16,0), chest);
    const elbowL=mk('Elbow.L_V35_5_Block_1/2', new THREE.Vector3(-0.38,0,0), shoulderL);
    const elbowR=mk('Elbow.R_V35_5_Block_1/2', new THREE.Vector3(0.38,0,0), shoulderR);
    const handL=mk('Hand.L_V35_5_Block_5Fingers', new THREE.Vector3(-0.38,0,0), elbowL);
    const handR=mk('Hand.R_V35_5_Block_5Fingers', new THREE.Vector3(0.38,0,0), elbowR);
    
    for(let i=0;i<5;i++){
      mk(`Finger.L.${i}_V35_5_Block`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handL);
      mk(`Finger.R.${i}_V35_5_Block`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handR);
    }

    // V35.5 BLOCK - PIERNAS EMPOTRADAS 0.088/0.095 - CINTURA 0.28 INTACTA
    const hipL=mk('Hip.L_V35_5_Block_Empotrado_0.088_0.095_Cintura0.28', new THREE.Vector3(-0.088, -0.02, 0), hips);
    const hipR=mk('Hip.R_V35_5_Block_Empotrado_0.088_0.095_Cintura0.28', new THREE.Vector3(0.088, -0.02, 0), hips);
    hipL.userData.puzzle = { 
      offset: -0.088, 
      radiusCostura: 0.095, 
      waist: 0.28,
      py: 0.16,
      zScale: 0.72,
      technique: "Block 1/2",
      note: "V35.4->V35.5 Block: 0.095->0.088 más juntas + py 0.13->0.16 empotrada 3cm dentro torso sella gap lateral",
      fixPiernas: "juntas 0.095->0.088 lateral y posterior calza círculo azul cintura 0.28 intacta",
      fixGrosor: "engrosada 0.092->0.095 calza grosor cintura + zScale 0.68->0.72 posterior grueso",
      angulo: "Block 1/2: 0.095 costura -> 0.073 muslo medio -> 0.055 rodilla -> 0.035 pantorrilla orgánico uniforme"
    };
    hipR.userData.puzzle = { offset: 0.088, radiusCostura: 0.095, waist: 0.28, py:0.16, fix: "Block empotrado" };
    
    const kneeL=mk('Knee.L_V35_5_Block_1/2_0.055_AnguloNatural', new THREE.Vector3(0, -0.38, 0), hipL);
    const kneeR=mk('Knee.R_V35_5_Block_1/2_0.055_AnguloNatural', new THREE.Vector3(0, -0.38, 0), hipR);
    kneeL.userData.puzzle = { radius: 0.055, curve: "Block 1/2: 0.095->0.073->0.055 ángulo natural pelvis->rodilla", division:"1/2" };
    kneeR.userData.puzzle = { radius: 0.055, division:"1/2" };
    
    const calfL=mk('Calf.L_V35_5_Block_1/2_0.035_Pantorrilla', new THREE.Vector3(0, -0.38, 0), kneeL);
    const calfR=mk('Calf.R_V35_5_Block_1/2_0.035_Pantorrilla', new THREE.Vector3(0, -0.38, 0), kneeR);
    calfL.userData.puzzle = { radius: "0.055->0.035 Block 1/2", division:"1/2" };
    calfR.userData.puzzle = { radius: "0.055->0.035 Block 1/2" };
    
    const footL=mk('Foot.L_V35_5_Block_0.088', new THREE.Vector3(0, -0.08, 0.04), calfL);
    const footR=mk('Foot.R_V35_5_Block_0.088', new THREE.Vector3(0, -0.08, 0.04), calfR);
    footL.userData.puzzle = { offset:0.088, technique:"Block 1/2 foot" };

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
export const LAIA_V35_5_BLOCK_THEORY = LAIA_ACTOR_BRAIN;
export const LAIA_V35_4_SOLO_PIERNAS = LAIA_ACTOR_BRAIN;
export const LAIA_V35_3_BALANCE_FINAL = LAIA_ACTOR_BRAIN;
export const LAIA_V35_2_FINAL_FIX_RGB = LAIA_ACTOR_BRAIN;
export const LAIA_V35_PUZZLE_GANADORA = LAIA_ACTOR_BRAIN;