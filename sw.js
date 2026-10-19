const CACHE_NAME = 'lenguaje-pro-v17-2-mesh-only-1200';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/styles.css',
  '/LAYA_FINAL_COMPLETO.js',
  '/icon-192.png',
  '/icon-512.png',
  '/actor/laia_actor_brain.js',
  '/actor/navmesh.json',
  '/actor/laia_actor.json'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  console.log('[SW V17.2 MESH ONLY] Instalando 1200 puntos');
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => {
      return c.addAll(ASSETS.map(url => new Request(url, {cache: 'reload'}))).catch(err => {
        console.log('[SW MESH ONLY] addAll fail, individual:', err);
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
          console.log('[SW MESH ONLY] Borrando cache vieja:', k);
          return caches.delete(k);
        })
      );
    }).then(()=> self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  if(!e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if(cached) {
        fetch(e.request).then(resp => {
          if(resp.ok){
            caches.open(CACHE_NAME).then(c => c.put(e.request, resp.clone()));
          }
        }).catch(()=>{});
        return cached;
      }
      return fetch(e.request).then(resp => {
        if(resp.ok){
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return resp;
      });
    })
  );
});