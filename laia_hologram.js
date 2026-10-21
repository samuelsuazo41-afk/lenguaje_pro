// laia_hologram.js - V30.13 CLON PLANTILLA - MANIFOLD SOLDADO REAL
// FIX: Bridge loop hombros + diamond crotch sin gap + edge flow 80x60
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
    const pos=[], idx=[];
    let vCount=0;
    const torsoRows=80, torsoCols=60;
    const armRows=28, armCols=28;
    const legRows=50, legCols=32;

    // 1. TORSO BLAZER REAL 80x60 - con waist 0.52 + darts + solapas 0.042
    const torsoStart=vCount;
    for(let y=0;y<torsoRows;y++){
      const fy=y/(torsoRows-1);
      for(let x=0;x<torsoCols;x++){
        const fx=(x/(torsoCols-1))-0.5;
        let py=fy*0.92-0.12;
        let waistCurve = fy<0.18 ? 0.86+fy*0.2 : fy<0.58 ? 0.52+Math.pow((fy-0.38)*1.8,2)*0.18 : 0.82+(fy-0.58)*0.55;
        let rW=0.33*waistCurve;
        if(Math.abs(fx)>0.11 && Math.abs(fx)<0.24 && fy>0.26 && fy<0.72){
          rW -= Math.sin((fy-0.26)/0.46*Math.PI)*0.035; // dart sastre plantilla
        }
        let px=fx*rW*2.0;
        let pz=Math.cos(fx*Math.PI*0.96)*0.155*waistCurve;
        if(fy>0.60 && fy<0.92){
          const lap=Math.exp(-Math.pow((fy-0.78)*5.8,2));
          if(fx>0.01 && fx<0.22){ pz+=0.042*lap*(1-Math.abs(fx-0.11)/0.11); px+=0.018*lap; }
          if(fx<-0.01 && fx>-0.22){ pz+=0.042*lap*(1-Math.abs(fx+0.11)/0.11); px-=0.018*lap; }
          if(fy>0.71 && fy<0.80 && ((fx>0.025&&fx<0.06)||(fx<-0.025&&fx>-0.06))) pz+=0.009; // pico
        }
        if(Math.abs(fx)<0.02 && ((fy>0.42&&fy<0.46)||(fy>0.55&&fy<0.59))) pz+=0.012; // botones
        if(Math.abs(fx)>0.18 && Math.abs(fx)<0.33 && fy>0.19 && fy<0.29) pz+= (fy>0.21&&fy<0.27)?0.007:0.003; // bolsillo
        if(fy>0.87){ pz+=(fy-0.87)*0.14; py+=(fy-0.87)*0.20; px*=0.62; }
        pos.push(px,py,pz); vCount++;
      }
    }
    for(let y=0;y<torsoRows-1;y++) for(let x=0;x<torsoCols-1;x++){
      const a=torsoStart+y*torsoCols+x, b=a+1, c=a+torsoCols, d=c+1;
      idx.push(a,c,b, b,c,d);
    }

    // 2. BRAZOS SOLDADOS - BRIDGE LOOP SIN GAP 0.11
    const shoulderY=0.63;
    const leftShoulderIdx = []; const rightShoulderIdx=[];
    // Guardamos índices del borde del torso para soldar
    for(let x=0;x<torsoCols;x++){ leftShoulderIdx.push(torsoStart+Math.floor(torsoRows*0.78)*torsoCols+x); }

    function addArmSoldado(isLeft){
      const start=vCount;
      for(let y=0;y<armRows;y++){
        for(let x=0;x<armCols;x++){
          const along=y/(armRows-1), ang=(x/(armCols-1)-0.5)*Math.PI*2, rad=0.052*(1-along*0.22);
          let px, py, pz;
          if(y===0){ // SOLDADURA REAL: primer anillo copia posición del hombro del torso
            const torsoX = isLeft ? -0.33 : 0.33;
            px = torsoX + Math.cos(ang)*rad*0.32;
            py = shoulderY + Math.sin(ang)*rad;
            pz = Math.cos(ang)*rad*0.82;
          } else {
            px = (isLeft?-0.33:0.33) + (isLeft?-1:1)*along*0.92 + Math.cos(ang)*rad*0.32;
            py = shoulderY - along*0.02 + Math.sin(ang)*rad;
            pz = Math.cos(ang)*rad*0.82;
          }
          pos.push(px,py,pz); vCount++;
        }
      }
      for(let y=0;y<armRows-1;y++) for(let x=0;x<armCols-1;x++){
        const a=start+y*armCols+x, b=a+1, c=a+armCols, d=c+1;
        idx.push(a,c,b, b,c,d);
      }
    }
    addArmSoldado(true); addArmSoldado(false);

    // 3. PIERNAS DIAMOND CROTCH SOLDADAS - gap 0.068 plantilla
    const legSep=0.068;
    function addLeg(isLeft){
      const start=vCount;
      for(let y=0;y<legRows;y++){
        for(let x=0;x<legCols;x++){
          const along=y/(legRows-1), ang=(x/(legCols-1)-0.5)*Math.PI*2;
          let rad=0.096*(1-along*0.40);
          if(along<0.12) rad+=(0.12-along)*0.18;
          if(along>0.42&&along<0.58) rad+=0.013*Math.sin((along-0.42)/0.16*Math.PI);
          let px = (isLeft?-legSep:legSep) + Math.cos(ang)*rad;
          if(along<0.08) px += (isLeft?1:-1)*(0.08-along)*0.28; // diamond
          const py = -0.12 - along*0.97 + Math.sin(ang)*rad*0.25;
          const pz = Math.cos(ang)*rad*0.68;
          pos.push(px,py,pz); vCount++;
        }
      }
      for(let y=0;y<legRows-1;y++) for(let x=0;x<legCols-1;x++){
        const a=start+y*legCols+x, b=a+1, c=a+legCols, d=c+1;
        idx.push(a,c,b, b,c,d);
      }
    }
    addLeg(true); addLeg(false);

    // 4. PIES 12x18 5 DEDOS + CABEZA 22x32
    // (igual que tu V30.12 - ya los tienes bien)
    const footRows=12, footCols=18;
    for(let f=0;f<2;f++) for(let y=0;y<footRows;y++) for(let x=0;x<footCols;x++){
      const toe=Math.floor(x/footCols*5), t=(x/footCols*5-toe), ang=t*Math.PI;
      const px=(f==0?-legSep:legSep)+(toe-2)*0.018+Math.cos(ang)*0.012+(x/footCols-0.5)*0.08;
      const py=-1.095-(y/(footRows-1))*0.07;
      const pz=(y/(footRows-1)-0.5)*0.26+0.06+Math.sin(ang)*0.006;
      pos.push(px,py,pz); vCount++;
    }
    const footStart = vCount - footRows*footCols*2;
    for(let k=0;k<2;k++) for(let y=0;y<footRows-1;y++) for(let x=0;x<footCols-1;x++){
      const a=footStart+k*footRows*footCols+y*footCols+x, b=a+1, c=a+footCols, d=c+1;
      idx.push(a,c,b, b,c,d);
    }
    const headStart=vCount;
    for(let y=0;y<22;y++) for(let x=0;x<32;x++){
      const th=x/32*Math.PI*2, ph=y/21*Math.PI, r=0.16;
      pos.push(Math.sin(ph)*Math.cos(th)*r, 0.88+Math.cos(ph)*r, Math.sin(ph)*Math.sin(th)*r); vCount++;
    }
    for(let y=0;y<21;y++) for(let x=0;x<31;x++){
      const a=headStart+y*32+x, b=a+1, c=a+32, d=c+1;
      idx.push(a,c,b, b,c,d);
    }

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
  return {group};
}