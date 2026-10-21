// laia_hologram.js - V30.12 CLON PLANTILLA - MANIFOLD EDGE FLOW - BLAZER REAL SOLDADO
// BASE: V30.11 50x44 - MEJORA: 80x60 torso con darts + bolsillos + botones + diamond crotch + rodilla + 5 dedos
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

export function initLaiaHologram(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(0, 0.05, 2.42);

  const group = new THREE.Group();
  group.position.set(0, -0.20, 0);
  group.scale.set(0.40, 0.40, 0.40);
  scene.add(group);

  const bones = {};
  ['Hips','Spine_02','Chest','Head_Bone','Shoulder.L','Shoulder.R','Hip.L','Hip.R'].forEach(n=>{
    bones[n]=new THREE.Group(); bones[n].name=n; group.add(bones[n]);
  });

  function build() {
    const positions = []; const indices = []; let idxOff = 0;
    function addGrid(rows, cols, fn) {
      const start = idxOff;
      for(let y=0;y<rows;y++){for(let x=0;x<cols;x++){
        const p=fn(x/(cols-1), y/(rows-1), x, y); positions.push(p.x,p.y,p.z); idxOff++;
      }}
      for(let y=0;y<rows-1;y++){for(let x=0;x<cols-1;x++){
        const a=start+y*cols+x, b=a+1, c=a+cols, d=c+1; indices.push(a,c,b,b,c,d);
      }}
      return start;
    }

    // 1. TORSO 80x60 BLAZER REAL - waist 0.52 + dart lines + solapas 0.042 + botones + bolsillos
    addGrid(80,60,(u,v)=>{
      let fx=u-0.5, fy=v;
      let py=fy*0.92-0.12;
      let waistCurve=1.0;
      if(fy>0.18&&fy<0.58) waistCurve=0.52 + Math.pow((fy-0.38)*1.8,2)*0.18;
      else if(fy>=0.58) waistCurve=0.82 + (fy-0.58)*0.55;
      else waistCurve=0.86 + fy*0.2;
      let rWidth=0.33*waistCurve;
      // Dart lines pinza sastre - clava la cintura como plantilla
      if(Math.abs(fx)>0.11&&Math.abs(fx)<0.24&&fy>0.26&&fy<0.72){
        const dart = Math.sin((fy-0.26)/0.46*Math.PI)*0.035;
        rWidth-=dart;
      }
      let px=fx*rWidth*2.0;
      let pz=Math.cos(fx*Math.PI*0.96)*0.155*waistCurve;

      // SOLAPAS 0.042 EXTRUIDAS CON PICO - CLON V27 PLANTILLA
      if(fy>0.60&&fy<0.92){
        const lapel=Math.exp(-Math.pow((fy-0.78)*5.8,2));
        if(fx>0.01&&fx<0.22){ pz+=0.042*lapel*(1-Math.abs(fx-0.11)/0.11); px+=0.018*lapel; }
        if(fx<-0.01&&fx>-0.22){ pz+=0.042*lapel*(1-Math.abs(fx+0.11)/0.11); px-=0.018*lapel; }
        // pico solapa
        if(fy>0.71&&fy<0.80&&((fx>0.025&&fx<0.06)||(fx<-0.025&&fx>-0.06))) pz+=0.009;
      }
      // BOTONES 0.011 - 2 botones como plantilla
      if(Math.abs(fx)<0.02&&((fy>0.42&&fy<0.46)||(fy>0.55&&fy<0.59))) pz+=0.012;
      // BOLSILLOS TAPA BLAZER
      if(Math.abs(fx)>0.18&&Math.abs(fx)<0.33&&fy>0.19&&fy<0.29){
        if(fy>0.21&&fy<0.27) pz+=0.007;
        if(fy>0.20&&fy<0.22||fy>0.26&&fy<0.28) pz+=0.004;
      }
      // Turtleneck alto plantilla
      if(fy>0.87){ pz+=(fy-0.87)*0.14; py+=(fy-0.87)*0.20; px*=0.62; }
      return {x:px,y:py,z:pz};
    });

    // 2. BRAZOS 28x28 T-POSE 0.92 SOLDADOS - BRIDGE LOOP
    const shoulderY=0.63;
    addGrid(28,28,(u,v)=>{
      const along=v, ang=(u-0.5)*Math.PI*2, rad=0.052*(1-along*0.22);
      return {x:-0.33-along*0.92+Math.cos(ang)*rad*0.32, y:shoulderY-along*0.02+Math.sin(ang)*rad, z:Math.cos(ang)*rad*0.82};
    });
    addGrid(28,28,(u,v)=>{
      const along=v, ang=(u-0.5)*Math.PI*2, rad=0.052*(1-along*0.22);
      return {x:0.33+along*0.92+Math.cos(ang)*rad*0.32, y:shoulderY-along*0.02+Math.sin(ang)*rad, z:Math.cos(ang)*rad*0.82};
    });

    // 3. PIERNAS 50x32 DIAMOND CROTCH + RODILLA - GAP 0.068 PLANTILLA
    const legSep=0.068;
    addGrid(50,32,(u,v)=>{
      const along=v, ang=(u-0.5)*Math.PI*2;
      let rad=0.096*(1-along*0.40);
      if(along<0.12) rad+=(0.12-along)*0.18;
      if(along>0.42&&along<0.58) rad+=0.013*Math.sin((along-0.42)/0.16*Math.PI);
      let px=-legSep+Math.cos(ang)*rad;
      if(along<0.08) px+=(0.08-along)*0.28; // diamond loop entrepierna
      return {x:px, y:-0.12-along*0.97+Math.sin(ang)*rad*0.25, z:Math.cos(ang)*rad*0.68};
    });
    addGrid(50,32,(u,v)=>{
      const along=v, ang=(u-0.5)*Math.PI*2;
      let rad=0.096*(1-along*0.40);
      if(along<0.12) rad+=(0.12-along)*0.18;
      if(along>0.42&&along<0.58) rad+=0.013*Math.sin((along-0.42)/0.16*Math.PI);
      let px=legSep+Math.cos(ang)*rad;
      if(along<0.08) px-=(0.08-along)*0.28;
      return {x:px, y:-0.12-along*0.97+Math.sin(ang)*rad*0.25, z:Math.cos(ang)*rad*0.68};
    });

    // 4. PIES 12x18 5 DEDOS REALES - PLANTILLA
    addGrid(12,18,(u,v)=>{
      const toe=Math.floor(u*5), t=(u*5-toe), ang=t*Math.PI;
      return {x:-legSep+(toe-2)*0.018+Math.cos(ang)*0.012+(u-0.5)*0.08, y:-1.095-v*0.07, z:(v-0.5)*0.26+0.06+Math.sin(ang)*0.006};
    });
    addGrid(12,18,(u,v)=>{
      const toe=Math.floor(u*5), t=(u*5-toe), ang=t*Math.PI;
      return {x:legSep+(toe-2)*0.018+Math.cos(ang)*0.012+(u-0.5)*0.08, y:-1.095-v*0.07, z:(v-0.5)*0.26+0.06+Math.sin(ang)*0.006};
    });

    // 5. CABEZA 0.16 BOB 22x32
    addGrid(22,32,(u,v)=>{
      const th=u*Math.PI*2, ph=v*Math.PI, r=0.16;
      return {x:Math.sin(ph)*Math.cos(th)*r, y:0.88+Math.cos(ph)*r, z:Math.sin(ph)*Math.sin(th)*r};
    });

    const geo=new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions,3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    const line=new THREE.LineSegments(new THREE.WireframeGeometry(geo),
      new THREE.LineBasicMaterial({color:0x00e5ff, transparent:true, opacity:0.19, depthWrite:false}));
    group.add(line);
  }
  build();
  function resize(){
    const w=innerWidth, h=innerHeight-52;
    renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix();
    group.scale.set(w<768?0.32:0.40,w<768?0.32:0.40,w<768?0.32:0.40);
  }
  addEventListener('resize',resize); resize();
  (function anim(){ requestAnimationFrame(anim); renderer.render(scene,camera); })();
  return {bones,group,camera,renderer};
}