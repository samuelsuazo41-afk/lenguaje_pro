// actor/laia_actor_brain.js - V35.8 SOLDADA CUELLO-HOMBRO-BRAZO + AXILA - CINTURA 0.28 INTACTA + 48 COLS + BEZIER 0.112
// FIX V35.7: cuello separado 24 cols -> cuello 48 cols soldado + hombro 0.24->0.285 + axila line + torso 52->62 rows

export const LAIA_ACTOR_BRAIN = {
  version: "V35.8 SOLDADA CUELLO-HOMBRO-BRAZO + AXILA - Head 1/3 + Torso 62x48 Unificado + Cintura 0.28 + Costura 48cols 0.088/0.112 Bezier + Hombro 0.285",

  createLaiaSkeleton(THREE, group){
    const bones=[]; 
    const mk=(n,p,par)=>{ const b=new THREE.Bone(); b.name=n; b.position.copy(p); par.add(b); bones.push(b); return b; };
    
    const hips=mk('Hips_V35_8_CuelloHombroBrazo_Soldado_62x48_Cintura0.28_0.285_0.088_0.112', new THREE.Vector3(0,0,0), group);
    hips.userData.puzzle = { 
      waist: 0.28, 
      torso:"62x48 unificado cuello+hombro+torso una sola malla - quita campana azul",
      head:"1/3", 
      legs:"1/2", 
      technique:"Block Theory + Bezier Gluti + Hombro Soldado + Axila Line", 
      hipOffset:"±0.088", 
      shoulderSurface:"0.285",
      radiusCostura:"0.095->0.112 gluti", 
      cols:"48 cuello + 48 torso + 48 costura soldades",
      fix:"V35.7->V35.8: 52x48 + 14x24 separado -> 62x48 unificado + shoulder 0.24->0.285 + axila dip 0.035" 
    };

    const spineLow=mk('Spine_00_Lower_V35_8_Block_Waist0.28_Intacta', new THREE.Vector3(0,0.08,0), hips);
    spineLow.userData.puzzle = { waist: 0.28, note:"INTACTA NO TOCAR - 62x48 unificado" };
    
    const spine=mk('Spine_02_Block_1/3_V35_8_Waist0.28', new THREE.Vector3(0,0.08,0), spineLow);
    const chest=mk('Chest_V35_8_Torso62x48_Unificado_CuelloHombro', new THREE.Vector3(0,0.24,0), spine);
    chest.userData.puzzle = { rows:62, cols:48, technique:"cuello+hombro+torso una sola malla", py:"0.99->0.13", waist:0.28, fix:"quita campana azul" };
    
    // CUELLO SOLDADO - 48 COLS - NACE DE TORSO 62x48 - NO SEPARADO
    const neck=mk('Neck_V35_8_Soldado_48cols_0.065_0.99_0.73_Bezier', new THREE.Vector3(0,0.32,0), chest);
    neck.userData.puzzle = { 
      technique:"Cuello 48 cols soldado a torso 62x48 - una sola malla", 
      py:"0.99->0.73 bezier2(0.99,0.86,0.73)", 
      radius:"0.065 equiv 0.22 wc -> 0.82", 
      cols:48,
      fix:"V35.7 campana azul: torso 0.73 + cuello 0.73 24cols separados -> V35.8 62x48 unificado sin gap"
    };
    
    const head=mk('Head_Bone_V35_8_Block_1/3_28x24_Sobre_Cuello_Soldado', new THREE.Vector3(0,0.20,0), neck);
    head.userData.puzzle = { technique:"Head 1/3 sobre cuello soldado 0.99", rows:28, cols:24, y:"0.99+0.18" };

    // HOMBROS SOLDADOS - 0.285 SUPERFICIE TORSO + LINEA AXILA
    const shoulderL=mk('Shoulder.L_V35_8_Soldado_0.285_Protuberancia_Axila_Line', new THREE.Vector3(-0.285,0.16,0), chest);
    const shoulderR=mk('Shoulder.R_V35_8_Soldado_0.285_Protuberancia_Axila_Line', new THREE.Vector3(0.285,0.16,0), chest);
    shoulderL.userData.puzzle = { 
      offset:-0.285, 
      surface:"0.285 protuberancia hombro torso 62x48", 
      bulge:0.065, 
      axila:"linea dip 0.035 bezier",
      cols:48,
      technique:"brazo soldado sin gap - root sobre superficie torso",
      fix:"V35.7 0.24 flotando -> V35.8 0.285 soldado + axila dip 0.22-0.38"
    };
    shoulderR.userData.puzzle = { offset:0.285, surface:"0.285", axila:"dip 0.035" };
    
    const elbowL=mk('Elbow.L_V35_8_Soldado', new THREE.Vector3(-0.38,0,0), shoulderL);
    const elbowR=mk('Elbow.R_V35_8_Soldado', new THREE.Vector3(0.38,0,0), shoulderR);
    const handL=mk('Hand.L_V35_8_Soldado_5Fingers', new THREE.Vector3(-0.38,0,0), elbowL);
    const handR=mk('Hand.R_V35_8_Soldado_5Fingers', new THREE.Vector3(0.38,0,0), elbowR);
    
    for(let i=0;i<5;i++){
      mk(`Finger.L.${i}_V35_8_Soldado`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handL);
      mk(`Finger.R.${i}_V35_8_Soldado`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handR);
    }

    // V35.8 PIERNAS 0.088 / 0.095->0.112 BEZIER + 48 COLS INTACTAS
    const hipL=mk('Hip.L_V35_8_Soldada_48cols_0.088_0.112_Bezier_Gluti', new THREE.Vector3(-0.088, 0.13, 0), hips);
    const hipR=mk('Hip.R_V35_8_Soldada_48cols_0.088_0.112_Bezier_Gluti', new THREE.Vector3(0.088, 0.13, 0), hips);
    hipL.userData.puzzle = { 
      offset: -0.088, 
      radiusCostura: "0.095->0.112 gluti bezier", 
      radiusReal: "0.0819 cintura 0.28 -> 0.112 gluti",
      waist: 0.28,
      py: "0.13 bezier -> 0.11 -> -0.07",
      zScale: "0.60->0.90 posterior",
      cols: 48,
      technique: "Block 1/2 + Bezier 3 puntos + Smoothstep",
      note: "INTACTA V35.7->V35.8 - solo torso arriba tocado"
    };
    hipR.userData.puzzle = { offset: 0.088, radiusCostura: "0.095->0.112", waist: 0.28, py:"0.13 bezier", cols:48 };
    
    const kneeL=mk('Knee.L_V35_8_Block_1/2_0.055_AnguloNatural', new THREE.Vector3(0, -0.38, 0), hipL);
    const kneeR=mk('Knee.R_V35_8_Block_1/2_0.055_AnguloNatural', new THREE.Vector3(0, -0.38, 0), hipR);
    const calfL=mk('Calf.L_V35_8_Block_1/2_0.035_Pantorrilla', new THREE.Vector3(0, -0.38, 0), kneeL);
    const calfR=mk('Calf.R_V35_8_Block_1/2_0.035_Pantorrilla', new THREE.Vector3(0, -0.38, 0), kneeR);
    const footL=mk('Foot.L_V35_8_Block_0.088', new THREE.Vector3(0, -0.08, 0.04), calfL);
    const footR=mk('Foot.R_V35_8_Block_0.088', new THREE.Vector3(0, -0.08, 0.04), calfR);

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
      if(b.name.includes('Neck_V35_8')) { 
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
export const LAIA_V35_8_SOLDADA_CUELLO_HOMBRO_BRAZO = LAIA_ACTOR_BRAIN;
export const LAIA_V35_7_SOLDADA_REAL = LAIA_ACTOR_BRAIN;
export const LAIA_V35_6_COSTURA_PERFECTA = LAIA_ACTOR_BRAIN;
export const LAIA_V35_5_BLOCK_THEORY = LAIA_ACTOR_BRAIN;
export const LAIA_V35_4_SOLO_PIERNAS = LAIA_ACTOR_BRAIN;
export const LAIA_V35_3_BALANCE_FINAL = LAIA_ACTOR_BRAIN;
export const LAIA_V35_2_FINAL_FIX_RGB = LAIA_ACTOR_BRAIN;
export const LAIA_V35_PUZZLE_GANADORA = LAIA_ACTOR_BRAIN;