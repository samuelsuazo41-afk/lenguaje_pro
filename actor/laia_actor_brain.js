// actor/laia_actor_brain.js - V35.3 BALANCE FINAL - CINTURA 0.28 + PIERNAS 0.065 FINAS
// ROJO: cintura 0.20 hilo muy estrecha -> 0.28 más ancha encaje perfecto
// AZUL: pierna 0.088 aún gruesa -> 0.065 fina natural + offset 0.12 cierra gap

export const LAIA_ACTOR_BRAIN = {
  version: "V35.3 BALANCE FINAL - ROJO cintura 0.28 menos estrecha + AZUL pierna 0.065 fina offset 0.12 gap cerrado",

  createLaiaSkeleton(THREE, group){
    const bones=[]; 
    const mk=(n,p,par)=>{ const b=new THREE.Bone(); b.name=n; b.position.copy(p); par.add(b); bones.push(b); return b; };
    
    const hips=mk('Hips_V35_3_Balance_RojoAzul_Cintura0.28_Pierna0.065', new THREE.Vector3(0,0,0), group);
    hips.userData.puzzle = { hipOffset: "±0.12", radius: 0.065, waist: 0.28, fixRojo: "0.20->0.28 menos hilo", fixAzul: "0.088->0.065 más fina" };

    const spineLow=mk('Spine_00_Lower_V35_3_Waist0.28', new THREE.Vector3(0,0.08,0), hips);
    spineLow.userData.puzzle = { waist: 0.28, curve: "0.50->0.28 smooth" };
    
    const spine=mk('Spine_02_ModuleB_V35_3_Waist0.28', new THREE.Vector3(0,0.08,0), spineLow);
    const chest=mk('Chest_V35_3_Torso360', new THREE.Vector3(0,0.24,0), spine);
    const head=mk('Head_Bone_V35_3_28x36', new THREE.Vector3(0,0.20,0), chest);

    const shoulderL=mk('Shoulder.L_V35_3', new THREE.Vector3(-0.24,0.16,0), chest);
    const shoulderR=mk('Shoulder.R_V35_3', new THREE.Vector3(0.24,0.16,0), chest);
    const elbowL=mk('Elbow.L_V35_3', new THREE.Vector3(-0.38,0,0), shoulderL);
    const elbowR=mk('Elbow.R_V35_3', new THREE.Vector3(0.38,0,0), shoulderR);
    const handL=mk('Hand.L_V35_3_5Fingers', new THREE.Vector3(-0.38,0,0), elbowL);
    const handR=mk('Hand.R_V35_3_5Fingers', new THREE.Vector3(0.38,0,0), elbowR);
    
    for(let i=0;i<5;i++){
      mk(`Finger.L.${i}_V35_3`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handL);
      mk(`Finger.R.${i}_V35_3`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handR);
    }

    // V35.3 BALANCE - ROJO + AZUL
    const hipL=mk('Hip.L_V35_3_Rojo0.28_Azul0.065_Offset0.12_Balance', new THREE.Vector3(-0.12, -0.05, 0), hips);
    const hipR=mk('Hip.R_V35_3_Rojo0.28_Azul0.065_Offset0.12_Balance', new THREE.Vector3(0.12, -0.05, 0), hips);
    hipL.userData.puzzle = { 
      offset: -0.12, 
      radius: 0.065, 
      waist: 0.28,
      fixRojo: "cintura 0.20 hilo -> 0.28 ancha encaja",
      fixAzul: "pierna 0.088 -> 0.065 fina + offset 0.095->0.12 cierra gap lateral",
      costura: "0.12+0.065=0.185 encaja con torso bottom 0.28*0.24=0.20 aprox"
    };
    hipR.userData.puzzle = { offset: 0.12, radius: 0.065, waist: 0.28, fixRojo: "0.28", fixAzul: "0.065 fina" };
    
    const kneeL=mk('Knee.L_V35_3_0.053_Fina_Natural', new THREE.Vector3(0, -0.38, 0), hipL);
    const kneeR=mk('Knee.R_V35_3_0.053_Fina_Natural', new THREE.Vector3(0, -0.38, 0), hipR);
    kneeL.userData.puzzle = { radius: 0.053, curve: "0.065->0.053 smooth sin pliegue azul" };
    kneeR.userData.puzzle = { radius: 0.053 };
    
    const calfL=mk('Calf.L_V35_3_0.035_MuyFina', new THREE.Vector3(0, -0.38, 0), kneeL);
    const calfR=mk('Calf.R_V35_3_0.035_MuyFina', new THREE.Vector3(0, -0.38, 0), kneeR);
    calfL.userData.puzzle = { radius: "0.053->0.035" };
    calfR.userData.puzzle = { radius: "0.053->0.035" };
    
    const footL=mk('Foot.L_V35_3_Offset0.12', new THREE.Vector3(0, -0.08, 0.04), calfL);
    const footR=mk('Foot.R_V35_3_Offset0.12', new THREE.Vector3(0, -0.08, 0.04), calfR);

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
export const LAIA_V35_3_BALANCE_FINAL = LAIA_ACTOR_BRAIN;
export const LAIA_V35_2_FINAL_FIX_RGB = LAIA_ACTOR_BRAIN;
export const LAIA_V35_PUZZLE_GANADORA = LAIA_ACTOR_BRAIN;