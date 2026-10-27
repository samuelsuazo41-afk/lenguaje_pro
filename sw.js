// sw.js - V31 BUSINESS - FROM SCRATCH - T-POSE 90° - V30.71 LATERAL 90° + V30.22 POSTERIOR T-POSE MODO NEGOCIO
// SPECS: CINTURA 0.12 - DIAMOND 0.0 - FLAT GLUTEO CURVE - LUMBAR 0.22-0.50 - ANCHURA HOMBROS 0.48m - TRAPEZIUS 0.32" - CADERA 0.335*wc - CABEZA 28x36" - CUELLO 0.12" - T-POSE 90°

const CACHE_NAME = 'laia-v31-business-tpose-90-from-scratch-cintura-0.12-diamond-0.0-flat-gluteo-lumbar-0.22-0.50-anchura-0.48m-v1';
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
  console.log('[SW V31 BUSINESS T-POSE 90° FROM SCRATCH - V30.71 + V30.22] Instalando - CINTURA 0.12 DIAMOND 0.0 FLAT GLUTEO LUMBAR 0.22-0.50 ANCHURA 0.48m TRAPEZIUS 0.32 CADERA 0.335*wc - AVATAR FRONT Z999 T-POSE 90°');
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => {
      return c.addAll(ASSETS.map(url => new Request(url, {cache: 'reload'}))).catch(err => {
        console.log('[SW V31 BUSINESS] addAll fail, intentando individual:', err);
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
          console.log('[SW V31 BUSINESS] Borrando cache vieja V30.85 gap 0.052:', k);
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