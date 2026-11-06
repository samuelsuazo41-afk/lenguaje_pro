// actor/laia_actor_brain.js - V37 MOLDE PLANO - 0.28 INTACTA + 0.108
// FIX V36: bolsa hombro 0.95 + bulge 0.06 + deltoide 0.075 + cuello 0.92 flotando + axila colgando + cadera 0.088 separada -> V37: hombro PLANO 0.68 + bulge 0.015 + deltoide 0.055 + cuello BAJO 0.84->0.74 pegado + cabeza hundida 0.84 + axila CIERRA 0.05 + cadera 0.082 junta

export const LAIA_ACTOR_BRAIN = {
  version: "V37 MOLDE PLANO cuello 0.84 + hombro 0.68 plano + brazo 0.60 + cadera 0.082 - Head 1/3 + Torso 72x64 + Cintura 0.28 + 0.082/0.108 Bezier",

  createLaiaSkeleton(THREE, group){
    const bones=[]; 
    const mk=(n,p,par)=>{ const b=new THREE.Bone(); b.name=n; b.position.copy(p); par.add(b); bones.push(b); return b; };
    
    const hips=mk('Hips_V37_Molde_Plano_0.84_0.68_0.60_72x64_Cintura0.28_0.108', new THREE.Vector3(0,0,0), group);
    hips.userData.puzzle = { 
      waist: 0.28, 
      torso:"72x64 MOLDE PLANO cuello+hombro+torso - una sola malla",
      head:"1/3", 
      legs:"1/2", 
      technique:"Molde Plano + Cuello Bajo + Axila Cierra + Cadera Junta + Bezier Gluti", 
      hipOffset:"±0.082", 
      shoulderSurface:"0.14 DENTRO - plano, no bolsa",
      shoulderY:"0.60 recta - linea naranja",
      axilaDip:"0.050 cierra py-=dip*0.60",
      neck:"0.84 bajo pegado 0.84->0.74",
      hombroPlano:"wc 0.68 bulge 0.015 - NO 0.95 bolsa",
      radiusCostura:"0.095->0.108 gluti", 
      cols:"64 torso molde + 48 costura",
      fix:"V36->V37: bolsa 0.95 + cuello 0.92 -> plano 0.68 + cuello 0.84 pegado + cabeza hundida" 
    };

    const spineLow=mk('Spine_00_Lower_V37_Block_Waist0.28_Intacta', new THREE.Vector3(0,0.08,0), hips);
    spineLow.userData.puzzle = { waist: 0.28, note:"INTACTA NO TOCAR - 72x64 MOLDE PLANO" };
    
    const spine=mk('Spine_02_Block_1/3_V37_Waist0.28', new THREE.Vector3(0,0.08,0), spineLow);
    const chest=mk('Chest_V37_Molde_72x64_Plano_CuelloHombro', new THREE.Vector3(0,0.24,0), spine);
    chest.userData.puzzle = { rows:72, cols:64, technique:"cuello bajo + hombro plano + torso una sola malla MOLDE PLANO", py:"0.84->0.13", waist:0.28, fix:"hombro plano 0.68" };
    
    // CUELLO BAJO Y PEGADO - 0.84->0.74 - RADIO 0.09
    const neck=mk('Neck_V37_Bajo_64cols_0.84_0.74_Pegado_Bezier', new THREE.Vector3(0,0.28,0), chest);
    neck.userData.puzzle = { 
      technique:"Cuello bajo 64 cols pegado a torso 72x64 MOLDE PLANO - una sola malla", 
      py:"0.84->0.74 bezier2(0.84,0.79,0.74)", 
      radius:"0.09 bajo - base 0.34 wc", 
      cols:64,
      fix:"V36 0.92 flotando -> V37 0.84 bajo pegado, cabeza hundida en 0.84"
    };
    
    const head=mk('Head_Bone_V37_Block_1/3_28x24_Hundida_0.84', new THREE.Vector3(0,0.18,0), neck);
    head.userData.puzzle = { technique:"Head 1/3 hundida sobre cuello 0.84 - base 0.13 traga cuello", rows:28, cols:24, y:"0.84+0.18" };

    // HOMBROS MOLDE PLANO - DENTRO 0.14 - BULGE 0.015 - COPIAN MOLDE PLANO HOLOGRAM
    const shoulderL=mk('Shoulder.L_V37_Plano_Dentro_0.14_Bulge_0.015_Axila_0.050', new THREE.Vector3(-0.14,0.18,0), chest);
    const shoulderR=mk('Shoulder.R_V37_Plano_Dentro_0.14_Bulge_0.015_Axila_0.050', new THREE.Vector3(0.14,0.18,0), chest);
    shoulderL.userData.puzzle = { 
      offset:-0.14, 
      surface:"0.14 DENTRO plano - sin bolsa", 
      bulge:"0.015 plano - no 0.06 cupula",
      y:"0.60 recta misma que brazo - linea naranja",
      axila:"dip 0.050 cierra py-=dip*0.60 - curva taronja abajo",
      deltoid:"0.055 plano - no 0.075 bolsa",
      cols:64,
      technique:"brazo nace dentro hombro plano - MOLDE sin bolsa",
      fix:"V36 0.16 bulge 0.06 -> V37 0.14 bulge 0.015"
    };
    shoulderR.userData.puzzle = { offset:0.14, surface:"0.14 dentro plano", y:"0.60 recta", axila:"dip 0.050 cierra", bulge:0.015 };
    
    const elbowL=mk('Elbow.L_V37_Plano', new THREE.Vector3(-0.38,0,0), shoulderL);
    const elbowR=mk('Elbow.R_V37_Plano', new THREE.Vector3(0.38,0,0), shoulderR);
    const handL=mk('Hand.L_V37_Plano_5Fingers', new THREE.Vector3(-0.38,0,0), elbowL);
    const handR=mk('Hand.R_V37_Plano_5Fingers', new THREE.Vector3(-0.38,0,0), elbowR);
    
    for(let i=0;i<5;i++){
      mk(`Finger.L.${i}_V37_Plano`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handL);
      mk(`Finger.R.${i}_V37_Plano`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handR);
    }

    // V37 PIERNAS 0.082 / 0.095->0.108 BEZIER + 48 COLS - JUNTA, CIERRA FORAT
    const hipL=mk('Hip.L_V37_Soldada_48cols_0.082_0.108_Bezier_Gluti', new THREE.Vector3(-0.082, 0.13, 0), hips);
    const hipR=mk('Hip.R_V37_Soldada_48cols_0.082_0.108_Bezier_Gluti', new THREE.Vector3(0.082, 0.13, 0), hips);
    hipL.userData.puzzle = { 
      offset: -0.082, 
      radiusCostura: "0.095->0.108 gluti bezier", 
      radiusReal: "0.0819 cintura 0.28 -> 0.108 gluti",
      waist: 0.28,
      py: "0.13 bezier -> 0.11 -> -0.07",
      zScale: "0.60->0.90 posterior",
      cols: 48,
      technique: "Block 1/2 + Bezier 3 puntos + Smoothstep",
      note: "V36->V37: 0.088 separado -> 0.082 junta, cierra forat abajo rojo"
    };
    hipR.userData.puzzle = { offset: 0.082, radiusCostura: "0.095->0.108", waist: 0.28, py:"0.13 bezier", cols:48 };
    
    const kneeL=mk('Knee.L_V37_Block_1/2_0.055_AnguloNatural', new THREE.Vector3(0, -0.38, 0), hipL);
    const kneeR=mk('Knee.R_V37_Block_1/2_0.055_AnguloNatural', new THREE.Vector3(0, -0.38, 0), hipR);
    const calfL=mk('Calf.L_V37_Block_1/2_0.035_Pantorrilla', new THREE.Vector3(0, -0.38, 0), kneeL);
    const calfR=mk('Calf.R_V37_Block_1/2_0.035_Pantorrilla', new THREE.Vector3(0, -0.38, 0), kneeR);
    const footL=mk('Foot.L_V37_Block_0.082', new THREE.Vector3(0, -0.08, 0.04), calfL);
    const footR=mk('Foot.R_V37_Block_0.082', new THREE.Vector3(0, -0.08, 0.04), calfR);

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
      if(b.name.includes('Neck_V37')) { 
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
export const LAIA_V37_MOLDE = LAIA_ACTOR_BRAIN;
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