// actor/laia_actor_brain.js - V35.9 UNIFICADO HOMBRO-AXILA-BRAZO + CUELLO TRAPECIO - 0.28 INTACTA + 0.112
// FIX V35.8: hombro 0.285 en 0.68 flotando vs brazo 0.58 -> hombro DENTRO 0.18 en 0.58 + cuello 0.99 tubo -> 0.88 trapecio

export const LAIA_ACTOR_BRAIN = {
  version: "V35.9 UNIFICADO HOMBRO-AXILA-BRAZO 0.18-0.58 + CUELLO 0.88 TRAPECIO - Head 1/3 + Torso 62x48 + Cintura 0.28 + 0.088/0.112 Bezier",

  createLaiaSkeleton(THREE, group){
    const bones=[]; 
    const mk=(n,p,par)=>{ const b=new THREE.Bone(); b.name=n; b.position.copy(p); par.add(b); bones.push(b); return b; };
    
    const hips=mk('Hips_V35_9_Unificado_0.18_0.58_Cuello0.88_62x48_Cintura0.28_0.112', new THREE.Vector3(0,0,0), group);
    hips.userData.puzzle = { 
      waist: 0.28, 
      torso:"62x48 unificado cuello+hombro+torso - hombro centrado 0.58",
      head:"1/3", 
      legs:"1/2", 
      technique:"Hombro-Axila-Brazo unificado + Cuello trapecio + Bezier Gluti", 
      hipOffset:"±0.088", 
      shoulderSurface:"0.18 DENTRO - solapa 0.14",
      shoulderY:"0.58 misma que brazo",
      axilaDip:"0.045 sigue curva pico",
      neck:"0.88 trapecio 0.095->0.055",
      radiusCostura:"0.095->0.112 gluti", 
      cols:"48 cuello + 48 torso + 48 costura",
      fix:"V35.8->V35.9: shoulder 0.285 fuera en 0.68 -> 0.18 dentro en 0.58 + cuello 0.99 tubo -> 0.88 trapecio" 
    };

    const spineLow=mk('Spine_00_Lower_V35_9_Block_Waist0.28_Intacta', new THREE.Vector3(0,0.08,0), hips);
    spineLow.userData.puzzle = { waist: 0.28, note:"INTACTA NO TOCAR - 62x48 unificado" };
    
    const spine=mk('Spine_02_Block_1/3_V35_9_Waist0.28', new THREE.Vector3(0,0.08,0), spineLow);
    const chest=mk('Chest_V35_9_Torso62x48_Unificado_CuelloHombro', new THREE.Vector3(0,0.24,0), spine);
    chest.userData.puzzle = { rows:62, cols:48, technique:"cuello+hombro+torso una sola malla + hombro pico 0.085 en 0.58", py:"0.88->0.13", waist:0.28, fix:"hombro centrado 0.58" };
    
    // CUELLO TRAPECIO - 0.88 NO 0.99 - BASE ANCHA 0.095 -> CIMA 0.055
    const neck=mk('Neck_V35_9_Trapecio_48cols_0.88_0.73_Bezier', new THREE.Vector3(0,0.28,0), chest);
    neck.userData.puzzle = { 
      technique:"Cuello trapecio 48 cols soldado a torso 62x48 - una sola malla", 
      py:"0.88->0.73 bezier2(0.88,0.80,0.73)", 
      radius:"base 0.095 -> cima 0.055 - trapecio, no tubo 0.065", 
      cols:48,
      fix:"V35.8 tubo 0.99->0.73 -> V35.9 trapecio 0.88->0.73, cabeza nace en 0.88 sin tubo"
    };
    
    const head=mk('Head_Bone_V35_9_Block_1/3_28x24_Sobre_Cuello_0.88', new THREE.Vector3(0,0.20,0), neck);
    head.userData.puzzle = { technique:"Head 1/3 sobre cuello trapecio 0.88", rows:28, cols:24, y:"0.88+0.18" };

    // HOMBROS UNIFICADOS - DENTRO 0.18 EN 0.58 - COPIAN PICO DEL HOLOGRAM
    const shoulderL=mk('Shoulder.L_V35_9_Unificado_Dentro_0.18_Pico_0.58_Axila_0.045', new THREE.Vector3(-0.18,0.16,0), chest);
    const shoulderR=mk('Shoulder.R_V35_9_Unificado_Dentro_0.18_Pico_0.58_Axila_0.045', new THREE.Vector3(0.18,0.16,0), chest);
    shoulderL.userData.puzzle = { 
      offset:-0.18, 
      surface:"0.18 DENTRO torso - solapa 0.14, no fuera", 
      pico:0.085,
      picoShape:"pow(abs(cosA),3) * 0.085",
      y:"0.58 misma Y que brazo - antes 0.68 gap",
      axila:"dip 0.045 sigue curva pico, no corte recto",
      deltoid:"0.075 copia pico hombro",
      cols:48,
      technique:"brazo nace dentro torso - unificado sin gap",
      fix:"V35.8 0.285 fuera en 0.68 -> V35.9 0.18 dentro en 0.58"
    };
    shoulderR.userData.puzzle = { offset:0.18, surface:"0.18 dentro", y:"0.58", axila:"dip 0.045", pico:0.085 };
    
    const elbowL=mk('Elbow.L_V35_9_Unificado', new THREE.Vector3(-0.38,0,0), shoulderL);
    const elbowR=mk('Elbow.R_V35_9_Unificado', new THREE.Vector3(0.38,0,0), shoulderR);
    const handL=mk('Hand.L_V35_9_Unificado_5Fingers', new THREE.Vector3(-0.38,0,0), elbowL);
    const handR=mk('Hand.R_V35_9_Unificado_5Fingers', new THREE.Vector3(-0.38,0,0), elbowR);
    
    for(let i=0;i<5;i++){
      mk(`Finger.L.${i}_V35_9_Unificado`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handL);
      mk(`Finger.R.${i}_V35_9_Unificado`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handR);
    }

    // V35.9 PIERNAS 0.088 / 0.095->0.112 BEZIER + 48 COLS INTACTAS
    const hipL=mk('Hip.L_V35_9_Soldada_48cols_0.088_0.112_Bezier_Gluti', new THREE.Vector3(-0.088, 0.13, 0), hips);
    const hipR=mk('Hip.R_V35_9_Soldada_48cols_0.088_0.112_Bezier_Gluti', new THREE.Vector3(0.088, 0.13, 0), hips);
    hipL.userData.puzzle = { 
      offset: -0.088, 
      radiusCostura: "0.095->0.112 gluti bezier", 
      radiusReal: "0.0819 cintura 0.28 -> 0.112 gluti",
      waist: 0.28,
      py: "0.13 bezier -> 0.11 -> -0.07",
      zScale: "0.60->0.90 posterior",
      cols: 48,
      technique: "Block 1/2 + Bezier 3 puntos + Smoothstep",
      note: "INTACTA V35.8->V35.9 - solo cuello-hombro-brazo tocado"
    };
    hipR.userData.puzzle = { offset: 0.088, radiusCostura: "0.095->0.112", waist: 0.28, py:"0.13 bezier", cols:48 };
    
    const kneeL=mk('Knee.L_V35_9_Block_1/2_0.055_AnguloNatural', new THREE.Vector3(0, -0.38, 0), hipL);
    const kneeR=mk('Knee.R_V35_9_Block_1/2_0.055_AnguloNatural', new THREE.Vector3(0, -0.38, 0), hipR);
    const calfL=mk('Calf.L_V35_9_Block_1/2_0.035_Pantorrilla', new THREE.Vector3(0, -0.38, 0), kneeL);
    const calfR=mk('Calf.R_V35_9_Block_1/2_0.035_Pantorrilla', new THREE.Vector3(0, -0.38, 0), kneeR);
    const footL=mk('Foot.L_V35_9_Block_0.088', new THREE.Vector3(0, -0.08, 0.04), calfL);
    const footR=mk('Foot.R_V35_9_Block_0.088', new THREE.Vector3(0, -0.08, 0.04), calfR);

    return {bones, hips, spine, chest, neck, head, hipL, hipR, handL, handR, shoulderL, shoulderR};
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
      if(b.name.includes('Neck_V35_9')) { 
        b.rotation.y = Math.sin(t*0.35)*0.08; 
        b.rotation.x = -0.02 + Math.sin(t*0.28)*0.02;
      }
      if(b.name.includes('Head_Bone')) { b.rotation.y = Math.sin(t*0.35)*0.12; b.rotation.x = -0.04 + Math.sin(t*0.28)*0.03; }
      if(b.name.includes('Shoulder.L')) b.rotation.z = -0.04 + Math.sin(t*0.45)*0.025;
      if(b.name.includes('Shoulder.R')) b.rotation.z = 0.04 - Math.sin(t*0.45)*0.025;
      if(b.name.includes('Hand')) b.rotation.x = Math.sin(t*0.6)*0.06;
      if(b.name.includes('Finger')) b.rotation.x = Math.sin(t*0.8)*0.08;
      if(b.name.includes('Hip.L') || b.name.includes('Hip.R')) {
        b.rotation.x = Math.sin(t*0.3)*0.015;
      }
    });
  }
};

export const LAIA_FINAL_ACTOR_BRAIN = LAIA_ACTOR_BRAIN;
export const LAIA_V35_9_UNIFICADO = LAIA_ACTOR_BRAIN;
export const LAIA_V35_8_SOLDADA_CUELLO_HOMBRO_BRAZO = LAIA_ACTOR_BRAIN;
export const LAIA_V35_7_SOLDADA_REAL = LAIA_ACTOR_BRAIN;
export const LAIA_V35_6_COSTURA_PERFECTA = LAIA_ACTOR_BRAIN;
export const LAIA_V35_5_BLOCK_THEORY = LAIA_ACTOR_BRAIN;
export const LAIA_V35_4_SOLO_PIERNAS = LAIA_ACTOR_BRAIN;
export const LAIA_V35_3_BALANCE_FINAL = LAIA_ACTOR_BRAIN;
export const LAIA_V35_2_FINAL_FIX_RGB = LAIA_ACTOR_BRAIN;
export const LAIA_V35_PUZZLE_GANADORA = LAIA_ACTOR_BRAIN;