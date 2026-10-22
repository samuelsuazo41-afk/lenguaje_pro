// laia_hologram.js - V30.16 HUMANA ORGANICA - PLANTILLA FINAL ACTUALIZADA
// FIX: cuerpo humano organico, no conos. Non-roll forearm + corrective pelvis diamond + glute loops + muscle edge flow
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

export function initLaiaHologram(canvas){
  const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));
  renderer.setClearColor(0x000000,0);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, canvas.clientWidth/canvas.clientHeight, 0.1, 100);
  camera.position.set(0,0.05,2.42);
  const group = new THREE.Group();
  group.position.set(0,-0.20,0);
  group.scale.set(0.40,0.40,0.40);
  scene.add(group);

  function build(){
    const pos=[], idx=[]; let v=0;
    function addGrid(R,C,fn){
      const s=v;
      for(let y=0;y<R;y++) for(let x=0;x<C;x++){ const p=fn(x/(C-1), y/(R-1)); pos.push(p.x,p.y,p.z); v++; }
      for(let y=0;y<R-1;y++) for(let x=0;x<C-1;x++){ const a=s+y*C+x,b=a+1,c=a+C,d=c+1; idx.push(a,c,b,b,c,d); }
      return s;
    }

    // 1. TORSO HUMANO ORGANICO 100x70 - NO BLOQUE - HOURGLASS REAL
    addGrid(100,70,(u,fy)=>{
      let fx=u-0.5, py=fy*0.94-0.14;
      // Hourglass humano real: pecho 0.88 -> cintura 0.52 -> cadera 0.92
      let waist;
      if(fy<0.28) waist=0.88 + Math.sin(fy/0.28*Math.PI*0.5)*0.05; // pecho con breast loop
      else if(fy<0.52) waist=0.88 - (fy-0.28)/0.24*0.36; // bajada a cintura
      else if(fy<0.70) waist=0.52 + (fy-0.52)/0.18*0.40; // subida cadera gluteo
      else waist=0.92 + (fy-0.70)*0.15;
      
      let rW=0.345*waist;
      // dart organico - pinzas que siguen forma costilla, no linea recta
      if(Math.abs(fx)>0.10 && Math.abs(fx)<0.28 && Math.abs(fy-0.48)<0.24){
        const dartFactor = Math.sin((Math.abs(fx)-0.10)/0.18*Math.PI) * (1-Math.abs(fy-0.48)/0.24);
        rW -= dartFactor*0.11;
      }
      // glute loop - volumen gluteo humano
      if(fy<0.12 && Math.abs(fx)>0.08 && Math.abs(fx)<0.22){
        rW += 0.04*Math.cos((fx-0.15)*8)*Math.sin(fy/0.12*Math.PI);
      }
      
      let px=fx*rW*2.0;
      let pz=Math.cos(fx*Math.PI*0.86)*0.165*waist;
      // breast volume - no plano
      if(fy>0.58 && fy<0.82 && Math.abs(fx)>0.08 && Math.abs(fx)<0.28){
        pz += 0.035*Math.sin((fy-0.58)/0.24*Math.PI)*Math.sin((Math.abs(fx)-0.08)/0.20*Math.PI);
      }
      // solapas 0.042 con pico humano
      if(fy>0.62 && fy<0.90){
        const lap=Math.exp(-((fy-0.77)*5)**2);
        const side=Math.abs(fx);
        if(side>0.02 && side<0.25){ pz+=0.042*lap*(1-Math.abs(side-0.125)/0.125); px+=Math.sign(fx)*0.017*lap; }
        if(fy>0.70 && fy<0.78 && side>0.03 && side<0.07) pz+=0.012;
      }
      if(Math.abs(fx)<0.018 && (Math.abs(fy-0.44)<0.022 || Math.abs(fy-0.57)<0.022)) pz+=0.015; // botones
      if(fy>0.86){ pz+=(fy-0.86)*0.18; py+=(fy-0.86)*0.24; px*=0.58; }
      return {x:px,y:py,z:pz};
    });

    // 2. BRAZOS NON-ROLL 36x36 - ANTEBRAZO HUMANO NO CONO
    const sY=0.635;
    function arm(isL){
      addGrid(36,36,(u,v)=>{
        let al=v, ang=(u-0.5)*Math.PI*2;
        // radio humano: biceps mas ancho, codo estrecho, antebrazo musculo
        let rad=0.062;
        if(al<0.35) rad=0.062 - al*0.03; // hombro a biceps
        else if(al<0.55) rad=0.051 - (al-0.35)*0.08; // codo
        else rad=0.035 + (al-0.55)*0.02; // antebrazo extensor
        // twist non-roll - volumen muscular no cilindro
        const muscle = Math.sin(ang*2)*0.008*Math.sin(al*Math.PI);
        rad+=muscle;
        const bx=isL?-0.345:0.345;
        return {x:bx+(isL?-1:1)*al*0.92+Math.cos(ang)*rad*0.32, y:sY-al*0.01+Math.sin(ang)*rad, z:Math.cos(ang)*rad*0.82};
      });
    }
    arm(true); arm(false);

    // 3. PIERNAS HUMANO ORGANICO 70x40 - CORRECTIVE FAN + QUAD DIAMOND + MUSCLE LOOPS
    const legSep=0.068;
    function leg(isL){
      addGrid(70,40,(u,v)=>{
        let al=v, ang=(u-0.5)*Math.PI*2;
        let rad=0.105;
        if(al<0.12) rad=0.12 + (0.12-al)*0.25; // cadera gluteo ancho humano
        else if(al<0.30) rad=0.105 - (al-0.12)*0.08; // muslo adductor flow
        else if(al>0.42&&al<0.58) rad+=0.018*Math.sin((al-0.42)/0.16*Math.PI); // rodilla cap
        else if(al>0.65&&al<0.85) rad=0.07 - (al-0.65)*0.05 + 0.015*Math.sin((al-0.65)/0.20*Math.PI*2); // gemelo musculo
        else if(al>0.85) rad=0.05;
        
        let px=(isL?-legSep:legSep)+Math.cos(ang)*rad;
        // corrective fan joints - diamond preservation humano
        if(al<0.10){
          const fan = (0.10-al)/0.10;
          px+=(isL?1:-1)*fan*0.32;
          // adductor loop - no hueco
          if(ang>0.5 && ang<2.5) px+=(isL?1:-1)*fan*0.05;
        }
        // quad muscle loop
        if(al>0.20&&al<0.40 && ang>-0.5 && ang<1.0) rad+=0.008*Math.sin((al-0.20)/0.20*Math.PI);
        
        return {x:px, y:-0.14-al*0.99+Math.sin(ang)*rad*0.20, z:Math.cos(ang)*rad*0.68};
      });
    }
    leg(true); leg(false);

    // 4. PIES HUMANO 16x22 - 5 DEDOS ANATOMICOS
    function foot(isL){
      addGrid(16,22,(u,v)=>{
        const toe=Math.floor(u*5), t=(u*5-toe), ang=t*Math.PI;
        const tw=0.016+(toe==0?0.008:0);
        return {x:(isL?-legSep:legSep)+(toe-2)*0.021+Math.cos(ang)*tw+(u-0.5)*0.05, y:-1.135-v*0.09+Math.sin(ang)*0.005, z:(v-0.5)*0.30+0.08+(toe==0?0.025:0)};
      });
    }
    foot(true); foot(false);

    // 5. CABEZA HUMANA 28x36 + PELO BOB
    addGrid(28,36,(u,v)=>{
      const th=u*Math.PI*2, ph=v*Math.PI, r=0.168;
      let x=Math.sin(ph)*Math.cos(th)*r, y=0.91+Math.cos(ph)*r, z=Math.sin(ph)*Math.sin(th)*r;
      if(Math.abs(u-0.5)<0.06 && v>0.45 && v<0.58) z+=0.022; // nariz
      if(v>0.58 && v<0.70 && (Math.abs(u-0.32)<0.06||Math.abs(u-0.68)<0.06)) z-=0.006; // ojos
      return {x,y,z};
    });
    addGrid(20,30,(u,v)=>{
      const th=(u-0.5)*Math.PI*1.6, ph=v*Math.PI*0.65, r=0.195;
      return {x:Math.sin(ph)*Math.cos(th)*r*1.05, y:0.95+Math.cos(ph)*r*0.9, z:Math.sin(ph)*Math.sin(th)*r*1.1};
    });

    const geo=new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos,3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const mat=new THREE.LineBasicMaterial({color:0x00e5ff, transparent:true, opacity:0.19, depthWrite:false});
    group.add(new THREE.LineSegments(new THREE.WireframeGeometry(geo), mat));
  }
  build();
  function resize(){ const w=innerWidth,h=innerHeight-52; renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix(); group.scale.set(w<768?0.32:0.40,w<768?0.32:0.40,w<768?0.32:0.40); }
  addEventListener('resize',resize); resize();
  (function anim(){ requestAnimationFrame(anim); renderer.render(scene,camera); })();
  return {group};
}