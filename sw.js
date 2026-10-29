// sw.js - V34.3 PUZZLE FINAL - X-CLAMP 0.1976 - CIRCULAR MATCH 0.1225 - SIN ESCALON
// SPECS: ANCHURA 0.48m - CINTURA 0.12 - CADERA 0.1225 - X-CLAMP 0.1976 - CABEZA 28x36 depth 0.24 - TRAPEZIUS 0.32 - CUELLO 0.12 - DIAMOND 0.0 - PUZZLE PERFECTO

const CACHE_NAME = 'laia-v34.6-puzzle-final-xclamp-0.1976-radius-0.1225-cx-0.095-diamond-0.0-2-piernas-separadas-sin-escalon-blueprint-validated-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './laia_hologram.js',
  './LAYA_FINAL_COMPLETO.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './actor/laia_actor_brain.js'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  console.log('[SW V34.1 PUZZLE FINAL] Instalando - X-CLAMP ±0.1976 RADIUS 0.1225 CX -0.095/+0.095 ANCHURA 0.48m CINTURA 0.12 CADERA 0.1225 CABEZA 28x36 depth 0.24 TRAPEZIUS 0.32 CUELLO 0.12 DIAMOND 0.0 PUZZLE PERFECTO - CIRCULAR MATCH - SIN ESCALON');
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => {
      return c.addAll(ASSETS.map(url => new Request(url, {cache: 'reload'}))).catch(err => {
        console.log('[SW V34.1] addAll fail, intentando individual:', err);
        return Promise.allSettled(ASSETS.map(u => c.add(u).catch(e=>console.log('fail',u))));
      });
    })
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => {
          console.log('[SW V34.1 PUZZLE] Borrando cache vieja V32/V33/V33.2 gap 0.108 cono:', k);
          return caches.delete(k);
        })
      );
    }).then(()=> self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request).then(resp => {
        if(resp.ok){
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return resp;
      });
    }).catch(()=> caches.match(e.request))
  );
});