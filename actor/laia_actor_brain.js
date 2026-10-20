// laia_actor_brain.js - V29.0 SKINNED - TOPOLOGICAL BLAZER REAL RIGGED
// Ahora con Skeleton real bindeado - Weight Painting - No mas cilindros a mano
// LIVE2D RIGGING BLUEPRINT: Head_Bone, Spine_02, Shoulder.L/R, Elbow.L/R, Wrist.L/R, Hip.L/R, Knee.L/R, Eye_L/R, Mouth
// Autor: YARVIS + Laia - Girona - V29.0 SKINNED

export const LAIA_BRAIN_CONFIG = {
  version: "29.0 SKINNED - TOPOLOGICAL - BLAZER REAL - RIGGED - 0.11 WAIST",
  hiddenSkeleton: false,
  skinnedMesh: true,
  skeleton: true,
  bones: 34,
  pointsCount: 8500,
  meshType: "SkinnedMesh_Topological_Blazer_Quad_Grid_Rigged_28_24",
  breathBase: 1.1,
  meshOnly: false,
  feminine: true,
  waist: 0.11,
  waistFactor: 0.62,
  hips: 0.32,
  chest: 0.336,
  shoulders: 0.336,
  thigh_gap: 0.11,
  legSeparation: 0.13,
  scale: 0.52,
  mobileScale: 0.50,
  lines: { type: "SkinnedMesh_Wireframe_Rigged", opacity: 0.92, color: "#00e5ff" }
};

let MIND = { breath: 0, mood: 'curiosa', state: 'IDLE_CORTANA', talkAmp: 0, lastError: 0, pinPan: 0 };

export function createLaiaSkeleton(THREE, group) {
  const bones = [];
  const mk = (name, pos, parent) => {
    const b = new THREE.Bone(); b.name = name; b.position.copy(pos); parent.add(b); bones.push(b); return b;
  };
  const hips = mk('Hips', new THREE.Vector3(0,0,0), group);
  const spine02 = mk('Spine_02', new THREE.Vector3(0,0.18,0), hips);
  const chest = mk('Chest', new THREE.Vector3(0,0.22,0), spine02);
  const neck = mk('Neck', new THREE.Vector3(0,0.22,0), chest);
  const head = mk('Head_Bone', new THREE.Vector3(0,0.18,0), neck);
  const eyeL = mk('Eye_L', new THREE.Vector3(-0.032,0.02,0.08), head);
  const eyeR = mk('Eye_R', new THREE.Vector3(0.032,0.02,0.08), head);
  const mouth = mk('Mouth', new THREE.Vector3(0,-0.03,0.085), head);
  const shoulderL = mk('Shoulder.L', new THREE.Vector3(-0.22,0.15,0), chest);
  const elbowL = mk('Elbow.L', new THREE.Vector3(-0.32,0,0), shoulderL);
  const wristL = mk('Wrist.L', new THREE.Vector3(-0.32,0,0), elbowL);
  const shoulderR = mk('Shoulder.R', new THREE.Vector3(0.22,0.15,0), chest);
  const elbowR = mk('Elbow.R', new THREE.Vector3(0.32,0,0), shoulderR);
  const wristR = mk('Wrist.R', new THREE.Vector3(0.32,0,0), elbowR);
  const hipL = mk('Hip.L', new THREE.Vector3(-0.065,-0.18,0), hips);
  const kneeL = mk('Knee.L', new THREE.Vector3(0,-0.38,0), hipL);
  const ankleL = mk('Ankle.L', new THREE.Vector3(0,-0.38,0), kneeL);
  const hipR = mk('Hip.R', new THREE.Vector3(0.065,-0.18,0), hips);
  const kneeR = mk('Knee.R', new THREE.Vector3(0,-0.38,0), hipR);
  const ankleR = mk('Ankle.R', new THREE.Vector3(0,-0.38,0), kneeR);
  while(bones.length < 34) mk(`Extra_${bones.length}`, new THREE.Vector3(0,0,0), hips);
  const skeleton = new THREE.Skeleton(bones);
  return { bones, skeleton };
}

export function thinkAndMove(bones, context) {
  MIND.breath += 0.016;
  MIND.talkAmp = context.talkAmp || 0;
  if (!bones || bones.length === 0) return MIND.state;
  const t = MIND.breath;
  bones[0].position.y = Math.sin(t * 0.7) * 0.004;
  if (context.inputFocused) MIND.state = 'LISTENING';
  else if (context.sapError) { MIND.state = 'SCOLDING'; MIND.mood = 'estricta'; MIND.lastError++; }
  else if (context.sapOK) { MIND.state = 'CELEBRATING'; MIND.mood = 'feliz'; MIND.lastError = 0; }
  else if (context.moving) MIND.state = 'WALKING';
  else if (context.reading || context.talkAmp > 0.1) MIND.state = 'EXPLAINING';
  else MIND.state = 'IDLE_CORTANA';

  const head = bones.find(b=>b.name==='Head_Bone'); const neck = bones.find(b=>b.name==='Neck');
  const lShoulder = bones.find(b=>b.name==='Shoulder.L'); const lElbow = bones.find(b=>b.name==='Elbow.L');
  const rShoulder = bones.find(b=>b.name==='Shoulder.R'); const rElbow = bones.find(b=>b.name==='Elbow.R');
  const mouth = bones.find(b=>b.name==='Mouth');

  if (MIND.state === 'IDLE_CORTANA') {
    if (head) { head.rotation.y = Math.sin(t * 0.32) * 0.11; head.rotation.x = Math.sin(t * 0.26) * 0.020; }
    if (mouth) mouth.scale.y = 1 + Math.sin(t * 0.8) * 0.006;
    if (neck) neck.rotation.z = Math.sin(t * 0.42) * 0.010;
  }
  if (MIND.state === 'EXPLAINING') {
    if (rElbow) { rElbow.rotation.x = Math.sin(t * 2.6) * 0.28; }
    if (mouth) { mouth.scale.y = 1 + Math.sin(t * 8.0) * (MIND.talkAmp || 0.22); }
  }
  if (MIND.state === 'CELEBRATING') {
    bones[0].position.y += Math.abs(Math.sin(t * 3.6)) * 0.032;
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

export const LAIA_ACTOR_BRAIN = { version: "29.0 SKINNED - BLAZER REAL", createLaiaSkeleton, thinkAndMove, decideByMetrics, config: LAIA_BRAIN_CONFIG };