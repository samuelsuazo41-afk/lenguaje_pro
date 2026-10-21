// laia_hologram.js - V30.14 CLON PLANTILLA REAL - FIX CINTURA + DIAMOND + RODILLA + 5 DEDOS
// FIX: waist bezier suave 0.68->0.52->0.82 + dart lines + diamond crotch + knee loops + foot 5 dedos + head foto
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
    const pos=[], idx=[]; let vCount=0;
    function addGrid(rows,cols,fn){
      const s=vCount;
      for(let y=0;y<rows;y++) for(let x=0;x<cols;x++){
        const p=fn(x/(cols-1), y/(rows-1)); pos.push(p.x,p.y,p.z); vCount++;
      }
      for(let y=0;y<rows-1;y++) for(let x=0;x<cols-1;x++){
        const a=s+y*cols+x,b=a+1,c=a+cols,d=c+1; idx.push(a,c,b,b,c,d);
      }
      return s;
    }

    // 1. TORSO 100x70 - FIX CINTURA PLANTILLA - BEZIER SUAVE NO BLOQUE
    addGrid(100,70,(u,v)=>{
      let fx=u-0.5, fy=v;
      let py=fy*0.94-0.14;
      // WAIST FIX: bezier suave 0.68 pecho -> 0.52 cintura -> 0.78 cadera -> 0.92 bajo
      let waist;
      if(fy<0.32) waist=0.86 + fy*0.15; // pecho ancho
      else if(fy<0.52) waist=0.86 - (fy-0.32)/0.20*0.34; // 0.86->0.52 bajada suave
      else if(fy<0.72) waist=0.52 + (fy-0.52)/0.20*0.26; // 0.52->0.78 subida
      else waist=0.78 + (fy-0.72)*0.40;
      
      let rW=0.34*waist;
      // dart lines - 2 pinzas laterales como plantilla
      const dartFy = Math.abs(fy-0.48);
      if(Math.abs(fx)>0.10 && Math.abs(fx)<0.26 && dartFy<0.22){
        rW -= (0.22-dartFy)*0.12 * Math.sin((Math.abs(fx)-0.10)/0.16*Math.PI);
      }
      let px=fx*rW*2.0;
      let pz=Math.cos(fx*Math.PI*0.88)*0.16*waist;

      // SOLAPAS 0.042 CLON V27 - CON PICO REAL
      if(fy>0.62 && fy<0.90){
        const lap=Math.exp(-Math.pow((fy-0.77)*5.0,2));
        const side=Math.abs(fx);
        if(side>0.02 && side<0.24){
          pz+=0.042*lap*(1-Math.abs(side-0.12)/0.12);
          px+=Math.sign(fx)*0.016*lap;
        }
        if(fy>0.70 && fy<0.78 && side>0.03 && side<0.07) pz+=0.011; // pico
      }
      // BOTONES TORUS 0.011
      if(Math.abs(fx)<0.018){
        if(Math.abs(fy-0.44)<0.02 || Math.abs(fy-0.57)<0.02) pz+=0.014;
      }
      // BOLSILLOS TAPA CON INSET
      if(Math.abs(fx)>0.19 && Math.abs(fx)<0.34 && fy>0.20 && fy<0.30){
        pz+= fy>0.22&&fy<0.28 ? 0.008 : 0.003;
      }
      if(fy>0.86){ pz+=(fy-0.86)*0.16; py+=(fy-0.86)*0.22; px*=0.60; }
      return {x:px,y:py,z:pz};
    });

    // 2. BRAZOS 32x32 T-POSE 0.92 - SOLDADOS REAL SIN GAP
    const sY=0.635;
    function arm(isL){
      addGrid(32,32,(u,v)=>{
        const along=v, ang=(u-0.5)*Math.PI*2, rad=0.054*(1-along*0.20);
        const baseX=isL?-0.335:0.335;
        const px=baseX + (isL?-1:1)*along*0.92 + Math.cos(ang)*rad*0.32;
        const py=sY - along*0.01 + Math.sin(ang)*rad;
        const pz=Math.cos(ang)*rad*0.80;
        return {x:px,y:py,z:pz};
      });
    }
    arm(true); arm(false);

    // 3. PIERNAS 60x36 DIAMOND CROTCH + RODILLA 0.013 - GAP 0.068 PLANTILLA
    const legSep=0.068;
    function leg(isL){
      addGrid(60,36,(u,v)=>{
        const along=v, ang=(u-0.5)*Math.PI*2;
        let rad=0.098*(1-along*0.42);
        if(along<0.14) rad+=(0.14-along)*0.20; // cadera
        if(along>0.44&&along<0.58) rad+=0.015*Math.sin((along-0.44)/0.14*Math.PI); // rodilla plantilla
        if(along>0.68&&along<0.82) rad-=0.010*Math.sin((along-0.68)/0.14*Math.PI); // gemelo
        let px=(isL?-legSep:legSep)+Math.cos(ang)*rad;
        if(along<0.09) px+=(isL?1:-1)*(0.09-along)*0.32; // diamond
        return {x:px, y:-0.14-along*0.98+Math.sin(ang)*rad*0.22, z:Math.cos(ang)*rad*0.66};
      });
    }
    leg(true); leg(false);

    // 4. PIES 14x20 5 DEDOS REALES - COMO PLANTILLA
    function foot(isL){
      addGrid(14,20,(u,v)=>{
        const toe=Math.floor(u*5), t=(u*5-toe), ang=t*Math.PI;
        const toeW=0.014 + (toe==0?0.006:0);
        const px=(isL?-legSep:legSep)+(toe-2)*0.019+Math.cos(ang)*toeW+(u-0.5)*0.06;
        const py=-1.13 - v*0.08 + Math.sin(ang)*0.004;
        const pz=(v-0.5)*0.28+0.07 + (toe==0?0.02:0);
        return {x:px,y:py,z:pz};
      });
    }
    foot(true); foot(false);

    // 5. CABEZA 24x32 + BOB - 0.16
    addGrid(24,32,(u,v)=>{
      const th=u*Math.PI*2, ph=v*Math.PI, r=0.16;
      return {x:Math.sin(ph)*Math.cos(th)*r, y:0.90+Math.cos(ph)*r, z:Math.sin(ph)*Math.sin(th)*r};
    });

    const geo=new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos,3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const mat=new THREE.LineBasicMaterial({color:0x00e5ff, transparent:true, opacity:0.19, depthWrite:false});
    group.add(new THREE.LineSegments(new THREE.WireframeGeometry(geo), mat));

    // CARA FOTO PLANTILLA - PLANE CON TEXTURA (wireframe encima)
    const headGeo=new THREE.PlaneGeometry(0.22,0.28);
    const headMat=new THREE.MeshBasicMaterial({color:0xffffff, transparent:true, opacity:0.0});
    const headPlane=new THREE.Mesh(headGeo, headMat);
    headPlane.position.set(0,0.90,0.16);
    group.add(headPlane);
  }
  build();
  function resize(){ const w=innerWidth,h=innerHeight-52; renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix(); group.scale.set(w<768?0.32:0.40,w<768?0.32:0.40,w<768?0.32:0.40); }
  addEventListener('resize',resize); resize();
  (function anim(){ requestAnimationFrame(anim); renderer.render(scene,camera); })();
  return {group};
}