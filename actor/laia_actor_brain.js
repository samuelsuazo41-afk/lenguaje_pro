// actor/laia_actor_brain.js - V30.11 FULL FRAME - CLON V27 BLAZER SOLDADO - SKINNY 0.19
// FIX V30.11: Geometría movida a laia_hologram.js - Brain solo huesos + lógica - 50x44 + 0.042 solapas

export const LAIA_BRAIN_CONFIG = {
  version: "30.11 FULL FRAME - CLON V27 BLAZER SOLDADO - SINGLE MESH 50x44 - 0.19",
  author: "YARVIS + Laia - V30.11",
  skeleton: {
    bones: 8,
    hiddenSkeleton: false,
    skinnedMesh: false,
    type: "V30.11_FULL_FRAME_SOLDADO_50x44_BLAZER_0.042_T-POSE_0.92"
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
      note: "V30.11 - SINGLE MESH 50x44 CONTINUO SOLDADO - NO MAS 43x34 - BLAZER 0.042 + T-POSE 0.92 + GAP 0.068 LIMPIO",
      waist: 0.11,
      waistFactor: 0.52,
      thigh_gap: 0.11,
      leg_separation: 0.068,
      torso: "50 radiales x 44 verticales - waist 0.52 + solapas 0.042 exp + botones 0.008 - V27",
      legs: "37x24 - gap 0.068 soldado a cadera sin banda",
      feet: "7x14 - 5 dedos continuos",
      arms: "22x22 - T-pose 0.92 soldados a hombro sin gap",
      head: "22x32 esfera 0.16 + pelo bob - wireframe 0.19",
      material: { color: 0x00e5ff, opacity: 0.19, wireframe: true, depthWrite: false, transparent: true },
      filter: "contrast(1.12) brightness(1.08) saturate(1.06) drop-shadow 0.19 skinny glow real"
    }
  },
  bones_hierarchy: [
    { name: "Hips", parent: "root", pos: [0, 0, 0] },
    { name: "Spine_02", parent: "Hips", pos: [0, 0.18, 0] },
    { name: "Chest", parent: "Spine_02", pos: [0, 0.22, 0] },
    { name: "Head_Bone", parent: "Chest", pos: [0, 0.22, 0] },
    { name: "Shoulder.L", parent: "Chest", pos: [-0.31, 0.15, 0] },
    { name: "Shoulder.R", parent: "Chest", pos: [0.31, 0.15, 0] },
    { name: "Hip.L", parent: "Hips", pos: [-0.068, -0.18, 0] },
    { name: "Hip.R", parent: "Hips", pos: [0.068, -0.18, 0] }
  ],
  distribution_mesh_real_V30_11: {
    note: "V30.11 SINGLE MESH 50x44 SOLDADO - wireframe 0.19",
    torso_single_blazer_50x44: 2200,
    legs_single_gap_clean_0_068_37x24: 1776,
    feet_5_toes_7x14: 196,
    arms_T_pose_0_92_22x22_soldados: 968,
    head_0_16_22x32: 704,
    total_vertices: 5844,
    wireframe: "LineSegments WireframeGeometry opacity 0.19 skinny glow"
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
  const shoulderL = mk('Shoulder.L', new THREE.Vector3(-0.31,0.15,0), chest);
  const shoulderR = mk('Shoulder.R', new THREE.Vector3(0.31,0.15,0), chest);
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

export const LAIA_ACTOR_BRAIN_V30_11 = {
  version: "30.11 FULL FRAME 0.40/2.42 FOV30 - 50x44 BLAZER 0.042 SOLDADO DEFINITIVO",
  createLaiaSkeleton,
  thinkAndMove,
  decideByMetrics,
  config: LAIA_BRAIN_CONFIG
};
export const LAIA_ACTOR_BRAIN = LAIA_ACTOR_BRAIN_V30_11;
export const LAIA_ACTOR_BRAIN_V30_10_1 = LAIA_ACTOR_BRAIN_V30_11;
export const LAIA_BRAIN = LAIA_ACTOR_BRAIN_V30_11;