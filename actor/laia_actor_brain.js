// laia_actor_brain.js - V30.4 DEFINITIVO SKINNY GAP CLEAN - 3 MALLAS + POLOS REALES
// V30.0 -> V30.4: Fix hairball hombro + gap clean 0.11 + rodillas 5 loops circulo perfecto + scale 0.52/0.50
// Malla definitiva: Particle 0.012 + kNN 12 maxDistance 0.08 + gapClean true + quad denso rodillas 22 radiales 5 loops
// Autor: YARVIS + Laia - Girona - V30.4 DEFINITIVO

export const LAIA_BRAIN_CONFIG = {
  version: "30.4 DEFINITIVO SKINNY GAP CLEAN - 5 LOOPS RODILLA CIRCULO PERFECTO",
  hiddenSkeleton: false,
  skinnedMesh: true,
  skeleton: true,
  facialRig: true,
  topologicalFlow: true,
  poles: true,
  bones: 34,
  pointsCount: 3200,
  meshType: "SkinnedMesh_V30.4_GAP_CLEAN_0.11_WAIST_5_LOOPS_KNEES",
  breathBase: 1.1,
  meshOnly: false,
  feminine: true,
  waist: 0.11,
  waistFactor: 0.62,
  hips: 0.32,
  chest: 0.336,
  shoulders: 0.336,
  thigh_gap: 0.11,
  legSeparation: 0.134,
  scale: 0.52,
  mobileScale: 0.50,
  visemes: 6,
  visemeList: ['CLOSED','A','I','U','E','O'],
  particle: { size: 0.012, opacity: 0.92, color: "#00e5ff", sizeAttenuation: true, count: 3200 },
  lines: { type: "kNN_Particle_Flow_GAP_CLEAN", k: 12, maxDistanceSq: 0.08, opacity: 0.44, color: "#00e5ff", gapClean: true, shoulderFanLimit: 4 },
  quadDense: { zones: ["KNEES_5_LOOPS_22_RADIALES","FACE_RADIAL_8","FEET_5_CLUSTERS"], knees: "5_loops_22_radiales_circulo_perfecto", face: "radial_8", feet: "5_clusters" },
  flow: { origin: "Frontal_Pole_Forehead", sacral: "Sacro_Pole_Back", directionChangeWaist: "45deg", kneeDirection: "90deg_vertical_to_horizontal", termination: "5_toes_bifurcation", waistNarrow: 0.11 }
};

let MIND = { breath: 0, mood: 'curiosa', state: 'IDLE_CORTANA', talkAmp: 0, lastError: 0, pinPan: 0, viseme: 0, polePhase: 0 };

export function createLaiaSkeleton(THREE, group) {
  const bones = [];
  const mk = (name, pos, parent) => {
    const b = new THREE.Bone(); b.name = name; b.position.copy(pos); parent.add(b); bones.push(b); return b;
  };
  // HIERARCHY REAL V30.4 - GAP CLEAN 0.11
  const hips = mk('Hips', new THREE.Vector3(0,0,0), group);
  const spine02 = mk('Spine_02', new THREE.Vector3(0,0.18,0), hips);
  const chest = mk('Chest', new THREE.Vector3(0,0.22,0), spine02);
  const neck = mk('Neck', new THREE.Vector3(0,0.22,0), chest);
  const head = mk('Head_Bone', new THREE.Vector3(0,0.18,0), neck);
  
  const frontalPole = mk('Frontal_Pole', new THREE.Vector3(0,0.04,0.09), head);
  
  // FACIAL RIG V30.4 - mapeado foto definitiva
  const eyeL = mk('Eye_L', new THREE.Vector3(-0.032,0.02,0.082), head);
  const irisL = mk('Iris_L', new THREE.Vector3(0,0,0.015), eyeL);
  const eyeR = mk('Eye_R', new THREE.Vector3(0.032,0.02,0.082), head);
  const irisR = mk('Iris_R', new THREE.Vector3(0,0,0.015), eyeR);
  const mouth = mk('Mouth', new THREE.Vector3(0,-0.035,0.088), head);
  const jaw = mk('Jaw', new THREE.Vector3(0,-0.01,0), mouth);

  const shoulderL = mk('Shoulder.L', new THREE.Vector3(-0.22,0.15,0), chest);
  const elbowL = mk('Elbow.L', new THREE.Vector3(-0.32,0,0), shoulderL);
  const wristL = mk('Wrist.L', new THREE.Vector3(-0.32,0,0), elbowL);
  const handL = mk('Hand.L', new THREE.Vector3(-0.08,0,0), wristL);
  
  const shoulderR = mk('Shoulder.R', new THREE.Vector3(0.22,0.15,0), chest);
  const elbowR = mk('Elbow.R', new THREE.Vector3(0.32,0,0), shoulderR);
  const wristR = mk('Wrist.R', new THREE.Vector3(0.32,0,0), elbowR);
  const handR = mk('Hand.R', new THREE.Vector3(0.08,0,0), wristR);

  const sacralPole = mk('Sacral_Pole', new THREE.Vector3(0,-0.02,-0.04), hips);

  // V30.4 GAP CLEAN - separación 0.134 = gap 0.11 real + diametro muslo
  const hipL = mk('Hip.L', new THREE.Vector3(-0.067,-0.18,0), hips);
  const kneeL = mk('Knee.L', new THREE.Vector3(0,-0.38,0), hipL);
  const ankleL = mk('Ankle.L', new THREE.Vector3(0,-0.38,0), kneeL);
  const toeL = mk('Toe.L', new THREE.Vector3(0,-0.04,0.08), ankleL);
  
  const hipR = mk('Hip.R', new THREE.Vector3(0.067,-0.18,0), hips);
  const kneeR = mk('Knee.R', new THREE.Vector3(0,-0.38,0), hipR);
  const ankleR = mk('Ankle.R', new THREE.Vector3(0,-0.38,0), kneeR);
  const toeR = mk('Toe.R', new THREE.Vector3(0,-0.04,0.08), ankleR);

  // NODOS INTERRUPCIÓN - donde mueren líneas blazer
  const btnNode1 = mk('Button_Node_01', new THREE.Vector3(0.01,0.22,0.18), chest);
  const btnNode2 = mk('Button_Node_02', new THREE.Vector3(0.01,0.08,0.18), chest);
  const pocketNodeL = mk('Pocket_Node_L', new THREE.Vector3(-0.14,0.07,0.17), chest);
  const pocketNodeR = mk('Pocket_Node_R', new THREE.Vector3(0.14,0.07,0.17), chest);

  while(bones.length < 34) mk(`Extra_${bones.length}`, new THREE.Vector3(0,0,0), hips);
  
  const skeleton = new THREE.Skeleton(bones);
  return { bones, skeleton };
}

export function thinkAndMove(bones, context) {
  MIND.breath += 0.016;
  MIND.talkAmp = context.talkAmp || 0;
  MIND.polePhase += 0.008;
  if (!bones || bones.length === 0) return MIND.state;
  const t = MIND.breath;
  
  const hips = bones.find(b=>b.name==='Hips');
  if (hips) hips.position.y = Math.sin(t * 0.7) * 0.004;

  if (context.inputFocused) MIND.state = 'LISTENING';
  else if (context.sapError) { MIND.state = 'SCOLDING'; MIND.mood = 'estricta'; MIND.lastError++; }
  else if (context.sapOK) { MIND.state = 'CELEBRATING'; MIND.mood = 'feliz'; MIND.lastError = 0; }
  else if (context.moving) MIND.state = 'WALKING';
  else if (context.reading || context.talkAmp > 0.1) MIND.state = 'EXPLAINING';
  else MIND.state = 'IDLE_CORTANA';

  const head = bones.find(b=>b.name==='Head_Bone'); 
  const neck = bones.find(b=>b.name==='Neck');
  const mouth = bones.find(b=>b.name==='Mouth');
  const jaw = bones.find(b=>b.name==='Jaw');
  const eyeL = bones.find(b=>b.name==='Eye_L'); const eyeR = bones.find(b=>b.name==='Eye_R');
  const frontalPole = bones.find(b=>b.name==='Frontal_Pole');
  const sacralPole = bones.find(b=>b.name==='Sacral_Pole');
  const lShoulder = bones.find(b=>b.name==='Shoulder.L'); const lElbow = bones.find(b=>b.name==='Elbow.L');
  const rShoulder = bones.find(b=>b.name==='Shoulder.R'); const rElbow = bones.find(b=>b.name==='Elbow.R');
  const lKnee = bones.find(b=>b.name==='Knee.L'); const rKnee = bones.find(b=>b.name==='Knee.R');

  // V30.4 FIX HAIRBALL - abre abanico hombros para que no se haga bola
  if (lShoulder) { lShoulder.rotation.z = -0.06; lShoulder.rotation.y = 0.04; }
  if (rShoulder) { rShoulder.rotation.z = 0.06; rShoulder.rotation.y = -0.04; }

  if (frontalPole) {
    frontalPole.rotation.y = Math.sin(MIND.polePhase) * 0.04;
    frontalPole.position.z = 0.09 + Math.sin(t*0.5)*0.002;
  }
  if (sacralPole) {
    sacralPole.rotation.x = Math.sin(MIND.polePhase*0.7) * 0.03;
  }

  if (eyeL && eyeR) {
    const lookX = Math.sin(t*0.23)*0.015;
    const lookY = Math.sin(t*0.31)*0.008;
    eyeL.rotation.y = lookX; eyeR.rotation.y = lookX;
    eyeL.rotation.x = lookY; eyeR.rotation.x = lookY;
    if (MIND.state === 'LISTENING') { eyeL.rotation.y = 0.12; eyeR.rotation.y = 0.12; }
  }

  if (MIND.state === 'IDLE_CORTANA') {
    if (head) { head.rotation.y = Math.sin(t * 0.32) * 0.11; head.rotation.x = Math.sin(t * 0.26) * 0.020; }
    if (jaw) jaw.position.y = Math.sin(t * 0.8) * 0.002;
    if (neck) neck.rotation.z = Math.sin(t * 0.42) * 0.010;
    if (Math.random() < 0.008) { if (eyeL) eyeL.scale.y = 0.1; if (eyeR) eyeR.scale.y = 0.1; setTimeout(()=>{ if(eyeL) eyeL.scale.y=1; if(eyeR) eyeR.scale.y=1; }, 120); }
  }
  if (MIND.state === 'LISTENING') {
    if (head) { head.rotation.x = -0.08; head.rotation.y = 0.06; }
    if (lElbow) lElbow.rotation.x = -0.82;
  }
  if (MIND.state === 'EXPLAINING') {
    if (rElbow) { rElbow.rotation.x = Math.sin(t * 2.6) * 0.28; rElbow.rotation.z = Math.sin(t * 1.4) * 0.08; }
    if (mouth && jaw) {
      MIND.viseme = Math.floor((t*6) % 6);
      const amp = MIND.talkAmp || 0.22;
      if (MIND.viseme === 0) { mouth.scale.set(1,0.15,1); jaw.position.y = 0; }
      else if (MIND.viseme === 1) { mouth.scale.set(1.2,0.9*amp,1); jaw.position.y = -0.012*amp; }
      else if (MIND.viseme === 2) { mouth.scale.set(0.6,0.4*amp,1); jaw.position.y = -0.004*amp; }
      else if (MIND.viseme === 3) { mouth.scale.set(0.7,0.7*amp,1); jaw.position.y = -0.008*amp; }
      else if (MIND.viseme === 4) { mouth.scale.set(1.1,0.5*amp,1); jaw.position.y = -0.006*amp; }
      else { mouth.scale.set(0.8,0.8*amp,1); jaw.position.y = -0.010*amp; }
    }
  }
  if (MIND.state === 'WALKING') {
    if (lKnee) lKnee.rotation.x = Math.sin(t * 5.2) * 0.44;
    if (rKnee) rKnee.rotation.x = -Math.sin(t * 5.2) * 0.44;
    if (hips) hips.position.x = Math.sin(t * 5.2) * 0.010;
  }
  if (MIND.state === 'SCOLDING') {
    if (hips) hips.rotation.z = Math.sin(t * 10) * 0.032;
    if (head) head.rotation.y = Math.sin(t * 9) * 0.10;
  }
  if (MIND.state === 'CELEBRATING') {
    if (hips) hips.position.y += Math.abs(Math.sin(t * 3.6)) * 0.032;
    if (lElbow) lElbow.rotation.x = -1.42;
    if (rElbow) rElbow.rotation.x = -1.42;
  }
  return MIND.state;
}

export function decideByMetrics(metrics) {
  const m = metrics;
  if (m.same_error_count >= 3) return { state: 'SCOLDING', color: '#f59e0b', pos: 'feedback_err' };
  if (m.same_error_count === 2) return { state: 'SCOLDING', color: '#f59e0b', pos: 'feedback_err' };
  if (m.streak_days >= 7 || m.level_up || m.accuracy_7d >= 0.9) return { state: 'CELEBRATING', color: '#22c55e', pos: 'feedback_ok' };
  if (m.cefr_level === 'B1' && m.flow_mode) return { state: 'IDLE_CORTANA', color: '#8b5cf6', pos: 'welcome' };
  if (m.hesitation_ms > 4000 || m.accuracy_7d < 0.5) return { state: 'EXPLAINING', color: '#00d4ff', pos: 'reading_text' };
  if (m.is_new_area) return { state: 'LISTENING', color: '#60a5fa', pos: 'input_field' };
  return { state: 'IDLE_CORTANA', color: '#00d4ff', pos: 'welcome' };
}

export const LAIA_ACTOR_BRAIN = { version: "30.4 DEFINITIVO SKINNY GAP CLEAN - 5 LOOPS RODILLA CIRCULO PERFECTO", createLaiaSkeleton, thinkAndMove, decideByMetrics, config: LAIA_BRAIN_CONFIG };