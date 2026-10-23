// sw.js - V30.21 FULL FRAME DEFINITIVO - CLON V27 BLAZER SOLDADO 50x44 - SKINNY 0.19
// FIX: mata cache V17.38 constellation y V30.10.1 - nuevo single mesh 50x44 0.042 soldado
const CACHE_NAME = 'laia-v30.11-full-frame-50x44-blazer-soldado-skinny-0.19';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/styles.css',
  '/laia_hologram.js',
  '/LAYA_FINAL_COMPLETO.js',
  '/icon-192.png',
  '/icon-512.png',
  '/actor/laia_actor_brain.js'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  console.log('[SW V30.11 FULL FRAME SOLDADO 50x44 BLAZER 0.042] Instalando - SINGLE MESH CONTINUO SOLDADO - 0.40/2.42 - 0.19');
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => {
      return c.addAll(ASSETS.map(url => new Request(url, {cache: 'reload'}))).catch(err => {
        console.log('[SW V30.11] addAll fail, individual:', err);
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
          console.log('[SW V30.11] Borrando cache vieja definitiva:', k);
          return caches.delete(k);
        })
      );
    }).then(()=> self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  if(!e.request.url.startsWith(self.location.origin)) return;
  // No cachear laia_hologram.js en modo dev - siempre fresh
  if(e.request.url.includes('laia_hologram.js')){
    e.respondWith(fetch(e.request, {cache: 'no-store'}).then(resp=>{
      if(resp.ok) caches.open(CACHE_NAME).then(c=>c.put(e.request, resp.clone()));
      return resp;
    }).catch(()=> caches.match(e.request)));
    return;
  }
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