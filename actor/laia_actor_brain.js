// actor/laia_actor_brain.js - V30.21 FINAL BEST TEMPLATE - 90x70 BLAZER 0.042 + PANTALÓN + OXFORDS - WAIST 0.52->0.146
// COMPATIBLE CON laia_hologram.js V30.21 + LAYA_FINAL_COMPLETO.js V30.21

export const LAIA_ACTOR_BRAIN = {
  version: "30.21 FINAL BEST TEMPLATE - 0.58 - 0.38 - WAIST 0.52->0.146 - DIAMOND CLOSED",

  createLaiaSkeleton(THREE, group){
    const bones=[];
    const mk=(name,pos,parent)=>{
      const b=new THREE.Bone();
      b.name=name;
      b.position.copy(pos);
      parent.add(b);
      bones.push(b);
      return b;
    };

    // HIPS ROOT - gap 0.068 cerrado
    const hips=mk('Hips', new THREE.Vector3(0,0,0), group);
    const spine02=mk('Spine_02', new THREE.Vector3(0,0.18,0), hips);
    const chest=mk('Chest', new THREE.Vector3(0,0.22,0), spine02);
    const head=mk('Head_Bone', new THREE.Vector3(0,0.22,0), chest);
    
    // BRAZOS T-POSE 0.92 SOLDADOS
    mk('Shoulder.L', new THREE.Vector3(-0.31,0.15,0), chest);
    mk('Shoulder.R', new THREE.Vector3(0.31,0.15,0), chest);
    
    // PIERNAS GAP 0.068 CLOSED
    mk('Hip.L', new THREE.Vector3(-0.068,-0.18,0), hips);
    mk('Hip.R', new THREE.Vector3(0.068,-0.18,0), hips);
    mk('Knee.L', new THREE.Vector3(0,-0.42,0), bones.find(b=>b.name==='Hip.L'));
    mk('Knee.R', new THREE.Vector3(0,-0.42,0), bones.find(b=>b.name==='Hip.R'));

    const skeleton=new THREE.Skeleton(bones);
    return { bones, skeleton, hips, spine02, chest, head };
  },

  thinkAndMove(bones, ctx={}){
    if(!bones || !bones.length) return;
    const t=performance.now()*0.001;

    const hips=bones.find(b=>b.name==='Hips');
    const head=bones.find(b=>b.name==='Head_Bone');
    const spine=bones.find(b=>b.name==='Spine_02');
    const chest=bones.find(b=>b.name==='Chest');
    const shoulderL=bones.find(b=>b.name==='Shoulder.L');
    const shoulderR=bones.find(b=>b.name==='Shoulder.R');

    // RESPIRACIÓN SUAVE 0.003 - V30.21
    if(hips) hips.position.y=Math.sin(t*0.7)*0.003;

    // CABEZA - bob humanoide + mirada al leer
    if(head){
      head.rotation.y=Math.sin(t*0.32)*0.10;
      head.rotation.x=ctx.reading ? -0.12 + Math.sin(t*0.5)*0.01 : Math.sin(t*0.26)*0.02;
      head.rotation.z=Math.sin(t*0.18)*0.015;
    }

    // CHEST - leve balanceo flow
    if(chest){
      chest.rotation.y=Math.sin(t*0.24)*0.04;
      chest.rotation.x=Math.sin(t*0.31)*0.01;
    }

    // SPINE - cintura 0.52->0.146 curvas suaves
    if(spine){
      spine.rotation.y=Math.sin(t*0.28)*0.03;
    }

    // HOMBROS - T-POSE 0.92 best template
    if(shoulderL && ctx.celebrating){
      shoulderL.rotation.x=Math.sin(t*2.2)*0.15;
    }
    if(shoulderR && ctx.celebrating){
      shoulderR.rotation.x=Math.sin(t*2.2)*0.15;
    }

    // INTENTION MOTOR V30.21
    if(ctx.joints){
      Object.entries(ctx.joints).forEach(([name, rot])=>{
        const b=bones.find(x=>x.name===name || x.name===name.replace('_','.') || x.name.includes(name));
        if(b && Array.isArray(rot)){
          b.rotation.x+=rot[0]*0.001;
          b.rotation.y+=rot[1]*0.001;
          b.rotation.z+=rot[2]*0.001;
        }
      });
    }
  },

  // DECIDE FRAME POR MÉTRICAS - V30.21
  decideFrame(metrics={}){
    if(metrics.same_error_count>=3) return { emotion: "STRICT_ENGINEER", state: "HOLO_STRICT" };
    if(metrics.streak_days>=7 || metrics.level_up) return { emotion: "ELEVATION", state: "HOLO_CELEB" };
    if(metrics.hesitation_ms>4000) return { emotion: "SCAFFOLDING", state: "HOLO_EXPLAIN" };
    return { emotion: "TRANSMISSION", state: "HOLO_OPEN" };
  }
};

export const LAIA_BRAIN = LAIA_ACTOR_BRAIN;
export default LAIA_ACTOR_BRAIN;