// actor/laia_actor_brain.js - V38 SOLDADO CUELLO-HOMBRO - 0.28 INTACTA + 0.108
// FIX V37: bolsa = torso cupula wc 0.68 + bulge 0.015 + cuello 0.84 flotando sobre cupula + axila 0.05 forat -> V38: SOSTRE PLA 0.64 + cuello SOLDADO DENTRO 0.78->0.64 + wc MAX 0.55 + bulge 0 ELIMINADO + axila 0.02 suave

export const LAIA_ACTOR_BRAIN = {
  version: "V38 SOLDADO cuello 0.78->0.64 sostre pla + hombro 0.55 + brazo 0.60 + cadera 0.082 - Head 1/3 + Torso 72x64 + Cintura 0.28 + 0.082/0.108 Bezier",

  createLaiaSkeleton(THREE, group){
    const bones=[]; 
    const mk=(n,p,par)=>{ const b=new THREE.Bone(); b.name=n; b.position.copy(p); par.add(b); bones.push(b); return b; };
    
    const hips=mk('Hips_V38_Soldado_0.78_0.64_0.60_72x64_Cintura0.28_0.108', new THREE.Vector3(0,0,0), group);
    hips.userData.puzzle = { 
      waist: 0.28, 
      torso:"72x64 SOLDADO cuello+hombro+torso - una sola malla - sostre pla 0.64",
      head:"1/3", 
      legs:"1/2", 
      technique:"Soldado + Sostre Pla + Cuello Dentro + Axila Suave + Cadera Junta + Bezier Gluti", 
      hipOffset:"±0.082", 
      shoulderSurface:"0.14 DENTRO - soldado al sostre pla, no bolsa",
      shoulderY:"0.60 recta - linea naranja",
      axilaDip:"0.020 suave py-=dip*0.30",
      neck:"0.78 soldado dentro 0.78->0.64 - linea groga",
      hombroPlano:"wc MAX 0.55 bulge 0 ELIMINADO - NO 0.68 cupula",
      radiusCostura:"0.095->0.108 gluti", 
      cols:"64 torso soldado + 48 costura",
      fix:"V37->V38: cupula 0.68 + cuello 0.84 flotando -> sostre pla 0.64 + cuello 0.78 soldado dentro + cabeza hundida" 
    };

    const spineLow=mk('Spine_00_Lower_V38_Block_Waist0.28_Intacta', new THREE.Vector3(0,0.08,0), hips);
    spineLow.userData.puzzle = { waist: 0.28, note:"INTACTA NO TOCAR - 72x64 SOLDADO" };
    
    const spine=mk('Spine_02_Block_1/3_V38_Waist0.28', new THREE.Vector3(0,0.08,0), spineLow);
    const chest=mk('Chest_V38_Soldado_72x64_Plano_CuelloHombro', new THREE.Vector3(0,0.24,0), spine);
    chest.userData.puzzle = { rows:72, cols:64, technique:"cuello soldado + sostre pla + torso una sola malla SOLDADO", py:"0.78->0.13", waist:0.28, fix:"sostre pla 0.64 + wc max 0.55" };
    
    // CUELLO SOLDADO DENTRO - 0.78->0.64 - LINEA GROGA - RADIO 0.09
    const neck=mk('Neck_V38_Soldado_64cols_0.78_0.64_Dentro_Bezier', new THREE.Vector3(0,0.26,0), chest);
    neck.userData.puzzle = { 
      technique:"Cuello soldado 64 cols DENTRO de torso 72x64 SOLDADO - una sola malla, no tubo encima", 
      py:"0.78->0.64 bezier2(0.78,0.74,0.70) + soldadura 0.70->0.64", 
      radius:"0.09 soldado - base 0.28 wc", 
      cols:64,
      fix:"V37 0.84 flotando sobre cupula -> V38 0.78 soldado dentro hasta linea groga 0.64, cabeza hundida en 0.78"
    };
    
    const head=mk('Head_Bone_V38_Block_1/3_28x24_Hundida_0.78', new THREE.Vector3(0,0.18,0), neck);
    head.userData.puzzle = { technique:"Head 1/3 hundida sobre cuello soldado 0.78 - base 0.13 traga cuello", rows:28, cols:24, y:"0.78+0.18" };

    // HOMBROS SOLDADOS - DENTRO 0.14 - BULGE 0 ELIMINADO - COPIAN SOLDADO HOLOGRAM
    const shoulderL=mk('Shoulder.L_V38_Soldado_Dentro_0.14_Bulge_0_Axila_0.020', new THREE.Vector3(-0.14,0.18,0), chest);
    const shoulderR=mk('Shoulder.R_V38_Soldado_Dentro_0.14_Bulge_0_Axila_0.020', new THREE.Vector3(0.14,0.18,0), chest);
    shoulderL.userData.puzzle = { 
      offset:-0.14, 
      surface:"0.14 DENTRO soldado - sin bolsa", 
      bulge:"0 ELIMINADO - no cupula, sostre pla",
      y:"0.60 recta misma que brazo - linea naranja",
      axila:"dip 0.020 suave py-=dip*0.30 - no forat",
      deltoid:"0.045 soldado - no 0.055 bolsa",
      cols:64,
      technique:"brazo nace dentro hombro soldado - SOLDADO sin bolsa",
      fix:"V37 0.14 bulge 0.015 -> V38 0.14 bulge 0"
    };
    shoulderR.userData.puzzle = { offset:0.14, surface:"0.14 dentro soldado", y:"0.60 recta", axila:"dip 0.020 suave", bulge:0 };
    
    const elbowL=mk('Elbow.L_V38_Soldado', new THREE.Vector3(-0.38,0,0), shoulderL);
    const elbowR=mk('Elbow.R_V38_Soldado', new THREE.Vector3(0.38,0,0), shoulderR);
    const handL=mk('Hand.L_V38_Soldado_5Fingers', new THREE.Vector3(-0.38,0,0), elbowL);
    const handR=mk('Hand.R_V38_Soldado_5Fingers', new THREE.Vector3(-0.38,0,0), elbowR);
    
    for(let i=0;i<5;i++){
      mk(`Finger.L.${i}_V38_Soldado`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handL);
      mk(`Finger.R.${i}_V38_Soldado`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handR);
    }

    // V38 PIERNAS 0.082 / 0.095->0.108 BEZIER + 48 COLS - JUNTA, CIERRA FORAT
    const hipL=mk('Hip.L_V38_Soldada_48cols_0.082_0.108_Bezier_Gluti', new THREE.Vector3(-0.082, 0.13, 0), hips);
    const hipR=mk('Hip.R_V38_Soldada_48cols_0.082_0.108_Bezier_Gluti', new THREE.Vector3(0.082, 0.13, 0), hips);
    hipL.userData.puzzle = { 
      offset: -0.082, 
      radiusCostura: "0.095->0.108 gluti bezier", 
      radiusReal: "0.0819 cintura 0.28 -> 0.108 gluti",
      waist: 0.28,
      py: "0.13 bezier -> 0.11 -> -0.07",
      zScale: "0.60->0.90 posterior",
      cols: 48,
      technique: "Block 1/2 + Bezier 3 puntos + Smoothstep",
      note: "V37->V38 INTACTA: 0.082 junta, cierra forat abajo"
    };
    hipR.userData.puzzle = { offset: 0.082, radiusCostura: "0.095->0.108", waist: 0.28, py:"0.13 bezier", cols:48 };
    
    const kneeL=mk('Knee.L_V38_Block_1/2_0.055_AnguloNatural', new THREE.Vector3(0, -0.38, 0), hipL);
    const kneeR=mk('Knee.R_V38_Block_1/2_0.055_AnguloNatural', new THREE.Vector3(0, -0.38, 0), hipR);
    const calfL=mk('Calf.L_V38_Block_1/2_0.035_Pantorrilla', new THREE.Vector3(0, -0.38, 0), kneeL);
    const calfR=mk('Calf.R_V38_Block_1/2_0.035_Pantorrilla', new THREE.Vector3(0, -0.38, 0), kneeR);
    const footL=mk('Foot.L_V38_Block_0.082', new THREE.Vector3(0, -0.08, 0.04), calfL);
    const footR=mk('Foot.R_V38_Block_0.082', new THREE.Vector3(0, -0.08, 0.04), calfR);

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
      if(b.name.includes('Neck_V38')) { 
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
export const LAIA_V38_SOLDADO = LAIA_ACTOR_BRAIN;
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