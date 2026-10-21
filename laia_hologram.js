// laia_hologram.js - V30.15 PLANTILLA TOTAL FINAL - CLON 1:1 V27.0 HD
// BASE: tu V30.14 100x70 - FIX: waist bezier 0.88->0.52->0.80 + dart + solapas 0.042 pico + diamond luminoso + rodilla + 5 dedos + head face
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

  const bones = {};
  ['Hips','Spine_02','Chest','Head_Bone','Shoulder.L','Shoulder.R','Hip.L','Hip.R'].forEach(n=>{
    bones[n]=new THREE.Group(); bones[n].name=n; group.add(bones[n]);
  });

  function build(){
    const pos=[], idx=[]; let v=0;
    function addGrid(R,C,fn){
      const s=v;
      for(let y=0;y<R;y++) for(let x=0;x<C;x++){
        const p=fn(x/(C-1), y/(R-1)); pos.push(p.x,p.y,p.z); v++;
      }
      for(let y=0;y<R-1;y++) for(let x=0;x<C-1;x++){
        const a=s+y*C+x,b=a+1,c=a+C,d=c+1; idx.push(a,c,b,b,c,d);
      }
      return s;
    }

    // 1. TORSO 100x70 - PLANTILLA REAL - BEZIER SUAVE NO BLOQUE
    addGrid(100,70,(u,fy)=>{
      let fx=u-0.5;
      let py=fy*0.94-0.14;
      let waist;
      if(fy<0.32) waist=0.88; 
      else if(fy<0.52) waist=0.88-(fy-0.32)/0.20*0.36; // 0.88->0.52 suave
      else if(fy<0.72) waist=0.52+(fy-0.52)/0.20*0.28; // 0.52->0.80
      else waist=0.80+(fy-0.72)*0.38;
      
      let rW=0.345*waist;
      // dart lines pinzas blazer plantilla - 2 lineas verticales
      if(Math.abs(fx)>0.11 && Math.abs(fx)<0.27 && Math.abs(fy-0.48)<0.22){
        rW-=(0.22-Math.abs(fy-0.48))*0.13*Math.sin((Math.abs(fx)-0.11)/0.16*Math.PI);
      }
      let px=fx*rW*2.0;
      let pz=Math.cos(fx*Math.PI*0.86)*0.165*waist;

      // SOLAPAS 0.042 CON PICO - CLON V27
      if(fy>0.62 && fy<0.90){
        const lap=Math.exp(-Math.pow((fy-0.77)*5.0,2));
        const side=Math.abs(fx);
        if(side>0.02 && side<0.25){
          pz+=0.042*lap*(1-Math.abs(side-0.125)/0.125);
          px+=Math.sign(fx)*0.017*lap;
        }
        if(fy>0.70 && fy<0.78 && side>0.03 && side<0.07) pz+=0.012; // pico solapa
      }
      // BOTONES 0.015 - 2 botones
      if(Math.abs(fx)<0.018 && (Math.abs(fy-0.44)<0.022 || Math.abs(fy-0.57)<0.022)) pz+=0.015;
      // BOLSILLOS TAPA
      if(Math.abs(fx)>0.19 && Math.abs(fx)<0.35 && fy>0.20 && fy<0.305){
        pz+= fy>0.22&&fy<0.285 ? 0.009 : 0.004;
      }
      // Turtleneck
      if(fy>0.86){ pz+=(fy-0.86)*0.18; py+=(fy-0.86)*0.24; px*=0.58; }
      return {x:px,y:py,z:pz};
    });

    // 2. BRAZOS 36x36 T-POSE 0.92 SOLDADOS
    const sY=0.635;
    function arm(isL){
      addGrid(36,36,(u,v)=>{
        const al=v, ang=(u-0.5)*Math.PI*2, rad=0.054*(1-al*0.18);
        const bx=isL?-0.335:0.335;
        return {x:bx+(isL?-1:1)*al*0.92+Math.cos(ang)*rad*0.32, y:sY-al*0.01+Math.sin(ang)*rad, z:Math.cos(ang)*rad*0.82};
      });
    }
    arm(true); arm(false);

    // 3. PIERNAS 70x40 DIAMOND CROTCH LUMINOSO + RODILLA + GEMELO - PLANTILLA
    const legSep=0.068;
    function leg(isL){
      addGrid(70,40,(u,v)=>{
        let al=v, ang=(u-0.5)*Math.PI*2, rad=0.099*(1-al*0.44);
        if(al<0.14) rad+=(0.14-al)*0.22; // cadera ancha
        if(al>0.44&&al<0.60) rad+=0.017*Math.sin((al-0.44)/0.16*Math.PI); // rodilla
        if(al>0.68&&al<0.84) rad-=0.011*Math.sin((al-0.68)/0.16*Math.PI); // gemelo
        let px=(isL?-legSep:legSep)+Math.cos(ang)*rad;
        if(al<0.10) px+=(isL?1:-1)*(0.10-al)*0.36; // diamond crotch
        return {x:px, y:-0.14-al*0.99+Math.sin(ang)*rad*0.20, z:Math.cos(ang)*rad*0.66};
      });
    }
    leg(true); leg(false);

    // 4. PIES 16x22 5 DEDOS CON UÑAS - PLANTILLA EXACTA
    function foot(isL){
      addGrid(16,22,(u,v)=>{
        const toe=Math.floor(u*5), t=(u*5-toe), ang=t*Math.PI;
        const tw=0.015+(toe==0?0.007:0);
        return {x:(isL?-legSep:legSep)+(toe-2)*0.020+Math.cos(ang)*tw+(u-0.5)*0.05, y:-1.135-v*0.09+Math.sin(ang)*0.005, z:(v-0.5)*0.30+0.08+(toe==0?0.025:0)};
      });
    }
    foot(true); foot(false);

    // 5. CABEZA 28x36 + PELO BOB 20x30 - CON CARA WIREFRAME PLANTILLA
    addGrid(28,36,(u,v)=>{
      const th=u*Math.PI*2, ph=v*Math.PI, r=0.165;
      let x=Math.sin(ph)*Math.cos(th)*r, y=0.91+Math.cos(ph)*r, z=Math.sin(ph)*Math.sin(th)*r;
      // nariz extrude leve como plantilla
      if(Math.abs(u-0.5)<0.06 && v>0.45 && v<0.58) z+=0.022*Math.cos((v-0.515)/0.065*Math.PI/2);
      // ojos inset
      if(v>0.58 && v<0.68 && ((Math.abs(u-0.32)<0.06)||(Math.abs(u-0.68)<0.06))) z-=0.008;
      return {x,y,z};
    });
    addGrid(20,30,(u,v)=>{
      const th=(u-0.5)*Math.PI*1.6, ph=v*Math.PI*0.65, r=0.19;
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

  function resize(){ const w=innerWidth, h=innerHeight-52; renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix(); group.scale.set(w<768?0.32:0.40,w<768?0.32:0.40,w<768?0.32:0.40); }
  addEventListener('resize',resize); resize();
  (function anim(){ requestAnimationFrame(anim); renderer.render(scene,camera); })();
  return {bones, group, camera, renderer};
}