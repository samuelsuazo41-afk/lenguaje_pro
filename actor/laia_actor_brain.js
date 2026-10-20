// laia_actor_brain.js - V26.0 DIRECT HUMANOIDE - FOTO 2 - 0.11 WAIST - NO CAPSULE
// DIRECTO humanoide con rodilla/tobillo/pies/manos articulados como foto 2
// Params V26: waist 0.11 cylinder 0.62, hips 0.32, chest 0.336, thigh_gap 0.11 direct
// Autor: YARVIS + Laia - Girona - V26.0 DIRECT

export const LAIA_BRAIN_CONFIG = {
  version: "26.0 DIRECT HUMANOIDE - FOTO 2 - 0.11 WAIST - NO CAPSULE",
  hiddenSkeleton: true,
  pointsCount: 7000,
  constellation: true,
  surfaceSampling: false,
  proxyMesh: false,
  meshReal: true,
  meshType: "DirectHumanoide_CylinderTapered_Foto2",
  breathBase: 1.1,
  meshOnly: true,
  feminine: true,
  waist: 0.11,
  waistFactor: 0.62,
  hips: 0.32,
  chest: 0.336,
  shoulders: 0.336,
  thigh_gap: 0.11,
  legSeparation: 0.22,
  scale: 0.72,
  mobileScale: 0.68,
  lines: {
    type: "WireframeGeometry_direct_humanoide",
    opacity: 0.32
  }
};

let MIND = {
  breath: 0,
  mood: 'curiosa',
  state: 'IDLE_CORTANA',
  talkAmp: 0,
  lastError: 0,
  pinPan: 0
};

export function thinkAndMove(bones, context) {
  MIND.breath += 0.016;
  MIND.talkAmp = context.talkAmp || 0;
  MIND.pinPan += 0.016;
  if (!bones || bones.length === 0) return MIND.state;

  const t = MIND.breath;
  if (bones[31]) {
    const scale = 1 + Math.sin(t * 1.1) * 0.012;
    bones[31].scale.x = scale;
    bones[31].scale.z = scale;
  }
  bones[0].position.y = Math.sin(t * 0.7) * 0.005;
  bones[0].position.x = Math.sin(t * 0.4) * 0.002;

  if (context.inputFocused) MIND.state = 'LISTENING';
  else if (context.sapError) { MIND.state = 'SCOLDING'; MIND.mood = 'estricta'; MIND.lastError++; }
  else if (context.sapOK) { MIND.state = 'CELEBRATING'; MIND.mood = 'feliz'; MIND.lastError = 0; }
  else if (context.moving) MIND.state = 'WALKING';
  else if (context.reading || context.talkAmp > 0.1) MIND.state = 'EXPLAINING';
  else MIND.state = 'IDLE_CORTANA';

  const head = bones[5]; const neck = bones[4];
  const lShoulder = bones[6]; const lArm = bones[7]; const lFore = bones[8];
  const rShoulder = bones[10]; const rArm = bones[11]; const rFore = bones[12];
  const lThigh = bones[15]; const lKnee = bones[16]; const rThigh = bones[19]; const rKnee = bones[20];
  const mouth = bones[5];

  if (MIND.state === 'IDLE_CORTANA') {
    if (head) { head.rotation.y = Math.sin(t * 0.32) * 0.14; head.rotation.x = Math.sin(t * 0.26) * 0.025; }
    if (mouth) mouth.scale.y = 1 + Math.sin(t * 0.8) * 0.008;
    if (neck) neck.rotation.z = Math.sin(t * 0.42) * 0.012;
  }
  if (MIND.state === 'LISTENING') {
    if (head) { head.rotation.x = -0.10; head.rotation.y = 0.08; }
    if (lArm) lArm.rotation.z = 0.38;
    if (lFore) lFore.rotation.x = -0.88;
  }
  if (MIND.state === 'EXPLAINING') {
    if (rFore) { rFore.rotation.x = Math.sin(t * 2.6) * 0.32; rFore.rotation.z = Math.sin(t * 1.4) * 0.10; }
    if (mouth) { mouth.scale.y = 1 + Math.sin(t * 8.0) * (MIND.talkAmp || 0.28); }
  }
  if (MIND.state === 'WALKING') {
    if (lKnee) lKnee.rotation.x = Math.sin(t * 5.2) * 0.52;
    if (rKnee) rKnee.rotation.x = -Math.sin(t * 5.2) * 0.52;
    if (lThigh) lThigh.rotation.x = Math.sin(t * 5.2) * 0.18;
    if (rThigh) rThigh.rotation.x = -Math.sin(t * 5.2) * 0.18;
    bones[0].position.x = Math.sin(t * 5.2) * 0.012;
  }
  if (MIND.state === 'SCOLDING') {
    bones[0].rotation.z = Math.sin(t * 10) * 0.04;
    if (head) head.rotation.y = Math.sin(t * 9) * 0.12;
  }
  if (MIND.state === 'CELEBRATING') {
    bones[0].position.y += Math.abs(Math.sin(t * 3.6)) * 0.04;
    if (lFore) lFore.rotation.x = -1.52;
    if (rFore) rFore.rotation.x = -1.52;
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

export const LAIA_ACTOR_BRAIN = {
  version: "26.0 DIRECT HUMANOIDE - FOTO 2 - 0.11",
  thinkAndMove,
  decideByMetrics,
  config: LAIA_BRAIN_CONFIG
};