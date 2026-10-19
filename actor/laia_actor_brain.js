// laia_actor_brain.js - V17.4 CONSTELLATION MOTOR - CEREBRO AUTÓNOMO FEMENINO
// 4000 puntos + líneas zodiac - Esqueleto 34 huesos invisibles - Motor intuición pin pan
// Autor: YARVIS + Laia - Girona - V17.4

export const LAIA_BRAIN_CONFIG = {
  version: "17.4 CONSTELLATION FEMENINA - 4000 POINTS + ZODIAC LINES",
  hiddenSkeleton: true,
  pointsCount: 4000,
  constellation: true,
  breathBase: 1.1,
  meshOnly: true,
  feminine: true,
  waist: 0.11,
  hips: 0.21
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

// Algoritmo principal - 60fps - Mueve huesos invisibles que arrastran malla 4000 + líneas zodiac
export function thinkAndMove(bones, context) {
  MIND.breath += 0.016;
  MIND.talkAmp = context.talkAmp || 0;
  MIND.pinPan += 0.016;

  if (!bones || bones.length === 0) return MIND.state;

  // 1. RESPIRACIÓN AUTÓNOMA FEMENINA - pecho 0.19 escala suave - cintura 0.11 no respira
  const t = MIND.breath;
  if (bones[31]) {
    const scale = 1 + Math.sin(t * 1.1) * 0.028; // más suave femenina
    bones[31].scale.x = scale;
    bones[31].scale.z = scale;
  }
  // Flotar suave + balanceo cadera femenina 0.21
  bones[0].position.y = Math.sin(t * 0.7) * 0.012;
  bones[0].position.x = Math.sin(t * 0.4) * 0.008; // sway cadera

  // 2. CEREBRO DECIDE ESTADO SOLO - Motor intuición pin pan
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

  // 3. MAPEO ESQUELÉTICO FEMENINO - 34 huesos invisibles arrastran 4000 puntos + líneas
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
  const mouth = bones[5]; // cabeza = boca también

  // IDLE_CORTANA: Cortana TV original - femenina, mira al usuario, coleta holográfica
  if (MIND.state === 'IDLE_CORTANA') {
    if (head) {
      head.rotation.y = Math.sin(t * 0.35) * 0.22; // más suave
      head.rotation.x = Math.sin(t * 0.28) * 0.06;
      head.rotation.z = Math.sin(t * 0.2) * 0.04; // inclinación coleta
    }
    if (mouth) mouth.scale.y = 1 + Math.sin(t * 0.8) * 0.02;
    if (neck) neck.rotation.z = Math.sin(t * 0.45) * 0.04;
    if (lShoulder) lShoulder.rotation.z = Math.sin(t * 0.3) * 0.05;
    if (rShoulder) rShoulder.rotation.z = -Math.sin(t * 0.3) * 0.05;
  }

  // LISTENING: Inclina cabeza femenina, mano a oreja, cadera 0.21 quieta
  if (MIND.state === 'LISTENING') {
    if (head) {
      head.rotation.x = -0.18;
      head.rotation.y = 0.15;
    }
    if (lArm) lArm.rotation.z = 0.55;
    if (lFore) lFore.rotation.x = -1.05;
    if (rHip) rHip.rotation.z = 0.02; // apoyo pierna
  }

  // EXPLAINING: Gesticula femenina + habla - boca mapeada a amplitud
  if (MIND.state === 'EXPLAINING') {
    if (rFore) rFore.rotation.x = Math.sin(t * 2.8) * 0.55;
    if (rFore) rFore.rotation.z = Math.sin(t * 1.5) * 0.2;
    if (mouth) {
      mouth.scale.y = 1 + Math.sin(t * 8.5) * (MIND.talkAmp || 0.45);
      mouth.scale.x = 1 + Math.sin(t * 3) * 0.08;
    }
    if (lArm) lArm.rotation.x = Math.sin(t * 1.8) * 0.25;
    if (lArm) lArm.rotation.z = Math.sin(t * 1.2) * 0.15;
  }

  // WALKING: Pin pan motor intuición - IK real piernas femeninas con gap entre muslos
  if (MIND.state === 'WALKING') {
    if (lKnee) lKnee.rotation.x = Math.sin(t * 5.5) * 0.85;
    if (rKnee) rKnee.rotation.x = -Math.sin(t * 5.5) * 0.85;
    if (lThigh) lThigh.rotation.x = Math.sin(t * 5.5) * 0.32;
    if (rThigh) rThigh.rotation.x = -Math.sin(t * 5.5) * 0.32;
    // Balanceo brazos femenina suave con 4000 puntos
    if (lFore) lFore.rotation.x = -Math.sin(t * 5.5) * 0.35;
    if (rFore) rFore.rotation.x = Math.sin(t * 5.5) * 0.35;
    // Cadera 0.21 balancea al caminar
    bones[0].position.x = Math.sin(t * 5.5) * 0.03;
    bones[0].position.z = Math.sin(t * 5.5) * 0.015;
  }

  // SCOLDING: Niega femenina estricta - coleta se mueve
  if (MIND.state === 'SCOLDING') {
    bones[0].rotation.z = Math.sin(t * 11) * 0.10;
    if (head) {
      head.rotation.y = Math.sin(t * 9.5) * 0.28;
      head.rotation.x = -0.05;
    }
  }

  // CELEBRATING: Salto femenino + brazos arriba - felicidad constelación brilla
  if (MIND.state === 'CELEBRATING') {
    bones[0].position.y += Math.abs(Math.sin(t * 3.8)) * 0.10;
    if (lFore) lFore.rotation.x = -1.85;
    if (rFore) rFore.rotation.x = -1.85;
    if (lArm) lArm.rotation.x = -0.45;
    if (rArm) rArm.rotation.x = -0.45;
    if (lArm) lArm.rotation.z = 0.15;
    if (rArm) rArm.rotation.z = -0.15;
  }

  return MIND.state;
}

// Decide intención basada en métricas SAP - para malla 4000 femenina
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

// Compatibilidad con index.html V17.4
export const LAIA_ACTOR_BRAIN = {
  version: "17.4 CONSTELLATION FEMENINA",
  thinkAndMove,
  decideByMetrics,
  config: LAIA_BRAIN_CONFIG
};