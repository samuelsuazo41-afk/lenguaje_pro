// actor/laia_actor_brain.js - V35.2 FINAL - FIX ROJO VERDE AZUL - PIERNAS FINAS NATURALES
// ROJO: pierna 0.1225 muy gorda vs cintura 0.20 -> ahora 0.088 fina costura perfecta 0.20
// VERDE: pliegue lateral por zScale*=0.25 -> quitado
// AZUL: pliegue rodilla por salto brusco radius -> curva suave natural

export const LAIA_ACTOR_BRAIN = {
  version: "V35.2 FINAL - FIX ROJO VERDE AZUL - PIERNAS FINAS NATURALES COSTURA PERFECTA - TORSO 360 CERRADO - Hips ±0.095 radius 0.088 waist 0.20",

  createLaiaSkeleton(THREE, group){
    const bones=[]; 
    const mk=(n,p,par)=>{ const b=new THREE.Bone(); b.name=n; b.position.copy(p); par.add(b); bones.push(b); return b; };
    
    // ROOT - FIX ROJO
    const hips=mk('Hips_V35_2_Fix_RGB_PiernasFinas_Torso360', new THREE.Vector3(0,0,0), group);
    hips.userData.puzzle = { tabs: "2 MALE UP", hipOffset: "±0.095", radius: 0.088, waist: 0.20, fixRojo: "0.1225->0.088 fina proporcional" };

    // MODULE B TORSO FULL 360° CERRADO SIN PINCH
    const spineLow=mk('Spine_00_Lower_Torso360Closed_V35_2', new THREE.Vector3(0,0.08,0), hips);
    spineLow.userData.puzzle = { type: "ModuleB TORSO", shape: "cylinder elliptical closed 360°", waist: 0.20 };
    
    const spine=mk('Spine_02_ModuleB_Torso360_V35_2', new THREE.Vector3(0,0.08,0), spineLow);
    spine.userData.puzzle = { waist: 0.20, curve: "0.40->0.20 smooth pow 1.4 sin hilo" };
    
    const chest=mk('Chest_ModuleB_Socket_Torso360_V35_2', new THREE.Vector3(0,0.24,0), spine);
    chest.userData.puzzle = { torso: "FULL 360° CLOSED" };

    const head=mk('Head_Bone_ModuleA_28x36_Full360_V35_2', new THREE.Vector3(0,0.20,0), chest);
    head.userData.puzzle = { neck: 0.065, full360: true };

    const shoulderL=mk('Shoulder.L_TPose_48m_V35_2', new THREE.Vector3(-0.24,0.16,0), chest);
    const shoulderR=mk('Shoulder.R_TPose_48m_V35_2', new THREE.Vector3(0.24,0.16,0), chest);

    const elbowL=mk('Elbow.L_V35_2', new THREE.Vector3(-0.38,0,0), shoulderL);
    const elbowR=mk('Elbow.R_V35_2', new THREE.Vector3(0.38,0,0), shoulderR);

    const handL=mk('Hand.L_ModuleE_5Fingers_V35_2', new THREE.Vector3(-0.38,0,0), elbowL);
    const handR=mk('Hand.R_ModuleE_5Fingers_V35_2', new THREE.Vector3(0.38,0,0), elbowR);
    
    for(let i=0;i<5;i++){
      mk(`Finger.L.${i}_V35_2`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handL);
      mk(`Finger.R.${i}_V35_2`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handR);
    }

    // MODULE C LOWER BODY - V35.2 FIX TUS 3 COLORES
    const hipL=mk('Hip.L_V35_2_Rojo_0.088_Fino_CosturaPerfecta_0.20', new THREE.Vector3(-0.095, -0.05, 0), hips);
    const hipR=mk('Hip.R_V35_2_Rojo_0.088_Fino_CosturaPerfecta_0.20', new THREE.Vector3(0.095, -0.05, 0), hips);
    hipL.userData.puzzle = { 
      offset: -0.095, 
      radius: 0.088, 
      fixRojo: "antes 0.1225 muy gorda vs waist 0.20, ahora 0.088 fina - costura 0.095+0.088=0.183 encaja 0.20",
      fixVerde: "quitado zScale*=0.25 pliegue lateral vertical",
      fixAzul: "curva suave 0.088->0.070->0.048 sin salto brusco rodilla",
      full360: true 
    };
    hipR.userData.puzzle = { 
      offset: 0.095, 
      radius: 0.088, 
      fixRojo: "0.1225->0.088 fina",
      fixVerde: "sin pliegue lateral",
      fixAzul: "rodilla natural sin pliegue horizontal",
      full360: true 
    };
    
    // FIX AZUL: rodilla natural sin pliegue - curva suave no escalón
    const kneeL=mk('Knee.L_V35_2_Azul_CurvaSuave_0.070_Natural', new THREE.Vector3(0, -0.38, 0), hipL);
    const kneeR=mk('Knee.R_V35_2_Azul_CurvaSuave_0.070_Natural', new THREE.Vector3(0, -0.38, 0), hipR);
    kneeL.userData.puzzle = { radius: 0.070, fixAzul: "antes salto 0.1225->0.0925 pliegue azul, ahora 0.070 curva suave" };
    kneeR.userData.puzzle = { radius: 0.070, fixAzul: "rodilla natural" };
    
    const calfL=mk('Calf.L_V35_2_Pantorrilla_0.048_Fina_Natural', new THREE.Vector3(0, -0.38, 0), kneeL);
    const calfR=mk('Calf.R_V35_2_Pantorrilla_0.048_Fina_Natural', new THREE.Vector3(0, -0.38, 0), kneeR);
    calfL.userData.puzzle = { radius: "0.070->0.048", curve: "smooth" };
    calfR.userData.puzzle = { radius: "0.070->0.048", curve: "smooth" };
    
    const footL=mk('Foot.L_V35_2', new THREE.Vector3(0, -0.08, 0.04), calfL);
    const footR=mk('Foot.R_V35_2', new THREE.Vector3(0, -0.08, 0.04), calfR);

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
      if(b.name.includes('Spine_02')) {
        b.rotation.x = Math.sin(t*0.6)*0.03;
      }
      if(b.name.includes('Head_Bone')) { 
        b.rotation.y = Math.sin(t*0.35)*0.12; 
        b.rotation.x = -0.04 + Math.sin(t*0.28)*0.03; 
      }
      if(b.name.includes('Shoulder.L')) b.rotation.z = -0.04 + Math.sin(t*0.45)*0.025;
      if(b.name.includes('Shoulder.R')) b.rotation.z = 0.04 - Math.sin(t*0.45)*0.025;
      if(b.name.includes('Hand.L') || b.name.includes('Hand.R')){
        b.rotation.x = Math.sin(t*0.6)*0.06;
      }
      if(b.name.includes('Finger')){
        b.rotation.x = Math.sin(t*0.8)*0.08;
      }
    });
  }
};

export const LAIA_FINAL_ACTOR_BRAIN = LAIA_ACTOR_BRAIN;
export const LAIA_V35_2_FINAL_FIX_RGB = LAIA_ACTOR_BRAIN;
export const LAIA_V35_1_PUZZLE_GANADORA_TORSO_360 = LAIA_ACTOR_BRAIN;
export const LAIA_V35_PUZZLE_GANADORA = LAIA_ACTOR_BRAIN;