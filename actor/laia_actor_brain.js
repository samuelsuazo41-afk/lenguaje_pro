{
  "actor_version": "V30.4 DEFINITIVO SKINNY GAP CLEAN - 5 LOOPS RODILLA CIRCULO PERFECTO - 0.11 WAIST",
  "type": "mesh_real_skinned_topological_particle_triangulated_flow_poles_v30_4_gap_clean_definitive",
  "status": "full_body_skinned_particle_kNN12_triangulated_quad_dense_knees_5_loops_22_radiales_gap_clean_0.11_shoulder_fan_limit_4",
  "base_image": "wa_image_topological_ref_definitiva_skinny_particle_triangulated_v30_4_definitiva_gap_clean_3_mallas",
  "rig": {
    "joints": 34,
    "hidden_skeleton": false,
    "skeleton_type": "Skeleton_34_Bones_Binded_SkinnedMesh_Flow_Poles_GAP_CLEAN_V30.4",
    "head": "Head_Bone + Frontal_Pole + Eye_L + Eye_R + Iris_L + Iris_R + Mouth + Jaw - sphere 18 + iris + 6 visemes - polo frontal origen flujo",
    "face": "eyes_0.018_white_iris_0.0085_mouth_capsule_0.006_viseme_6_topological_rigged_flow_radial_8_hd - desde polo frontal",
    "body": "SkinnedMesh_topological_particle_triangulated_3_mallas_flow_GAP_CLEAN: Points_0.012_glow_0.92 + kNN_12_lines_0.08_shoulder_limit_4 + Quad_dense_knees_5_loops_22_radiales_blazer_28_segments + 2_lapels_nodes + 2_buttons_nodes_torus + 2_pockets_nodes_box + 2_legs_triangulated_open_gap_0.11_clean + feet_5_toes_bifurcation + hands + poles",
    "bones_list": ["Hips","Spine_02","Chest","Neck","Head_Bone","Frontal_Pole","Eye_L","Iris_L","Eye_R","Iris_R","Mouth","Jaw","Shoulder.L","Elbow.L","Wrist.L","Hand.L","Shoulder.R","Elbow.R","Wrist.R","Hand.R","Sacral_Pole","Hip.L","Knee.L","Ankle.L","Toe.L","Hip.R","Knee.R","Ankle.R","Toe.R","Button_Node_01","Button_Node_02","Pocket_Node_L","Pocket_Node_R"],
    "poles": {
      "frontal_pole": "Frontal_Pole - forehead (0,0.04,0.09) - origen flujo topológico - radial 8 radios - se ve en imagen definitiva frente - V30.4 respira sin hacer hairball",
      "sacral_pole": "Sacral_Pole - sacrum (0,-0.02,-0.04) - segundo origen - espalda baja - cierra flujo cintura 0.11",
      "interruption_nodes": "Button_Node_01 (0.01,0.22,0.18) + Button_Node_02 (0.01,0.08,0.18) + Pocket_Node_L (-0.14,0.07,0.17) + Pocket_Node_R (0.14,0.07,0.17) - donde mueren 8-10 líneas - V30.4 shoulder fan limitado a 4 conexiones"
    },
    "flow_topological": {
      "origin": "Frontal_Pole forehead - radial 8 radios saliendo - imagen definitiva polo frente",
      "convergence_waist": "Todas líneas pecho 0.336 convergen hacia centro cintura 0.11 + cambio dirección 45deg - hourglass sin arruga - V30.4 colapso z 0.58 + scale x 0.62",
      "knee_change": "Flujo vertical muslo -> horizontal 5 loops rodilla - giro 90deg - V30.4 círculo perfecto 22 radiales + 5 loops - NO 16",
      "termination_feet": "Flujo bifurca 5 ramas - cada dedo cluster propio con polo - 5 terminaciones",
      "gap_clean": "V30.4 FIX DEFINITIVO: leg_separation 0.134 + thigh_gap 0.11 real + filter kNN: if(iy<0.05 && jy<0.05 && piernaIzq && piernaDer) continue - cero conexiones entre piernas - gap limpio triangulación abierta",
      "shoulder_fix": "V30.4 FIX HAIRBALL: shoulderFanLimit 4 + rotation Shoulder.L/R z 0.06 y 0.04 - abre abanico - no más bola cyan gigante pecho"
    },
    "feminine_params": {
      "waist": 0.11,
      "waist_factor": 0.62,
      "hips": 0.32,
      "chest": 0.336,
      "shoulders": 0.336,
      "thigh_gap": 0.11,
      "leg_separation": 0.134,
      "scale": 0.52,
      "mobile_scale": 0.50,
      "z_scale_waist": 0.58,
      "note": "V30.4 DEFINITIVO - waist 0.11 real flow - leg 0.134 para gap 0.11 visible - shoulder fan limit 4 para no hairball"
    },
    "t_pose": "full_body_skinned_T_pose_flow_poles_legs_0.134_gap_0.11_clean_arms_0.50_span_hands_box_feet_5_toes_bifurcation_rigged_binded_particle_gap_clean",
    "weight_painting": {
      "method": "skinIndex_skinWeight_4_influences_per_vertex_flow_poles_gap_clean",
      "torso": "Spine_02 + Chest 100% + Button_Nodes + Pocket_Nodes - flujo converge - V30.4 open fan",
      "head": "Head_Bone + Frontal_Pole 100% - origen radial",
      "arms": "Shoulder.L/R + Elbow.L/R - triangulación abierta - V30.4 limit 4",
      "legs": "Hip.L/R + Knee.L/R + Ankle.L/R - muslo abierto rodilla 5 loops 22 radiales gap clean",
      "poles": "Frontal_Pole + Sacral_Pole - polos origen flujo - no chicle",
      "note": "V30.4 DEFINITIVO - gap clean + shoulder fan fix - 3 mallas - particle triangulated"
    }
  },
  "mesh": {
    "points_count": 3200,
    "type": "skinned_topological_particle_triangulated_kNN12_flow_poles_gap_clean_v30_4_definitive_hd",
    "color": "#00e5ff",
    "size": 0.012,
    "opacity": 0.92,
    "blending": "AdditiveBlending",
    "sizeAttenuation": true,
    "material": "PointsMaterial_size_0.012_opacity_0.92_sizeAttenuation_true_glow_particle_definitive_V30.4",
    "skinnedMesh": true,
    "skeleton": true,
    "bindMode": "attached",
    "mallas_3_superpuestas": {
      "malla_1_puntos_glow": "3200 puntos - size 0.012 - opacity 0.92 - color #00e5ff - sizeAttenuation true - AdditiveBlending - V30.4 glow definitivo",
      "malla_2_lineas_kNN": "V30.4 FIX: kNN 12 + maxDistanceSq 0.08 + gapClean true + shoulderFanLimit 4 - triangulación irregular fina - líneas largas muslos 0.08-0.12 separadas - cortas cintura 0.11 - NO cruces entre piernas - opacity 0.44",
      "malla_3_quad_denso": "V30.4 DEFINITIVO: Solo rodillas + cara + pies - rodillas 5 loops horizontales + 22 radiales CIRCULO PERFECTO - cara grid denso ojos boca - pies 5 clusters dedos separados - opacity 0.32 wireframe"
    },
    "hair": {
      "color": "#c9a88a",
      "size": 0.007,
      "opacity": 0.82,
      "geom": "SphereGeometry(0.115,14,14,0,6.28,0,1.95)_bob_casco_particulas",
      "count": 85,
      "type": "particulas_casco_bob_no_sphere_recortada",
      "attached_to": "Head_Bone",
      "note": "V30.4 - pelo bob 85 partículas casco con conexiones cortas - volumen real"
    },
    "lines": {
      "enabled": true,
      "type": "kNN_Flow_Poles_Triangulated_Particle_GAP_CLEAN_V30.4",
      "method": "kNN_12_maxDistanceSq_0.08_gapClean_true_shoulderFanLimit_4",
      "color": "#00e5ff",
      "opacity": 0.44,
      "linewidth": 1,
      "is_skinned": false,
      "is_particle_flow": true,
      "flow": true,
      "poles": true,
      "gap_clean": "V30.4 DEFINITIVO - No conexiones entre piernas - gap 0.11 limpio - if(iy<0.05 && jy<0.05 && piernaIzq && piernaDer) continue",
      "shoulder_fix": "V30.4 - shoulderFanLimit 4 - no más hairball pecho",
      "note": "V30.4 DEFINITIVO - líneas finas trianguladas irregulares - gap clean - 22 radiales rodilla circulo perfecto"
    },
    "mesh_real_profile": {
      "torso": "CylinderGeometry(0.195,0.18,0.56,32,28)_SkinnedMesh_Spine_02_Chest_flow_poles_convergence_0.62_hd_V30.4 - colapso z 0.58 - 32 segmentos para flow fino",
      "torso_deform": [
        { "y": ">0.22", "scale_x": 1.12, "scale_z": 1.05, "label": "hombros 0.336 TOPOLOGICAL FLOW - Shoulder.L/R - flujo origen frontal pole - V30.4 open fan 4 conexiones", "flow": "radial desde frontal pole limitado" },
        { "y": ">0.02", "scale_x": 0.62, "scale_z": 0.58, "label": "cintura 0.11 REAL FLOW - Spine_02 + Sacral_Pole - convergencia 45deg - hourglass sin arruga - V30.4 DEFINITIVO", "flow": "todas líneas pecho convergen centro + 45deg dirección" },
        { "y": ">-0.12", "scale_x": 0.97, "scale_z": 0.92, "label": "cadera 0.32 TOPOLOGICAL FLOW - Hips + Sacral_Pole", "flow": "vuelve quad" },
        { "y": "<=-0.12", "scale_x": 0.92, "label": "bajo blazer TOPOLOGICAL FLOW", "flow": "terminación" }
      ],
      "lapels": "2x PlaneGeometry(0.08,0.28,6,10)_rotated_0.32rad_blazer_lapels_nodes_interruption_8-10_lines_hd",
      "buttons": "2x TorusGeometry(0.011,0.0025,12,20)_blazer_buttons_nodes_where_8-10_lines_die",
      "pockets": "2x BoxGeometry(0.075,0.038,0.012,6,3,1)_blazer_pockets_nodes_interruption_hd",
      "legs": "2x CylinderGeometry(0.092,0.046,0.80,24,28)_SKINNED_Hip_L_R_Knee_L_R_flow_triangulated_open_gap_0.11_clean_V30.4 - muslo triangulación abierta puntos separados 0.08-0.12 líneas largas cruzadas - gap clean sin cruces - rodilla 5 loops + 22 radiales círculo perfecto",
      "knees_dense": "V30.4 DEFINITIVO: 5_loops_horizontales_juntos_Y_-0.15_a_-0.35 + 22_radiales - quad denso puro - círculo perfecto imagen definitiva - 90deg cambio dirección vertical->horizontal - CylinderGeometry(0.068,0.062,0.14,22,5,true)",
      "feet": "2x BoxGeometry(0.055,0.04,0.19,8,3,10)_box_feet_with_5_toes_clusters_bifurcation_flow_5_terminaciones",
      "arms": "2x CylinderGeometry(0.044,0.031,0.72,16,16)_SKINNED_Shoulder_L_R_Elbow_L_R_triangulated_open - V30.4 shoulder fan limit 4 - no hairball",
      "hands": "2x BoxGeometry(0.05,0.02,0.08,4,2,3)_box_hands_skinned_Wrist_L_R",
      "head": "SphereGeometry(0.11,20,20)_hd_realistic_face_flow_polo_frontal_radial_8_radios - polo frente origen todo",
      "morphTargets": "6_visemes_Mouth_A_I_U_E_O_CLOSED_for_lip_sync_flow_poles",
      "no_lathe": false,
      "no_capsule": true,
      "no_chicle": true,
      "skinned": true,
      "flow": true,
      "poles": true,
      "particle": true,
      "gap_clean": true,
      "note": "V30.4 DEFINITIVO GAP CLEAN - 3 mallas - Malla 1 puntos 0.012 opacity 0.92 + Malla 2 kNN 12 gapClean shoulderLimit 4 + Malla 3 quad denso rodillas 5 loops 22 radiales circulo perfecto - imagen definitiva clonada sin bola pecho"
    },
    "sampling": {
      "method": "skinned_weight_painting_flow_poles_particle_kNN_gap_clean_V30.4",
      "total_points": 3200,
      "distribution": {
        "body_cylinder_topological_flow_Spine_02_Chest_32_segments": "vertices_torso_32_segments_flow_poles_convergence_0.62_V30.4_fino",
        "lapels_nodes_interruption": 120,
        "buttons_nodes_poles": 60,
        "pockets_nodes_interruption": 80,
        "head_flow_frontal_pole_radial_8": 450,
        "face_eyes_white_iris_radial": 120,
        "face_iris_flow": 80,
        "face_mouth_morph_visemes": 40,
        "arms_cylinder_triangulated_open_Shoulder_Elbow_shoulderLimit4": 500,
        "hands_box_Wrist": 80,
        "legs_cylinder_triangulated_open_Hip_Knee_gap_clean_24_28": 900,
        "knees_quad_dense_5_loops_22_radiales_circulo_perfecto_V30.4": 320,
        "feet_box_5_toes_bifurcation_clusters": 180,
        "hair_bob_particulas_casco_Head_Bone": 85,
        "lines_kNN_12_maxDistance_0.08_gapClean_shoulderLimit4": "~2800 conexiones - V30.4 sin cruces piernas - sin hairball hombro - finas trianguladas"
      }
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
    "hologram_filter": "drop-shadow(0 0 36px rgba(0,229,255,0.62)) drop-shadow(0 0 70px rgba(0,212,255,0.38))",
    "note": "V30.4 DEFINITIVO - camara 1.62/1.88 + escala 0.54/0.50 = cabe entera cabeza 0.68 pies -0.70 visible - T-pose no se corta mobile - gap clean visible"
  },
  "motor_intuicion": {
    "type": "skinned_pin_pan_topological_motor_flow_poles_particle_gap_clean_v30_4_definitivo_hd",
    "is_motor": true,
    "moves_app": true,
    "is_skinned": true,
    "is_rigged": true,
    "is_flow": true,
    "is_poles": true,
    "is_particle": true,
    "is_gap_clean": true,
    "zones": ["welcome", "reading_text", "input_field", "feedback_ok", "feedback_err", "sap_dashboard", "evolution"],
    "thinkAndMove_params": {
      "reading": true,
      "talkAmp": "0.3 + sin(t*4)*0.2",
      "breathing": "Spine_02_Y_skinned + Frontal_Pole_Z + Sacral_Pole_X - flujo respira - Shoulder.L/R open fan",
      "bones": "Head_Bone_Frontal_Pole_Eye_L_R_Iris_L_R_Mouth_Jaw_Shoulder.L_Shoulder_fix_open_fan_Elbow.L_Wrist.L_Hand.L_Shoulder.R_Elbow.R_Wrist.R_Hand.R_Hip.L_Knee.L_Ankle.L_Toe.L_Hip.R_Knee.R_Ankle.R_Toe.R_Sacral_Pole_Button_Node_01_02_Pocket_Node_L_R - 34 bones flow poles gap clean V30.4",
      "poles_breathing": "Frontal_Pole rotation.y sin(polePhase)*0.04 + Sacral_Pole rotation.x sin(polePhase*0.7)*0.03 - polos respiran - shoulders rotation.z 0.06 open",
      "gap_clean_logic": "kNN filter: if(iy<0.05 && jy<0.05 && ((ix<-0.01 && jx>0.01)||(ix>0.01 && jx<-0.01))) continue",
      "shoulder_fix_logic": "Shoulder.L rotation.z -0.06 y 0.04 + Shoulder.R rotation.z 0.06 y -0.04 + kNN shoulderFanLimit 4"
    }
  }
}