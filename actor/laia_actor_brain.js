// actor/laia_actor_brain.js - V35.0 PUZZLE GANADORA - FULL 360° CON MANOS
// Basado en: Plantilla 1 V30.74 T-POSE 4 vistas + Plantilla 2 MODULAR A-E
// FIX: -0.095/+0.095 SIN ESCALON - SIN BLOQUE RAYADO - radius 0.1225 - waist 0.20 - neck 0.065 - FULL 360°

export const LAIA_ACTOR_BRAIN = {
  version: "V35.0 PUZZLE GANADORA - FULL 360° CON MANOS - Modular A-E - A HEAD+NECK 28x36 B TORSO+ARMS C WAIST-TO-FEET D ARMS E HANDS 5 FINGERS - Puzzle Macho/Hembra - Waist 0.20 - Hips ±0.095 radius 0.1225 circular match",

  createLaiaSkeleton(THREE, group){
    const bones=[]; 
    const mk=(n,p,par)=>{ const b=new THREE.Bone(); b.name=n; b.position.copy(p); par.add(b); bones.push(b); return b; };
    
    // ===== ROOT - PUZZLE SYSTEM - CIRCULAR MATCH 0.1225 =====
    // MODULE C LOWER BODY = cintura 0.20 hasta pies unificado
    const hips=mk('Hips_V35_Puzzle_Male_x2_Up', new THREE.Vector3(0,0,0), group);
    hips.userData.puzzle = { tabs: "2 MALE UP", connectsTo: "ModuleB", hipOffset: "±0.095", radius: 0.1225, waist: 0.20 };

    // MODULE B TORSO+ARMS - puzzle sockets female x2 down
    const spine=mk('Spine_02_ModuleB_TorsoArms', new THREE.Vector3(0,0.16,0), hips);
    const chest=mk('Chest_ModuleB_Socket_Female_Up_For_A', new THREE.Vector3(0,0.24,0), spine);
    chest.userData.puzzle = { sockets: "1 FEMALE UP for ModuleA HEAD+NECK, 2 FEMALE DOWN for ModuleC" };

    // MODULE A HEAD+NECK - 28x36 sphere + cuello 0.065 - tab male down - FULL 360°
    const head=mk('Head_Bone_ModuleA_HeadNeck_28x36_Full360', new THREE.Vector3(0,0.20,0), chest);
    head.userData.puzzle = { tab: "MALE DOWN", connectsTo: "ModuleB", diameter: "28x36", neck: 0.065, full360: true };

    // ===== MODULE B ARMS T-POSE 90° - 0.48m ancho - FULL 360° - tu bug era media malla =====
    const shoulderL=mk('Shoulder.L_ModuleB_TPose_48m_Full360', new THREE.Vector3(-0.24,0.16,0), chest);
    const shoulderR=mk('Shoulder.R_ModuleB_TPose_48m_Full360', new THREE.Vector3(0.24,0.16,0), chest);
    shoulderL.userData.puzzle = { socket: "FEMALE SHOULDER", arm: "ModuleD Upper" };
    shoulderR.userData.puzzle = { socket: "FEMALE SHOULDER", arm: "ModuleD Upper" };

    // MODULE D ARMS DETAIL - upper + lower con puzzle
    const elbowL=mk('Elbow.L_ModuleD_Upper_Lower_Puzzle', new THREE.Vector3(-0.38,0,0), shoulderL);
    const elbowR=mk('Elbow.R_ModuleD_Upper_Lower_Puzzle', new THREE.Vector3(0.38,0,0), shoulderR);
    elbowL.userData.puzzle = { socket: "FEMALE ELBOW", tab: "MALE WRIST" };
    elbowR.userData.puzzle = { socket: "FEMALE ELBOW", tab: "MALE WRIST" };

    // MODULE E HANDS - 5 FINGERS - PUZZLE SOCKET FEMALE WRIST - ANTES FALTABAN
    const handL=mk('Hand.L_ModuleE_5Fingers_Socket_Female_Wrist_Full360', new THREE.Vector3(-0.38,0,0), elbowL);
    const handR=mk('Hand.R_ModuleE_5Fingers_Socket_Female_Wrist_Full360', new THREE.Vector3(0.38,0,0), elbowR);
    handL.userData.puzzle = { type: "ModuleE HANDS", fingers: 5, socket: "FEMALE WRIST", connectsTo: "LowerArm Male", full360: true };
    handR.userData.puzzle = { type: "ModuleE HANDS", fingers: 5, socket: "FEMALE WRIST", connectsTo: "LowerArm Male", full360: true };
    
    // DEDOS - 5 dedos wireframe full 360°
    for(let i=0;i<5;i++){
      const fL=mk(`Finger.L.${i}_ModuleE_Full360`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handL);
      const fR=mk(`Finger.R.${i}_ModuleE_Full360`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handR);
      fL.userData.puzzle = { finger: i, parent: "ModuleE" };
      fR.userData.puzzle = { finger: i, parent: "ModuleE" };
    }

    // ===== MODULE C LOWER BODY - WAIST 0.20 TO FEET UNIFICADO - SIN ESCALON SIN BLOQUE RAYADO =====
    // FIX V35: 2 piernas separadas limpias - -0.095/+0.095 circular match 0.1225 - FULL 360° - no media malla
    // Antes V34.3 tenía exp bulto y bloque rayado, ahora gap 0.19 limpio
    const hipL=mk('Hip.L_ModuleC_WaistToFeet_Unified_Minus_0.095_Full360', new THREE.Vector3(-0.095, -0.05, 0), hips);
    const hipR=mk('Hip.R_ModuleC_WaistToFeet_Unified_Plus_0.095_Full360', new THREE.Vector3(0.095, -0.05, 0), hips);
    hipL.userData.puzzle = { offset: -0.095, radius: 0.1225, circularMatch: true, full360: true, note: "SIN ESCALON - SIN BLOQUE RAYADO" };
    hipR.userData.puzzle = { offset: 0.095, radius: 0.1225, circularMatch: true, full360: true, note: "SIN ESCALON - SIN BLOQUE RAYADO" };
    
    const kneeL=mk('Knee.L_ModuleC_Full360', new THREE.Vector3(0, -0.38, 0), hipL);
    const kneeR=mk('Knee.R_ModuleC_Full360', new THREE.Vector3(0, -0.38, 0), hipR);
    
    const calfL=mk('Calf.L_ModuleC_Full360', new THREE.Vector3(0, -0.38, 0), kneeL);
    const calfR=mk('Calf.R_ModuleC_Full360', new THREE.Vector3(0, -0.38, 0), kneeR);
    
    const footL=mk('Foot.L_ModuleC_Full360', new THREE.Vector3(0, -0.08, 0.04), calfL);
    const footR=mk('Foot.R_ModuleC_Full360', new THREE.Vector3(0, -0.08, 0.04), calfR);

    return {bones, hips, spine, chest, head, hipL, hipR, handL, handR};
  },

  thinkAndMove(bones, ctx){
    if(!bones || !bones.length) return;
    const t=Date.now()*0.001;
    bones.forEach(b=>{
      if(b.name.includes('Spine')) b.rotation.x = Math.sin(t*0.6)*0.03;
      if(b.name.includes('Head_Bone_ModuleA')) { 
        b.rotation.y = Math.sin(t*0.35)*0.12; 
        b.rotation.x = -0.04 + Math.sin(t*0.28)*0.03; 
      }
      // brazos T-POSE suave
      if(b.name.includes('Shoulder.L_ModuleB')) b.rotation.z = -0.04 + Math.sin(t*0.45)*0.025;
      if(b.name.includes('Shoulder.R_ModuleB')) b.rotation.z = 0.04 - Math.sin(t*0.45)*0.025;
      // manos con articulación puzzle
      if(b.name.includes('Hand.L_ModuleE') || b.name.includes('Hand.R_ModuleE')){
        b.rotation.x = Math.sin(t*0.6)*0.06;
      }
      // dedos
      if(b.name.includes('Finger')){
        b.rotation.x = Math.sin(t*0.8)*0.08;
      }
    });
  }
};

export const LAIA_FINAL_ACTOR_BRAIN = LAIA_ACTOR_BRAIN;
export const LAIA_V35_PUZZLE_GANADORA = LAIA_ACTOR_BRAIN;