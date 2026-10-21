// laia_hologram.js - V30.11 CLON V27 - SINGLE MESH CONTINUO - SKINNY 0.19
// FIX: Blazer 0.042 + botones + gap hombros/piernas soldado + T-Pose 0.92 + cabeza 0.16
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

export function initLaiaHologram(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(0, 0.05, 2.42); // FIX 2.42 - NO 1.78

  const group = new THREE.Group();
  group.position.set(0, -0.20, 0);
  group.scale.set(0.40, 0.40, 0.40);
  scene.add(group);

  // 8 HUESOS FALSOS PARA ANIM
  const bones = {};
  const boneNames = ['Hips', 'Spine_02', 'Chest', 'Head_Bone', 'Shoulder.L', 'Shoulder.R', 'Hip.L', 'Hip.R'];
  boneNames.forEach(n => { bones[n] = new THREE.Group(); bones[n].name = n; group.add(bones[n]); });

  function build() {
    const positions = [];
    const indices = [];
    let idxOff = 0;

    // --- HELPER PARA CREAR GRID SOLDADO ---
    function addGrid(rows, cols, fnPos) {
      const start = idxOff;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const p = fnPos(x / (cols - 1), y / (rows - 1), x, y);
          positions.push(p.x, p.y, p.z);
          idxOff++;
        }
      }
      for (let y = 0; y < rows - 1; y++) {
        for (let x = 0; x < cols - 1; x++) {
          const a = start + y * cols + x;
          const b = a + 1;
          const c = a + cols;
          const d = c + 1;
          indices.push(a, c, b, b, c, d);
        }
      }
      return start;
    }

    // 1. TORSO BLAZER 50x44 - waist_factor 0.52 - waist_y 0.11
    const torsoRows = 50, torsoCols = 44;
    addGrid(torsoRows, torsoCols, (u, v) => {
      const fy = v; // 0 abajo 1 arriba
      const fx = u - 0.5; // -0.5 a 0.5
      const waist_factor = 0.52;
      const waistProfile = 1.0 - waist_factor * Math.sin(fy * Math.PI) * 0.45;
      let rWidth = 0.31 * waistProfile;
      let rDepth = 0.14 * waistProfile;

      // Ajuste cintura alta
      let py = fy * 0.88 - 0.10; // torso 0.88 alto
      if (fy < 0.15) py -= (0.15 - fy) * 0.2; // cadera

      let px = fx * rWidth * 2.0;
      let pz = Math.cos(fx * Math.PI) * rDepth;

      // FIX SOLAPAS 0.042 - CLON V27
      if (fy > 0.62 && fy < 0.92) {
        const lapelShape = Math.exp(-Math.pow((fy - 0.78) * 6.5, 2));
        if (fx > 0.02 && fx < 0.18) { // solapa derecha
          pz += 0.042 * lapelShape * (1.0 - Math.abs(fx - 0.10) / 0.08);
          px += 0.015 * lapelShape;
        }
        if (fx < -0.02 && fx > -0.18) { // solapa izquierda
          pz += 0.042 * lapelShape * (1.0 - Math.abs(fx + 0.10) / 0.08);
          px -= 0.015 * lapelShape;
        }
      }
      // Turtle neck
      if (fy > 0.90) {
        pz += (fy - 0.90) * 0.08;
        py += (fy - 0.90) * 0.12;
      }
      // Botones blazer
      if (Math.abs(fx) < 0.015 && fy > 0.35 && fy < 0.78) {
        if (Math.abs((fy * 10) % 1 - 0.5) < 0.08) pz += 0.008; // bulto botón
      }

      return { x: px, y: py, z: pz };
    });

    // 2. BRAZOS T-POSE 0.92 - 22x22 - SOLDADOS SIN GAP 0.11
    const armRows = 22, armCols = 22;
    const shoulderY = 0.62;
    // Brazo L
    addGrid(armRows, armCols, (u, v) => {
      const along = v; // 0 hombro 1 mano
      const angle = (u - 0.5) * Math.PI * 2;
      const radius = 0.055 * (1.0 - along * 0.2);
      const armLen = 0.92;
      const px = -0.31 - along * armLen + Math.cos(angle) * radius * 0.3;
      const py = shoulderY - along * 0.02 + Math.sin(angle) * radius;
      const pz = Math.cos(angle) * radius * 0.8;
      return { x: px, y: py, z: pz };
    });
    // Brazo R
    addGrid(armRows, armCols, (u, v) => {
      const along = v;
      const angle = (u - 0.5) * Math.PI * 2;
      const radius = 0.055 * (1.0 - along * 0.2);
      const armLen = 0.92;
      const px = 0.31 + along * armLen + Math.cos(angle) * radius * 0.3;
      const py = shoulderY - along * 0.02 + Math.sin(angle) * radius;
      const pz = Math.cos(angle) * radius * 0.8;
      return { x: px, y: py, z: pz };
    });

    // 3. PIERNAS 37x24 - leg_separation 0.068 - SOLDADAS A CADERA
    const legRows = 37, legCols = 24;
    const legSep = 0.068;
    addGrid(legRows, legCols, (u, v) => {
      const along = v; // 0 cadera 1 pie
      const angle = (u - 0.5) * Math.PI * 2;
      const radius = 0.085 * (1.0 - along * 0.35);
      const legLen = 0.92;
      const px = -legSep + Math.cos(angle) * radius;
      const py = -0.10 - along * legLen + Math.sin(angle) * radius * 0.3;
      const pz = Math.cos(angle) * radius * 0.6;
      return { x: px, y: py, z: pz };
    });
    addGrid(legRows, legCols, (u, v) => {
      const along = v;
      const angle = (u - 0.5) * Math.PI * 2;
      const radius = 0.085 * (1.0 - along * 0.35);
      const legLen = 0.92;
      const px = legSep + Math.cos(angle) * radius;
      const py = -0.10 - along * legLen + Math.sin(angle) * radius * 0.3;
      const pz = Math.cos(angle) * radius * 0.6;
      return { x: px, y: py, z: pz };
    });

    // 4. PIES 7x14
    const footRows = 7, footCols = 14;
    addGrid(footRows, footCols, (u, v) => {
      const px = -legSep + (u - 0.5) * 0.14;
      const py = -1.05 - v * 0.06;
      const pz = (v - 0.5) * 0.22 + 0.05;
      return { x: px, y: py, z: pz };
    });
    addGrid(footRows, footCols, (u, v) => {
      const px = legSep + (u - 0.5) * 0.14;
      const py = -1.05 - v * 0.06;
      const pz = (v - 0.5) * 0.22 + 0.05;
      return { x: px, y: py, z: pz };
    });

    // 5. CABEZA 0.16 + PELO BOB
    const headRows = 22, headCols = 32;
    addGrid(headRows, headCols, (u, v) => {
      const theta = u * Math.PI * 2;
      const phi = v * Math.PI;
      const r = 0.16;
      const px = Math.sin(phi) * Math.cos(theta) * r;
      const py = 0.88 + Math.cos(phi) * r;
      const pz = Math.sin(phi) * Math.sin(theta) * r;
      return { x: px, y: py, z: pz };
    });

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();

    const wireGeo = new THREE.WireframeGeometry(geo);
    const mat = new THREE.LineBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.19, // SKINNY GLOW 0.19
      linewidth: 1
    });

    const line = new THREE.LineSegments(wireGeo, mat);
    group.add(line);
  }

  build();

  function resize() {
    const w = window.innerWidth, h = window.innerHeight - 52;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    if (w < 768) group.scale.set(0.32, 0.32, 0.32);
    else group.scale.set(0.40, 0.40, 0.40);
  }
  window.addEventListener('resize', resize);
  resize();

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  return { bones, group, camera, renderer };
        }
