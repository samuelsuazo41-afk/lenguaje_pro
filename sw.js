// sw.js - V30.85 FIX FRONT - Avatar por delante + Piernas 62x42 + Diamond Closed 0.0 + X-clamp 0.1976 + Manos + Proportional Balloon
const CACHE_NAME = 'laia-v30.85-fix-front-62x42-diamond-closed-0.0-xclamp-0.1976-manos-proportional-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './laia_hologram.js',
  './LAYA_FINAL_COMPLETO.js',
  './icon-192.png',
  './actor/laia_actor_brain.js'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  console.log('[SW V30.85 FIX FRONT 62x42 + DIAMOND CLOSED 0.0 + X-CLAMP 0.1976 + MANOS] Instalando - AVATAR FRONT Z999');
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => {
      return c.addAll(ASSETS.map(url => new Request(url, {cache: 'reload'}))).catch(err => {
        console.log('[SW V30.85] addAll fail, intentando individual:', err);
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
          console.log('[SW V30.85] Borrando cache vieja V30.21 gap 0.068:', k);
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