{
  "actor_version": "V30.5 DEFINITIVO SKINNY GAP CLEAN - FIX BANDAS RODILLA - 22 RADIALES - SHOULDER LIMIT 4 - 0.11 WAIST",
  "type": "mesh_real_skinned_topological_particle_triangulated_flow_poles_v30_5_gap_clean_fix_bandas_definitive",
  "status": "full_body_skinned_particle_kNN12_triangulated_quad_dense_knees_5_loops_22_radiales_gap_clean_0.11_shoulder_fan_limit_4_fix_bandas_V30.5",
  "base_image": "wa_image_topological_ref_definitiva_skinny_particle_triangulated_v30_5_definitiva_gap_clean_3_mallas_fix_bandas",
  "rig": {
    "joints": 34,
    "hidden_skeleton": false,
    "skeleton_type": "Skeleton_34_Bones_Binded_SkinnedMesh_Flow_Poles_GAP_CLEAN_V30.5",
    "head": "Head_Bone + Frontal_Pole + Eye_L + Eye_R + Iris_L + Iris_R + Mouth + Jaw - sphere 18 + iris + 6 visemes",
    "bones_list": ["Hips","Spine_02","Chest","Neck","Head_Bone","Frontal_Pole","Eye_L","Iris_L","Eye_R","Iris_R","Mouth","Jaw","Shoulder.L","Elbow.L","Wrist.L","Hand.L","Shoulder.R","Elbow.R","Wrist.R","Hand.R","Sacral_Pole","Hip.L","Knee.L","Ankle.L","Toe.L","Hip.R","Knee.R","Ankle.R","Toe.R","Button_Node_01","Button_Node_02","Pocket_Node_L","Pocket_Node_R"],
    "poles": {
      "frontal_pole": "Frontal_Pole (0,0.04,0.09) origen radial 8 - V30.5 sin hairball",
      "sacral_pole": "Sacral_Pole (0,-0.02,-0.04) cierre cintura 0.11",
      "interruption_nodes": "Button_Node_01 (0.01,0.22,0.18) + Button_Node_02 (0.01,0.08,0.18) + Pocket_Node_L (-0.14,0.07,0.17) + Pocket_Node_R (0.14,0.07,0.17)"
    },
    "flow_topological": {
      "origin": "Frontal_Pole radial 8",
      "convergence_waist": "pecho 0.336 -> cintura 0.11 scale_x 0.62 scale_z 0.58 + 45deg",
      "knee_change": "V30.5 FIX BANDAS: vertical muslo -> 5 loops horizontales pero con filtro anti-banda: solo deja radial 22 + vertical, bloquea anillo puro horizontal",
      "gap_clean": "V30.5: leg_separation 0.134 + thigh_gap 0.11 + filter: if(iy<0.05 && jy<0.05 && piernaIzq!=piernaDer) continue",
      "shoulder_fix": "V30.5: shoulderFanLimit 4 + rotation z -0.06/0.06 open fan"
    },
    "feminine_params": {
      "waist": 0.11,
      "waist_factor": 0.62,
      "hips": 0.32,
      "chest": 0.336,
      "shoulders": 0.336,
      "thigh_gap": 0.11,
      "leg_separation": 0.134,
      "scale": 0.54,
      "mobile_scale": 0.50,
      "z_scale_waist": 0.58,
      "note": "V30.5 DEFINITIVO - waist 0.11 real - leg 0.134 gap 0.11 visible - shoulder limit 4 - fix bandas rodilla"
    }
  },
  "mesh": {
    "points_count": 3200,
    "type": "skinned_topological_particle_triangulated_kNN12_flow_poles_gap_clean_v30_5_fix_bandas_hd",
    "color": "#00e5ff",
    "size": 0.012,
    "opacity": 0.92,
    "blending": "AdditiveBlending",
    "sizeAttenuation": true,
    "skinnedMesh": true,
    "skeleton": true,
    "bindMode": "attached",
    "mallas_3_superpuestas": {
      "malla_1_puntos_glow": "3200 puntos size 0.012 opacity 0.92 #00e5ff",
      "malla_2_lineas_kNN": "V30.5 FIX: kNN 12 maxDistanceSq 0.08 gapClean true shoulderFanLimit 4 kneeFix anti-banda - NO cruces piernas - NO hairball - NO bandas horizontales puras",
      "malla_3_quad_denso": "V30.5: Solo rodillas + cara + pies - rodillas 5 loops + 22 radiales CIRCULO PERFECTO - opacity 0.32"
    },
    "lines": {
      "enabled": true,
      "type": "kNN_Flow_Poles_Triangulated_Particle_GAP_CLEAN_V30.5",
      "method": "kNN_12_maxDistanceSq_0.08_gapClean_true_shoulderFanLimit_4_kneeFix_anti_banda",
      "color": "#00e5ff",
      "opacity": 0.44,
      "gap_clean": "V30.5 - if(iy<0.05 && jy<0.05 && piernaIzq!=piernaDer) continue",
      "shoulder_fix": "V30.5 - if(isShoulder && connections>4) continue",
      "knee_fix": "V30.5 DEFINITIVO FIX BANDAS: if(isKnee && abs(iy-jy)<0.004 && abs(ix-jx)>0.02) continue - bloquea anillos horizontales puros rodilla, deja solo radiales 22 + verticales",
      "note": "V30.5 - líneas finas trianguladas - gap clean - 22 radiales rodilla - sin bandas"
    },
    "mesh_real_profile": {
      "torso": "CylinderGeometry(0.195,0.18,0.56,32,28)_SkinnedMesh_Spine_02_Chest_flow_poles_convergence_0.62_hd",
      "legs": "2x CylinderGeometry(0.092,0.046,0.80,24,28)_SKINNED_Hip_L_R_Knee_L_R_flow_triangulated_open_gap_0.11_clean_V30.5 - muslo abierto 0.08-0.12 líneas largas - gap clean - rodilla 5 loops 22 radiales",
      "knees_dense": "V30.5 DEFINITIVO FIX BANDAS: 5_loops_horizontales_Y_-0.15_a_-0.35 + 22_radiales CIRCULO PERFECTO - CylinderGeometry(0.068,0.062,0.14,22,5,true) - filtro anti-banda integrado",
      "arms": "2x CylinderGeometry(0.044,0.031,0.72,16,16)_SKINNED_Shoulder_L_R_Elbow_L_R_triangulated_open_limit4",
      "head": "SphereGeometry(0.11,20,20)_hd_flow_polo_frontal_radial_8",
      "skinned": true,
      "flow": true,
      "poles": true,
      "particle": true,
      "gap_clean": true,
      "knee_fix": true
    }
  },
  "camera": {
    "fov": 36,
    "position": [0.0, 0.34, 1.62],
    "mobile_position": [0.0, 0.30, 1.88],
    "group_scale": [0.54, 0.54, 0.54],
    "mobile_scale": [0.50, 0.50, 0.50],
    "group_position": [0.0, 0.36, 0],
    "mobile_group_position": [0.0, 0.32, 0],
    "filter": "contrast(1.28) brightness(1.20) saturate(1.14) drop-shadow(0 0 12px rgba(0,229,255,0.70))",
    "hologram_filter": "drop-shadow(0 0 36px rgba(0,229,255,0.62)) drop-shadow(0 0 70px rgba(0,212,255,0.38))"
  },
  "motor_intuicion": {
    "type": "skinned_pin_pan_topological_motor_flow_poles_particle_gap_clean_v30_5_fix_bandas_hd",
    "is_motor": true,
    "moves_app": true,
    "is_skinned": true,
    "is_rigged": true,
    "is_flow": true,
    "is_poles": true,
    "is_particle": true,
    "is_gap_clean": true,
    "is_knee_fix": true,
    "zones": ["welcome", "reading_text", "input_field", "feedback_ok", "feedback_err", "sap_dashboard", "evolution"]
  }
}