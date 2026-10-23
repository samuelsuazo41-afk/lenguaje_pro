// sw.js - V30.21 FINAL BEST TEMPLATE - 90x70 BLAZER 0.042 + PANTALÓN + OXFORDS - 0.38 - 0.58 - WAIST 0.52->0.146 - DIAMOND CLOSED
const CACHE_NAME = 'laia-v30.21-final-best-90x70-pantalon-oxfords-0.38-0.58-0.146-diamond-closed-v1';
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
  console.log('[SW V30.21 FINAL BEST 90x70 + PANTALON + OXFORDS - 0.38 - 0.58 - WAIST 0.146] Instalando - DIAMOND CLOSED');
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => {
      return c.addAll(ASSETS.map(url => new Request(url, {cache: 'reload'}))).catch(err => {
        console.log('[SW V30.21] addAll fail, intentando individual:', err);
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
          console.log('[SW V30.21] Borrando cache vieja V30.11 skinny 0.19:', k);
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