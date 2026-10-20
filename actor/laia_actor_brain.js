// laia_actor_brain.js - V20.0 PROXY MESH FINAL - LATHE 0.11 WAIST - CEREBRO AUTÓNOMO FEMENINO
// 7000 puntos superficie proxy único + líneas vecinos <0.08 - Esqueleto 34 huesos invisibles
// Params V20: waist 0.11 lathe pinch, hips 0.21, chest 0.19, thigh_gap 0.11
// Autor: YARVIS + Laia - Girona - V20.0 PROXY MESH FINAL

export const LAIA_BRAIN_CONFIG = {
  version: "20.0 PROXY MESH FINAL - LATHE 0.11 WAIST - 7000 POINTS",
  hiddenSkeleton: true,
  pointsCount: 7000,
  constellation: true,
  surfaceSampling: true,
  proxyMesh: true, // FIX V20: malla única lathe, no cilindros
  proxyType: "LatheGeometry_single_mesh_barycentric",
  breathBase: 1.1,
  meshOnly: true,
  feminine: true,
  waist: 0.11,
  hips: 0.21,
  chest: 0.19,
  shoulders: 0.20,
  thigh_gap: 0.11,
  scale: 0.72,
  mobileScale: 0.688,
  lines: {
    maxDist: 0.08,
    maxDistSq: 0.0064,
    kNN: 132
  }
};

// Estado mental de Laia
let MIND = {
  breath: 0,
  mood: 'curiosa',
  state: 'IDLE_CORTANA',
  talkAmp: 0,
  lastError: 0,
  pinPan: 0
};

// 60fps - Mueve huesos invisibles que arrastran malla proxy única 7000 superficie
export function thinkAndMove(bones, context) {
  MIND.breath += 0.016;
  MIND.talkAmp = context.talkAmp || 0;
  MIND.pinPan += 0.016;

  if (!bones || bones.length === 0) return MIND.state;

  // 1. RESPIRACIÓN FEMENINA V20 - pecho 0.19 respira, cintura 0.11 pinch NO respira
  const t = MIND.breath;
  if (bones[31]) {
    const scale = 1 + Math.sin(t * 1.1) * 0.018; // más suave que V19
    bones[31].scale.x = scale;
    bones[31].scale.z = scale;
  }
  // Sway cadera 0.21 + thigh_gap 0.11
  bones[0].position.y = Math.sin(t * 0.7) * 0.008;
  bones[0].position.x = Math.sin(t * 0.4) * 0.004;

  // 2. CEREBRO DECIDE ESTADO
  if (context.inputFocused) {
    MIND.state = 'LISTENING';
  } else if (context.sapError) {
    MIND.state = 'SCOLDING';
    MIND.mood = 'estricta';
    MIND.lastError++;
  } else if (context.sapOK) {
    MIND.state = 'CELEBRATING';
    MIND.mood = 'feliz';
    MIND.lastError = 0;
  } else if (context.moving) {
    MIND.state = 'WALKING';
  } else if (context.reading || context.talkAmp > 0.1) {
    MIND.state = 'EXPLAINING';
  } else {
    MIND.state = 'IDLE_CORTANA';
  }

  const head = bones[5];
  const neck = bones[4];
  const lShoulder = bones[6];
  const lArm = bones[7];
  const lFore = bones[8];
  const rShoulder = bones[10];
  const rArm = bones[11];
  const rFore = bones[12];
  const lHip = bones[14];
  const lThigh = bones[15];
  const lKnee = bones[16];
  const rHip = bones[18];
  const rThigh = bones[19];
  const rKnee = bones[20];
  const mouth = bones[5];

  if (MIND.state === 'IDLE_CORTANA') {
    if (head) {
      head.rotation.y = Math.sin(t * 0.35) * 0.18;
      head.rotation.x = Math.sin(t * 0.28) * 0.04;
      head.rotation.z = Math.sin(t * 0.2) * 0.02;
    }
    if (mouth) mouth.scale.y = 1 + Math.sin(t * 0.8) * 0.012;
    if (neck) neck.rotation.z = Math.sin(t * 0.45) * 0.02;
    if (lShoulder) lShoulder.rotation.z = Math.sin(t * 0.3) * 0.03;
    if (rShoulder) rShoulder.rotation.z = -Math.sin(t * 0.3) * 0.03;
  }

  if (MIND.state === 'LISTENING') {
    if (head) {
      head.rotation.x = -0.14;
      head.rotation.y = 0.12;
    }
    if (lArm) lArm.rotation.z = 0.48;
    if (lFore) lFore.rotation.x = -0.98;
  }

  if (MIND.state === 'EXPLAINING') {
    if (rFore) rFore.rotation.x = Math.sin(t * 2.8) * 0.42;
    if (rFore) rFore.rotation.z = Math.sin(t * 1.5) * 0.14;
    if (mouth) {
      mouth.scale.y = 1 + Math.sin(t * 8.5) * (MIND.talkAmp || 0.32);
      mouth.scale.x = 1 + Math.sin(t * 3) * 0.04;
    }
    if (lArm) lArm.rotation.x = Math.sin(t * 1.8) * 0.18;
  }

  if (MIND.state === 'WALKING') {
    if (lKnee) lKnee.rotation.x = Math.sin(t * 5.5) * 0.72;
    if (rKnee) rKnee.rotation.x = -Math.sin(t * 5.5) * 0.72;
    if (lThigh) lThigh.rotation.x = Math.sin(t * 5.5) * 0.24;
    if (rThigh) rThigh.rotation.x = -Math.sin(t * 5.5) * 0.24;
    if (lFore) lFore.rotation.x = -Math.sin(t * 5.5) * 0.28;
    if (rFore) rFore.rotation.x = Math.sin(t * 5.5) * 0.28;
    bones[0].position.x = Math.sin(t * 5.5) * 0.018;
  }

  if (MIND.state === 'SCOLDING') {
    bones[0].rotation.z = Math.sin(t * 11) * 0.06;
    if (head) head.rotation.y = Math.sin(t * 9.5) * 0.18;
  }

  if (MIND.state === 'CELEBRATING') {
    bones[0].position.y += Math.abs(Math.sin(t * 3.8)) * 0.06;
    if (lFore) lFore.rotation.x = -1.72;
    if (rFore) rFore.rotation.x = -1.72;
    if (lArm) lArm.rotation.x = -0.38;
    if (rArm) rArm.rotation.x = -0.38;
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
  version: "20.0 PROXY MESH FINAL - LATHE 0.11",
  thinkAndMove,
  decideByMetrics,
  config: LAIA_BRAIN_CONFIG
};