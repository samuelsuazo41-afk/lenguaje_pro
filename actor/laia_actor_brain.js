// laia_actor_brain.js - V17.2 MESH ONLY BRAIN - CEREBRO AUTONOMO
// Ya no usa welcome 50/30 - Ahora decide solo con 34 huesos invisibles
// Mueve la malla punteada de 1200 puntos
// Autor: YARVIS + Laia - Girona

export const LAIA_BRAIN_CONFIG = {
  version: "17.2 MESH ONLY - 1200 POINTS",
  hiddenSkeleton: true,
  pointsCount: 1200,
  breathBase: 1.1,
  meshOnly: true
};

// Estado mental de Laia
let MIND = {
  breath: 0,
  mood: 'curiosa',
  state: 'IDLE_CORTANA',
  talkAmp: 0,
  lastError: 0
};

// Algoritmo principal - 60fps - Mueve huesos invisibles que arrastran la malla de puntos
export function thinkAndMove(bones, context) {
  // context = { inputFocused, sapError, sapOK, moving, reading, talkAmp, hesitation_ms, same_error_count, accuracy_7d, streak_days }
  MIND.breath += 0.016;
  MIND.talkAmp = context.talkAmp || 0;

  if (!bones || bones.length === 0) return MIND.state;

  // 1. RESPIRACIÓN AUTÓNOMA - Siempre - pecho invisible [31] escala la malla
  const t = MIND.breath;
  if (bones[31]) {
    const scale = 1 + Math.sin(t * 1.1) * 0.035;
    bones[31].scale.x = scale;
    bones[31].scale.z = scale;
  }
  // Flotar suave
  bones[0].position.y = Math.sin(t * 0.7) * 0.015;

  // 2. CEREBRO DECIDE ESTADO SOLO - No espera click
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

  // 3. MAPEO ESQUELÉTICO - Cada estado mueve huesos invisibles distintos
  // Los huesos son invisibles pero arrastran la malla de puntos
  const head = bones[5];
  const neck = bones[4];
  const lArm = bones[7];
  const lFore = bones[8];
  const rArm = bones[15];
  const rFore = bones[16];
  const lLeg = bones[23];
  const lKnee = bones[24];
  const rLeg = bones[27];
  const rKnee = bones[28];
  const mouth = bones[6];

  // IDLE_CORTANA: La cortana original de tu TV - mira al usuario, parpadea
  if (MIND.state === 'IDLE_CORTANA') {
    if (head) {
      head.rotation.y = Math.sin(t * 0.4) * 0.25;
      head.rotation.x = Math.sin(t * 0.3) * 0.08;
    }
    if (mouth) mouth.scale.y = 1;
    if (neck) neck.rotation.z = Math.sin(t * 0.5) * 0.05;
  }

  // LISTENING: Inclina cabeza, mano a oreja - malla punteada sigue
  if (MIND.state === 'LISTENING') {
    if (head) head.rotation.x = -0.25;
    if (lArm) lArm.rotation.z = 0.6;
    if (lFore) lFore.rotation.x = -1.1;
  }

  // EXPLAINING: Gesticula y habla - boca mapeada a amplitud de audio
  if (MIND.state === 'EXPLAINING') {
    if (rFore) rFore.rotation.x = Math.sin(t * 3) * 0.6;
    if (mouth) {
      mouth.scale.y = 1 + Math.sin(t * 9) * (MIND.talkAmp || 0.5);
      mouth.scale.x = 1 + Math.random() * 0.2;
    }
    if (lArm) lArm.rotation.x = Math.sin(t * 2) * 0.3;
  }

  // WALKING: IK real de piernas - no teleport - mueve malla
  if (MIND.state === 'WALKING') {
    if (lKnee) lKnee.rotation.x = Math.sin(t * 6) * 0.9;
    if (rKnee) rKnee.rotation.x = -Math.sin(t * 6) * 0.9;
    if (lLeg) lLeg.rotation.x = Math.sin(t * 6) * 0.35;
    if (rLeg) rLeg.rotation.x = -Math.sin(t * 6) * 0.35;
    // Balanceo brazos con la malla
    if (lFore) lFore.rotation.x = -Math.sin(t * 6) * 0.4;
    if (rFore) rFore.rotation.x = Math.sin(t * 6) * 0.4;
    bones[0].position.z = Math.sin(t * 6) * 0.02;
  }

  // SCOLDING: Niega - personalidad estricta
  if (MIND.state === 'SCOLDING') {
    bones[0].rotation.z = Math.sin(t * 12) * 0.12;
    if (head) head.rotation.y = Math.sin(t * 10) * 0.3;
  }

  // CELEBRATING: Salto + brazos arriba - felicidad
  if (MIND.state === 'CELEBRATING') {
    bones[0].position.y += Math.abs(Math.sin(t * 4)) * 0.12;
    if (lFore) lFore.rotation.x = -2.0;
    if (rFore) rFore.rotation.x = -2.0;
    if (lArm) lArm.rotation.x = -0.5;
    if (rArm) rArm.rotation.x = -0.5;
  }

  return MIND.state;
}

// Decide intención basada en métricas SAP - igual que antes pero para malla
export function decideByMetrics(metrics) {
  const m = metrics;
  if (m.same_error_count >= 3) return { state: 'SCOLDING', color: '#f59e0b' };
  if (m.same_error_count === 2) return { state: 'SCOLDING', color: '#f59e0b' };
  if (m.streak_days >= 7 || m.level_up || m.accuracy_7d >= 0.9) return { state: 'CELEBRATING', color: '#22c55e' };
  if (m.cefr_level === 'B1' && m.flow_mode) return { state: 'IDLE_CORTANA', color: '#8b5cf6' };
  if (m.hesitation_ms > 4000 || m.accuracy_7d < 0.5) return { state: 'EXPLAINING', color: '#00d4ff' };
  if (m.is_new_area) return { state: 'LISTENING', color: '#60a5fa' };
  return { state: 'IDLE_CORTANA', color: '#00d4ff' };
}

// Para compatibilidad con tu index.html viejo
export const LAIA_ACTOR_BRAIN = {
  version: "17.2 MESH ONLY",
  thinkAndMove,
  decideByMetrics,
  config: LAIA_BRAIN_CONFIG
};