// actor/laia_actor_brain.js - V36 MOLDE TRAPECIO - 0.28 INTACTA + 0.112
// FIX V35.9: hombro pico pow3 0.085 en 0.58 + cuello trapecio 0.88 -> MOLDE ROIG: cuello recto 0.92->0.80 + trapecio diagonal 0.32->0.95 hasta 0.60 + axila diagonal + brazo -18deg

export const LAIA_ACTOR_BRAIN = {
  version: "V36 MOLDE TRAPECIO 0.92-0.80-0.60 + BRAZO -18deg - Head 1/3 + Torso 72x64 + Cintura 0.28 + 0.088/0.112 Bezier",

  createLaiaSkeleton(THREE, group){
    const bones=[]; 
    const mk=(n,p,par)=>{ const b=new THREE.Bone(); b.name=n; b.position.copy(p); par.add(b); bones.push(b); return b; };
    
    const hips=mk('Hips_V36_Molde_Trapecio_0.92_0.80_0.60_72x64_Cintura0.28_0.112', new THREE.Vector3(0,0,0), group);
    hips.userData.puzzle = { 
      waist: 0.28, 
      torso:"72x64 MOLDE cuello+trapecio+hombro+torso - una sola malla",
      head:"1/3", 
      legs:"1/2", 
      technique:"Molde trapecio + Cuello recto + Axila diagonal + Brazo -18deg + Bezier Gluti", 
      hipOffset:"±0.088", 
      shoulderSurface:"0.16 DENTRO - solapa trapecio",
      shoulderY:"0.62->0.58 pendiente -18deg",
      axilaDip:"0.038 diagonal py-=dip*0.45",
      neck:"0.92 recto 0.09 -> 0.80 base",
      trapecio:"diagonal 0.80->0.60 wc 0.32->0.95",
      lineaPecho:"0.60 horizontal",
      radiusCostura:"0.095->0.112 gluti", 
      cols:"64 torso molde + 48 costura",
      fix:"V35.9->V36: pico pow3 0.085 + cuello 0.88 trapecio -> cuello recto 0.92 + trapecio diagonal 0.60 + brazo -18deg" 
    };

    const spineLow=mk('Spine_00_Lower_V36_Block_Waist0.28_Intacta', new THREE.Vector3(0,0.08,0), hips);
    spineLow.userData.puzzle = { waist: 0.28, note:"INTACTA NO TOCAR - 72x64 MOLDE" };
    
    const spine=mk('Spine_02_Block_1/3_V36_Waist0.28', new THREE.Vector3(0,0.08,0), spineLow);
    const chest=mk('Chest_V36_Molde_72x64_Trapecio_CuelloHombro', new THREE.Vector3(0,0.24,0), spine);
    chest.userData.puzzle = { rows:72, cols:64, technique:"cuello+trapecio+hombro+torso una sola malla MOLDE", py:"0.92->0.13", waist:0.28, fix:"trapecio diagonal 0.80->0.60" };
    
    // CUELLO RECTO MOLDE ROIG - 0.92->0.80 - RADIO 0.09
    const neck=mk('Neck_V36_Rect_64cols_0.92_0.80_0.09_Bezier', new THREE.Vector3(0,0.30,0), chest);
    neck.userData.puzzle = { 
      technique:"Cuello recto 64 cols soldado a torso 72x64 MOLDE - una sola malla", 
      py:"0.92->0.80 bezier2(0.92,0.86,0.80)", 
      radius:"0.09 recto - base 0.32 wc", 
      cols:64,
      fix:"V35.9 trapecio 0.88->0.73 -> V36 recto 0.92->0.80, cabeza nace en 0.92"
    };
    
    const head=mk('Head_Bone_V36_Block_1/3_28x24_Sobre_Cuello_0.92', new THREE.Vector3(0,0.20,0), neck);
    head.userData.puzzle = { technique:"Head 1/3 sobre cuello recto 0.92", rows:28, cols:24, y:"0.92+0.18" };

    // HOMBROS MOLDE TRAPECIO - DENTRO 0.16 - PENDIENTE -18deg - COPIAN MOLDE HOLOGRAM
    const shoulderL=mk('Shoulder.L_V36_Molde_Trapecio_Dentro_0.16_Pendiente_-18deg_Axila_0.038', new THREE.Vector3(-0.16,0.18,0), chest);
    const shoulderR=mk('Shoulder.R_V36_Molde_Trapecio_Dentro_0.16_Pendiente_-18deg_Axila_0.038', new THREE.Vector3(0.16,0.18,0), chest);
    shoulderL.userData.puzzle = { 
      offset:-0.16, 
      surface:"0.16 DENTRO trapecio - solapa molde", 
      trapecio:"pow(abs(cosA),2)*0.06 suau - no pico pow3",
      y:"0.62->0.58 pendiente -18deg misma que trapecio",
      axila:"dip 0.038 diagonal py-=dip*0.45 - sigue linea roja",
      deltoid:"0.075 copia trapecio",
      cols:64,
      technique:"brazo nace dentro trapecio - MOLDE sin gap",
      fix:"V35.9 0.18 pico 0.58 -> V36 0.16 trapecio -18deg"
    };
    shoulderR.userData.puzzle = { offset:0.16, surface:"0.16 dentro", y:"0.62->0.58 -18deg", axila:"dip 0.038 diagonal", trapecio:"0.06 suau" };
    
    const elbowL=mk('Elbow.L_V36_Molde', new THREE.Vector3(-0.38,0,0), shoulderL);
    const elbowR=mk('Elbow.R_V36_Molde', new THREE.Vector3(0.38,0,0), shoulderR);
    const handL=mk('Hand.L_V36_Molde_5Fingers', new THREE.Vector3(-0.38,0,0), elbowL);
    const handR=mk('Hand.R_V36_Molde_5Fingers', new THREE.Vector3(-0.38,0,0), elbowR);
    
    for(let i=0;i<5;i++){
      mk(`Finger.L.${i}_V36_Molde`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handL);
      mk(`Finger.R.${i}_V36_Molde`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handR);
    }

    // V36 PIERNAS 0.088 / 0.095->0.112 BEZIER + 48 COLS INTACTAS
    const hipL=mk('Hip.L_V36_Soldada_48cols_0.088_0.112_Bezier_Gluti', new THREE.Vector3(-0.088, 0.13, 0), hips);
    const hipR=mk('Hip.R_V36_Soldada_48cols_0.088_0.112_Bezier_Gluti', new THREE.Vector3(0.088, 0.13, 0), hips);
    hipL.userData.puzzle = { 
      offset: -0.088, 
      radiusCostura: "0.095->0.112 gluti bezier", 
      radiusReal: "0.0819 cintura 0.28 -> 0.112 gluti",
      waist: 0.28,
      py: "0.13 bezier -> 0.11 -> -0.07",
      zScale: "0.60->0.90 posterior",
      cols: 48,
      technique: "Block 1/2 + Bezier 3 puntos + Smoothstep",
      note: "INTACTA V35.9->V36 - solo cuello-trapecio-hombro-brazo tocado"
    };
    hipR.userData.puzzle = { offset: 0.088, radiusCostura: "0.095->0.112", waist: 0.28, py:"0.13 bezier", cols:48 };
    
    const kneeL=mk('Knee.L_V36_Block_1/2_0.055_AnguloNatural', new THREE.Vector3(0, -0.38, 0), hipL);
    const kneeR=mk('Knee.R_V36_Block_1/2_0.055_AnguloNatural', new THREE.Vector3(0, -0.38, 0), hipR);
    const calfL=mk('Calf.L_V36_Block_1/2_0.035_Pantorrilla', new THREE.Vector3(0, -0.38, 0), kneeL);
    const calfR=mk('Calf.R_V36_Block_1/2_0.035_Pantorrilla', new THREE.Vector3(0, -0.38, 0), kneeR);
    const footL=mk('Foot.L_V36_Block_0.088', new THREE.Vector3(0, -0.08, 0.04), calfL);
    const footR=mk('Foot.R_V36_Block_0.088', new THREE.Vector3(0, -0.08, 0.04), calfR);

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
      if(b.name.includes('Neck_V36')) { 
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
export const LAIA_V36_MOLDE = LAIA_ACTOR_BRAIN;
export const LAIA_V35_9_UNIFICADO = LAIA_ACTOR_BRAIN;
export const LAIA_V35_8_SOLDADA_CUELLO_HOMBRO_BRAZO = LAIA_ACTOR_BRAIN;
export const LAIA_V35_7_SOLDADA_REAL = LAIA_ACTOR_BRAIN;
export const LAIA_V35_6_COSTURA_PERFECTA = LAIA_ACTOR_BRAIN;
export const LAIA_V35_5_BLOCK_THEORY = LAIA_ACTOR_BRAIN;
export const LAIA_V35_4_SOLO_PIERNAS = LAIA_ACTOR_BRAIN;
export const LAIA_V35_3_BALANCE_FINAL = LAIA_ACTOR_BRAIN;
export const LAIA_V35_2_FINAL_FIX_RGB = LAIA_ACTOR_BRAIN;
export const LAIA_V35_PUZZLE_GANADORA = LAIA_ACTOR_BRAIN;