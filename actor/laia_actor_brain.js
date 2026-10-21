// actor/laia_actor_brain.js - V30.9 DEFINITIVO - SINGLE MESH - CLON IMAGEN 1 - SKINNY GLOW 0.19
// AUTOR: YARVIS + Laia - Girona - V30.9 LIMPIO DEFINITIVO
// BORRAR: laia_actor.json - duplicado con 34 bones y 3200 points que hace bloque

export const LAIA_BRAIN_CONFIG = {
  version: "30.9 DEFINITIVO - SINGLE MESH - CLON IMAGEN 1 - WAIST 0.11 - GAP 0.11 - SKINNY GLOW 0.19",
  author: "YARVIS + Laia - V30.9 SINGLE MESH LIMPIO",
  skeleton: {
    bones: 8,
    hiddenSkeleton: false,
    skinnedMesh: false,
    type: "SingleMesh_Topological_Wireframe_V30.9_CLON_IMAGEN_1_SKINNY_GLOW_0.19"
  },
  config: {
    scale: 0.58,
    mobileScale: 0.52,
    camera: { fov: 34, pos: [0, 0.22, 1.78], mobilePos: [0, 0.18, 1.92], groupPos: [0, 0.18, 0], mobileGroupPos: [0, 0.14, 0] },
    singleMesh: {
      enabled: true,
      note: "SINGLE MESH CONTINUA - CLON IMAGEN 1 - NO 3 MALLAS - NO POINTS 3200 - NO KNN 12 - NO TWIST 0.65",
      waist: 0.11,
      waistFactor: 0.56,
      thigh_gap: 0.11,
      leg_separation: 0.074,
      torso: "32 radiales x 42 verticales - waist 0.11 marcada real imagen 1",
      legs: "22 radiales x 36 verticales - gap clean 0.074 continuo desde torso - sin bandas horizontales",
      feet: "12 radiales x 6 verticales - 5 dedos continuos bifurcación real - no cajas",
      arms: "20 radiales x 18 verticales - T-pose imagen 1 - open fan limpio",
      material: { color: 0x00e5ff, opacity: 0.19, wireframe: true, depthWrite: false, transparent: true },
      filter: "contrast(1.12) brightness(1.08) saturate(1.06) drop-shadow 8px 18px - SKINNY GLOW REAL - IMAGEN 1"
    }
  },
  bones_hierarchy: [
    { name: "Hips", parent: "root", pos: [0, 0, 0] },
    { name: "Spine_02", parent: "Hips", pos: [0, 0.18, 0] },
    { name: "Chest", parent: "Spine_02", pos: [0, 0.22, 0] },
    { name: "Head_Bone", parent: "Chest", pos: [0, 0.22, 0] },
    { name: "Shoulder.L", parent: "Chest", pos: [-0.22, 0.15, 0] },
    { name: "Shoulder.R", parent: "Chest", pos: [0.22, 0.15, 0] },
    { name: "Hip.L", parent: "Hips", pos: [-0.074, -0.18, 0] },
    { name: "Hip.R", parent: "Hips", pos: [0.074, -0.18, 0] }
  ],
  distribution_mesh_real_V30_9: {
    note: "SINGLE MESH CONTINUA - 1 sola BufferGeometry - wireframe 0.19 - CLON IMAGEN 1",
    torso_single: 1344,
    legs_single_gap_clean: 1584,
    feet_5_toes_continuos: 288,
    arms_T_pose: 720,
    total_vertices: 3936,
    wireframe: "Single LineSegments WireframeGeometry opacity 0.19 skinny glow",
    total_points: 0,
    kNN_lines: 0,
    quadDense: 0
  }
};

let MIND = { breath: 0, mood: 'curiosa', state: 'IDLE_CORTANA', talkAmp: 0, viseme: 0 };

export function createLaiaSkeleton(THREE, group) {
  const bones = [];
  const mk = (name, pos, parent) => {
    const b = new THREE.Bone();
    b.name = name;
    b.position.copy(pos);
    parent.add(b);
    bones.push(b);
    return b;
  };
  const hips = mk('Hips', new THREE.Vector3(0,0,0), group);
  const spine02 = mk('Spine_02', new THREE.Vector3(0,0.18,0), hips);
  const chest = mk('Chest', new THREE.Vector3(0,0.22,0), spine02);
  const head = mk('Head_Bone', new THREE.Vector3(0,0.22,0), chest);
  const shoulderL = mk('Shoulder.L', new THREE.Vector3(-0.22,0.15,0), chest);
  const shoulderR = mk('Shoulder.R', new THREE.Vector3(0.22,0.15,0), chest);
  const hipL = mk('Hip.L', new THREE.Vector3(-0.074,-0.18,0), hips);
  const hipR = mk('Hip.R', new THREE.Vector3(0.074,-0.18,0), hips);
  const skeleton = new THREE.Skeleton(bones);
  return { bones, skeleton };
}

export function thinkAndMove(bones, context) {
  MIND.breath += 0.016;
  MIND.talkAmp = context.talkAmp || 0;
  if (!bones || bones.length === 0) return MIND.state;
  const t = MIND.breath;
  const hips = bones.find(b=>b.name==='Hips');
  if (hips) hips.position.y = Math.sin(t * 0.7) * 0.003;

  if (context.inputFocused) MIND.state = 'LISTENING';
  else if (context.sapError) MIND.state = 'SCOLDING';
  else if (context.sapOK) MIND.state = 'CELEBRATING';
  else if (context.reading || context.talkAmp > 0.1) MIND.state = 'EXPLAINING';
  else MIND.state = 'IDLE_CORTANA';

  const head = bones.find(b=>b.name==='Head_Bone');
  if (MIND.state === 'IDLE_CORTANA' && head) {
    head.rotation.y = Math.sin(t * 0.32) * 0.10;
    head.rotation.x = Math.sin(t * 0.26) * 0.02;
  }
  return MIND.state;
}

export function decideByMetrics(metrics) {
  const m = metrics || {};
  if (m.same_error_count >= 3) return { state: 'SCOLDING', color: '#f59e0b', pos: 'feedback_err' };
  if (m.streak_days >= 7 || m.level_up) return { state: 'CELEBRATING', color: '#22c55e', pos: 'feedback_ok' };
  if (m.hesitation_ms > 4000) return { state: 'EXPLAINING', color: '#00d4ff', pos: 'reading_text' };
  if (m.is_new_area) return { state: 'LISTENING', color: '#60a5fa', pos: 'input_field' };
  return { state: 'IDLE_CORTANA', color: '#00d4ff', pos: 'welcome' };
}

// EXPORTS COMPATIBILIDAD - TODOS APUNTAN A V30.9 SINGLE MESH
export const LAIA_ACTOR_BRAIN_V30_9 = {
  version: "30.9 SINGLE MESH - CLON IMAGEN 1 - SKINNY GLOW 0.19 - DEFINITIVO",
  createLaiaSkeleton,
  thinkAndMove,
  decideByMetrics,
  config: LAIA_BRAIN_CONFIG
};
export const LAIA_ACTOR_BRAIN = LAIA_ACTOR_BRAIN_V30_9;
export const LAIA_ACTOR_BRAIN_V30_7 = LAIA_ACTOR_BRAIN_V30_9;
export const LAIA_ACTOR_BRAIN_V30_8 = LAIA_ACTOR_BRAIN_V30_9;
export const LAIA_ACTOR_BRAIN_V30_6 = LAIA_ACTOR_BRAIN_V30_9;
export const LAIA_ACTOR_BRAIN_V30_5 = LAIA_ACTOR_BRAIN_V30_9;
export const LAIA_BRAIN = LAIA_ACTOR_BRAIN_V30_9;