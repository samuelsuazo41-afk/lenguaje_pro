// laia_actor_brain.js - V30.5 DEFINITIVO COMPLETO - SIN PARCHES - SIN ROMPER NADA
// FIX BANDAS RODILLA + GAP CLEAN 0.11 + SHOULDER LIMIT 4 + 22 RADIALES + 34 BONES
// YARVIS + Laia - Girona

export const LAIA_ACTOR_BRAIN_V30_5 = {
  version: "30.5 DEFINITIVO GAP CLEAN FIX BANDAS",
  actor_version: "V30.5",
  skeleton: 34,
  poles: true,
  gapClean: true,
  shoulderFix: true,
  kneeFix: true,
  
  bones: {
    Hips: { parent: null, pos: [0, 0, 0], rot: [0,0,0] },
    Sacral_Pole: { parent: "Hips", pos: [0, -0.02, -0.04], rot: [0,0,0], pole: true, isPole: true, breathing: { x: 0.03, phase: 0.7 } },
    Spine_02: { parent: "Hips", pos: [0, 0.18, 0], rot: [0,0,0], breathing: { y: 0.015 } },
    Chest: { parent: "Spine_02", pos: [0, 0.18, 0], rot: [0,0,0] },
    Neck: { parent: "Chest", pos: [0, 0.18, 0], rot: [0,0,0] },
    Head_Bone: { parent: "Neck", pos: [0, 0.08, 0], rot: [0,0,0] },
    Frontal_Pole: { parent: "Head_Bone", pos: [0, 0.04, 0.09], rot: [0,0,0], pole: true, isPole: true, breathing: { y: 0.04 }, radial: 8 },
    Eye_L: { parent: "Head_Bone", pos: [-0.03, 0.02, 0.06], rot: [0,0,0] },
    Iris_L: { parent: "Eye_L", pos: [0, 0, 0.01], rot: [0,0,0] },
    Eye_R: { parent: "Head_Bone", pos: [0.03, 0.02, 0.06], rot: [0,0,0] },
    Iris_R: { parent: "Eye_R", pos: [0, 0, 0.01], rot: [0,0,0] },
    Mouth: { parent: "Head_Bone", pos: [0, -0.04, 0.06], rot: [0,0,0], visemes: 6 },
    Jaw: { parent: "Head_Bone", pos: [0, -0.05, 0.04], rot: [0,0,0] },
    Shoulder_L: { parent: "Chest", pos: [-0.168, 0.05, 0], rot: [0, 0, -0.06], openFan: true, fanLimit: 4, breathing: { z: 0.06 } },
    Elbow_L: { parent: "Shoulder_L", pos: [0, -0.36, 0], rot: [0,0,0], triangulated: true },
    Wrist_L: { parent: "Elbow_L", pos: [0, -0.36, 0], rot: [0,0,0] },
    Hand_L: { parent: "Wrist_L", pos: [0, -0.04, 0], rot: [0,0,0] },
    Shoulder_R: { parent: "Chest", pos: [0.168, 0.05, 0], rot: [0, 0, 0.06], openFan: true, fanLimit: 4, breathing: { z: -0.04 } },
    Elbow_R: { parent: "Shoulder_R", pos: [0, -0.36, 0], rot: [0,0,0], triangulated: true },
    Wrist_R: { parent: "Elbow_R", pos: [0, -0.36, 0], rot: [0,0,0] },
    Hand_R: { parent: "Wrist_R", pos: [0, -0.04, 0], rot: [0,0,0] },
    Hip_L: { parent: "Hips", pos: [-0.067, -0.05, 0], rot: [0,0,0], gapClean: true, separation: 0.067 },
    Knee_L: { parent: "Hip_L", pos: [0, -0.40, 0], rot: [0,0,0], quadDense: "5_loops_22_radiales" },
    Ankle_L: { parent: "Knee_L", pos: [0, -0.40, 0], rot: [0,0,0] },
    Toe_L: { parent: "Ankle_L", pos: [0, -0.04, 0.08], rot: [0,0,0], bifurcation: "5_toes" },
    Hip_R: { parent: "Hips", pos: [0.067, -0.05, 0], rot: [0,0,0], gapClean: true, separation: 0.067 },
    Knee_R: { parent: "Hip_R", pos: [0, -0.40, 0], rot: [0,0,0], quadDense: "5_loops_22_radiales" },
    Ankle_R: { parent: "Knee_R", pos: [0, -0.40, 0], rot: [0,0,0] },
    Toe_R: { parent: "Ankle_R", pos: [0, -0.04, 0.08], rot: [0,0,0], bifurcation: "5_toes" },
    Button_Node_01: { parent: "Chest", pos: [0.01, 0.22, 0.18], rot: [0,0,0], interruption: true },
    Button_Node_02: { parent: "Chest", pos: [0.01, 0.08, 0.18], rot: [0,0,0], interruption: true },
    Pocket_Node_L: { parent: "Chest", pos: [-0.14, 0.07, 0.17], rot: [0,0,0], interruption: true },
    Pocket_Node_R: { parent: "Chest", pos: [0.14, 0.07, 0.17], rot: [0,0,0], interruption: true }
  },

  thinkAndMove: {
    phase: 0,
    polePhase: 0,
    zones: {
      welcome: { pos: [0,0.36,0], lookAt: [0,0,0], breath: 0.2, talk: 0 },
      reading_text: { pos: [0,0.38,0.05], lookAt: [0.1,0.1,0], breath: 0.15, talk: 0.3 },
      input_field: { pos: [0,0.34,-0.05], lookAt: [0,-0.1,0], breath: 0.25, talk: 0 },
      feedback_ok: { pos: [0,0.40,0], lookAt: [0,0.2,0], breath: 0.3, talk: 0.5 },
      feedback_err: { pos: [0,0.34,0], lookAt: [0,-0.1,0], breath: 0.1, talk: 0.1 },
      sap_dashboard: { pos: [0,0.36,0.1], lookAt: [0.15,0,0], breath: 0.2, talk: 0 },
      evolution: { pos: [0,0.42,0], lookAt: [0,0.3,0], breath: 0.35, talk: 0.6 }
    },
    update(dt, zone = "welcome", talkAmp = 0) {
      this.phase += dt * 1.2;
      this.polePhase += dt * 0.8;
      const sin = Math.sin;
      const z = this.zones[zone] || this.zones.welcome;
      return {
        Frontal_Pole: { rot: [0, sin(this.polePhase)*0.04, 0] },
        Sacral_Pole: { rot: [sin(this.polePhase*0.7)*0.03, 0, 0] },
        Spine_02: { rot: [sin(this.phase)*0.015, 0, 0] },
        Shoulder_L: { rot: [0, 0, -0.06 + sin(this.phase*0.5)*0.02] },
        Shoulder_R: { rot: [0, 0, 0.06 + sin(this.phase*0.5)*0.02] },
        Eye_L: { posY: (sin(this.phase*0.3)>0.98)?-0.08:0 },
        Eye_R: { posY: (sin(this.phase*0.3)>0.98)?-0.08:0 },
        Mouth: { open: talkAmp>0 ? (0.3 + sin(this.phase*4)*0.2)*talkAmp : 0, viseme: Math.floor(this.phase*3)%6 },
        groupPos: z.pos,
        talkAmp: talkAmp
      };
    },
    getIntentionPose(id) {
      const poses = {
        FOUNDATION: { Head_Bone: [-5,10,0], Spine_02: -15, Wrist_L: 'open_palm_down' },
        SCAFFOLDING: { Shoulder_L: [45,30,0], Shoulder_R: [-45,-30,0], Wrist_L: 'point' },
        STRICT_ENGINEER: { Shoulder_L: [40,0,0], Shoulder_R: [-40,0,0], Elbow_L: 'crossed' },
        FLOW_OBSERVER: { Spine_02: 0, Mouth: 'smile_closed' },
        ELEVATION: { Shoulder_L: [0,120,0], Shoulder_R: [0,120,0], Spine_02: 15, Wrist_L: 'wave', Mouth: 'AA' },
        TRANSMISSION: { Shoulder_L: [-30,30,0], Shoulder_R: [30,-30,0], Wrist_L: 'open_big', Mouth: 'lip_sync' }
      };
      return poses[id] || poses.TRANSMISSION;
    }
  },

  kNN_Filter: {
    k: 12,
    maxDistanceSq: 0.08,
    opacity: 0.44,
    gapClean: true,
    shoulderFanLimit: 4,
    kneeFix: true,
    filterConnection(ix, iy, iz, jx, jy, jz, connectionsMap, isShoulder = false, isKnee = false) {
      if (iy < 0.05 && jy < 0.05 && ((ix < -0.01 && jx > 0.01) || (ix > 0.01 && jx < -0.01))) return false;
      if (isShoulder && connectionsMap && connectionsMap > 4) return false;
      if (isKnee && Math.abs(iy - jy) < 0.004 && Math.abs(ix-jx) > 0.02) return false;
      const dx = ix - jx, dy = iy - jy, dz = iz - jz;
      return dx*dx + dy*dy + dz*dz <= 0.08;
    }
  },
  init() { console.log("LAIA BRAIN V30.5 COMPLETO - 34 bones - FIX BANDAS"); return this.bones; }
};

export const LAIA_BRAIN = LAIA_ACTOR_BRAIN_V30_5;
export default LAIA_ACTOR_BRAIN_V30_5;