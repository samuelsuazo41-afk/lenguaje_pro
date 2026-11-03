// actor/laia_actor_brain.js - V35.7 SOLDADA REAL - CINTURA 0.28 INTACTA + COSTURA 48 COLS + BEZIER GLUTI 0.112
// BASE: V35.5 + FIX: V35.7 hologram 48 cols soldades + bezier gluti

export const LAIA_ACTOR_BRAIN = {
  version: "V35.7 SOLDADA REAL - Head 1/3 + Body 1/2 + Cintura 0.28 INTACTA + Costura 48cols 0.088/0.112 Bezier Gluti",

  createLaiaSkeleton(THREE, group){
    const bones=[]; 
    const mk=(n,p,par)=>{ const b=new THREE.Bone(); b.name=n; b.position.copy(p); par.add(b); bones.push(b); return b; };
    
    const hips=mk('Hips_V35_7_Soldada_48cols_Cintura0.28_0.088_0.112_Bezier', new THREE.Vector3(0,0,0), group);
    hips.userData.puzzle = { 
      waist: 0.28, 
      head:"1/3", 
      torso:"1/3", 
      legs:"1/2", 
      technique:"Block Theory Asaro + Bezier Gluti", 
      hipOffset:"±0.088", 
      radiusCostura:"0.095->0.112 gluti", 
      cols:"48 soldades",
      fix:"V35.5->V35.7: 32cols->48cols soldada real + bezier 0.13->0.11->-0.07" 
    };

    const spineLow=mk('Spine_00_Lower_V35_7_Block_Waist0.28_Intacta', new THREE.Vector3(0,0.08,0), hips);
    spineLow.userData.puzzle = { waist: 0.28, note:"INTACTA NO TOCAR - Block 1/3 - 52x48" };
    
    const spine=mk('Spine_02_Block_1/3_V35_7_Waist0.28', new THREE.Vector3(0,0.08,0), spineLow);
    const chest=mk('Chest_V35_7_Block_1/3_Torso', new THREE.Vector3(0,0.24,0), spine);
    const head=mk('Head_Bone_V35_7_Block_1/3_36x24', new THREE.Vector3(0,0.20,0), chest);
    head.userData.puzzle = { technique:"Different Angles Head Theory 1/3 + 1/2 lateral", rows:36, cols:24, division:"1/3 top/mid/bottom" };

    const shoulderL=mk('Shoulder.L_V35_7_Block_1/2', new THREE.Vector3(-0.24,0.16,0), chest);
    const shoulderR=mk('Shoulder.R_V35_7_Block_1/2', new THREE.Vector3(0.24,0.16,0), chest);
    const elbowL=mk('Elbow.L_V35_7_Block_1/2', new THREE.Vector3(-0.38,0,0), shoulderL);
    const elbowR=mk('Elbow.R_V35_7_Block_1/2', new THREE.Vector3(0.38,0,0), shoulderR);
    const handL=mk('Hand.L_V35_7_Block_5Fingers', new THREE.Vector3(-0.38,0,0), elbowL);
    const handR=mk('Hand.R_V35_7_Block_5Fingers', new THREE.Vector3(0.38,0,0), elbowR);
    
    for(let i=0;i<5;i++){
      mk(`Finger.L.${i}_V35_7_Block`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handL);
      mk(`Finger.R.${i}_V35_7_Block`, new THREE.Vector3((i-2)*0.018, -0.05, 0), handR);
    }

    // V35.7 SOLDADA REAL - PIERNAS 0.088 / 0.095->0.112 GLUTI + 48 COLS
    const hipL=mk('Hip.L_V35_7_Soldada_48cols_0.088_0.112_Bezier_Gluti', new THREE.Vector3(-0.088, 0.13, 0), hips);
    const hipR=mk('Hip.R_V35_7_Soldada_48cols_0.088_0.112_Bezier_Gluti', new THREE.Vector3(0.088, 0.13, 0), hips);
    hipL.userData.puzzle = { 
      offset: -0.088, 
      radiusCostura: "0.095->0.112 gluti bezier", 
      radiusReal: "0.0819 cintura 0.28 -> 0.112 gluti",
      waist: 0.28,
      py: "0.13 bezier -> 0.11 -> -0.07",
      zScale: "0.60->0.90 posterior",
      cols: 48,
      technique: "Block 1/2 + Bezier 3 puntos + Smoothstep",
      note: "V35.5->V35.7: 32cols->48cols soldada a torso 52x48 + bezier gluti -0.02 control sella gap lateral 100%",
      fixPiernas: "juntas 0.088 empotradas dentro circulo azul cintura 0.28 + 48 cols soldadura vertice a vertice",
      fixGrosor: "engrosada gluti 0.095->0.112 calza posterior + zScale 0.72->0.90 volumen natural",
      curvaRosa: "bezier2(0.11, -0.02, -0.02) + sin(t)*0.025 curva rosa perfecta"
    };
    hipR.userData.puzzle = { offset: 0.088, radiusCostura: "0.095->0.112", waist: 0.28, py:"0.13 bezier", cols:48, fix: "48 cols soldada" };
    
    const kneeL=mk('Knee.L_V35_7_Block_1/2_0.055_AnguloNatural', new THREE.Vector3(0, -0.38, 0), hipL);
    const kneeR=mk('Knee.R_V35_7_Block_1/2_0.055_AnguloNatural', new THREE.Vector3(0, -0.38, 0), hipR);
    kneeL.userData.puzzle = { radius: 0.055, curve: "Block 1/2: 0.095->0.073->0.055 angulo natural pelvis->rodilla", division:"1/2" };
    kneeR.userData.puzzle = { radius: 0.055, division:"1/2" };
    
    const calfL=mk('Calf.L_V35_7_Block_1/2_0.035_Pantorrilla', new THREE.Vector3(0, -0.38, 0), kneeL);
    const calfR=mk('Calf.R_V35_7_Block_1/2_0.035_Pantorrilla', new THREE.Vector3(0, -0.38, 0), kneeR);
    calfL.userData.puzzle = { radius: "0.055->0.035 Block 1/2", division:"1/2" };
    calfR.userData.puzzle = { radius: "0.055->0.035 Block 1/2" };
    
    const footL=mk('Foot.L_V35_7_Block_0.088', new THREE.Vector3(0, -0.08, 0.04), calfL);
    const footR=mk('Foot.R_V35_7_Block_0.088', new THREE.Vector3(0, -0.08, 0.04), calfR);
    footL.userData.puzzle = { offset:0.088, technique:"Block 1/2 foot", cols:"48->32 transicio" };

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
      // V35.7 - Hip con curva gluti
      if(b.name.includes('Hip.L') || b.name.includes('Hip.R')) {
        b.rotation.x = Math.sin(t*0.3)*0.015; // balanceo natural
      }
    });
  }
};

export const LAIA_FINAL_ACTOR_BRAIN = LAIA_ACTOR_BRAIN;
export const LAIA_V35_7_SOLDADA_REAL = LAIA_ACTOR_BRAIN;
export const LAIA_V35_6_COSTURA_PERFECTA = LAIA_ACTOR_BRAIN;
export const LAIA_V35_5_BLOCK_THEORY = LAIA_ACTOR_BRAIN;
export const LAIA_V35_4_SOLO_PIERNAS = LAIA_ACTOR_BRAIN;
export const LAIA_V35_3_BALANCE_FINAL = LAIA_ACTOR_BRAIN;
export const LAIA_V35_2_FINAL_FIX_RGB = LAIA_ACTOR_BRAIN;
export const LAIA_V35_PUZZLE_GANADORA = LAIA_ACTOR_BRAIN;