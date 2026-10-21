// actor/laia_actor_brain.js - V30.10.1 FULL FRAME DEFINITIVO - CLON V27 T-POSE - SKINNY 0.19
// FIX: scale 0.40 / cam 2.42 / FOV 30 / group -0.20 - NO 0.58 / 1.78 QUE CORTABA
// BORRAR: laia_actor.json

export const LAIA_BRAIN_CONFIG = {
  version: "30.10.1 FULL FRAME - CLON V27 T-POSE - WAIST 0.11 GAP 0.11 SKINNY 0.19 - DEFINITIVO",
  author: "YARVIS + Laia - V30.10.1 FULL FRAME",
  skeleton: {
    bones: 8,
    hiddenSkeleton: false,
    skinnedMesh: false,
    type: "SingleMesh_Topological_Wireframe_V30.10.1_FULL_FRAME_0.40_2.42_CLON_V27_SKINNY_0.19"
  },
  config: {
    scale: 0.40,
    mobileScale: 0.32,
    camera: { 
      fov: 30, 
      pos: [0, 0.05, 2.42], 
      mobilePos: [0, 0.02, 2.68], 
      groupPos: [0, -0.20, 0], 
      mobileGroupPos: [0, -0.18, 0] 
    },
    singleMesh: {
      enabled: true,
      note: "FULL FRAME 0.40 / 2.42 FOV 30 - SINGLE MESH CONTINUA - CLON V27 T-POSE COMPLETA - NO CORTES",
      waist: 0.11,
      waistFactor: 0.52,
      thigh_gap: 0.11,
      leg_separation: 0.068,
      torso: "43 radiales x 34 verticales - waist 0.52 marcada + solapas 0.042 extruidas - blazer V27",
      legs: "37 radiales x 24 verticales - gap 0.068 limpio - sin bandas - continuo torso",
      feet: "7 radiales x 14 verticales - 5 dedos continuos bifurcacion real - no cajas",
      arms: "22 radiales x 22 verticales - T-pose 0.92 largo V27 - open fan limpio",
      head: "sphere 0.16 wireframe 0.19 provisional - no foto aun - misma opacidad",
      material: { color: 0x00e5ff, opacity: 0.19, wireframe: true, depthWrite: false, transparent: true },
      filter: "contrast(1.12) brightness(1.08) saturate(1.06) drop-shadow 8px 18px opacity 0.14 - SKINNY GLOW REAL - FULL FRAME"
    }
  },
  bones_hierarchy: [
    { name: "Hips", parent: "root", pos: [0, 0, 0] },
    { name: "Spine_02", parent: "Hips", pos: [0, 0.18, 0] },
    { name: "Chest", parent: "Spine_02", pos: [0, 0.22, 0] },
    { name: "Head_Bone", parent: "Chest", pos: [0, 0.22, 0] },
    { name: "Shoulder.L", parent: "Chest", pos: [-0.22, 0.15, 0] },
    { name: "Shoulder.R", parent: "Chest", pos: [0.22, 0.15, 0] },
    { name: "Hip.L", parent: "Hips", pos: [-0.068, -0.18, 0] },
    { name: "Hip.R", parent: "Hips", pos: [0.068, -0.18, 0] }
  ],
  distribution_mesh_real_V30_10_1: {
    note: "FULL FRAME 0.40/2.42 - SINGLE MESH CONTINUA - 1 BufferGeometry - wireframe 0.19 - CLON V27 T-POSE",
    torso_single_blazer: 1462,
    legs_single_gap_clean_0_068: 1776,
    feet_5_toes_continuos: 196,
    arms_T_pose_0_92_largo: 968,
    head_0_16_provisional: 196,
    total_vertices: 4598,
    wireframe: "Single LineSegments WireframeGeometry opacity 0.19 skinny glow full frame",
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
  const hipL = mk('Hip.L', new THREE.Vector3(-0.068,-0.18,0), hips);
  const hipR = mk('Hip.R', new THREE.Vector3(0.068,-0.18,0), hips);
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

export const LAIA_ACTOR_BRAIN_V30_10_1 = {
  version: "30.10.1 FULL FRAME 0.40/2.42 FOV30 - CLON V27 T-POSE - SKINNY 0.19 DEFINITIVO",
  createLaiaSkeleton,
  thinkAndMove,
  decideByMetrics,
  config: LAIA_BRAIN_CONFIG
};
export const LAIA_ACTOR_BRAIN = LAIA_ACTOR_BRAIN_V30_10_1;
export const LAIA_ACTOR_BRAIN_V30_10 = LAIA_ACTOR_BRAIN_V30_10_1;
export const LAIA_ACTOR_BRAIN_V30_9 = LAIA_ACTOR_BRAIN_V30_10_1;
export const LAIA_BRAIN = LAIA_ACTOR_BRAIN_V30_10_1;