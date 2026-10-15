const CACHE_NAME = 'lenguaje-pro-v15-holo-16-sap-pins';
const ASSETS = [
  '/l/',
  '/l/index.html',
  '/l/manifest.json',
  '/l/styles.css',
  '/l/LAYA_FINAL_COMPLETO.js',
  '/l/LAYA_SAP_HOLOGRAM.js',
  '/l/LAYA_SECONDARY_ENGINE.js',
  '/l/laia_HOLO_CLEAN_16.png',
  '/l/icon-192.png',
  '/l/icon-512.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => {
      return c.addAll(ASSETS.map(url => new Request(url, {cache: 'reload'}))).catch(err => {
        console.log('[SW V15 HOLO-16] Cache addAll fail, trying individual:', err);
        // Fallback individual para que no rompa si falta una imagen
        return Promise.allSettled(ASSETS.map(u => c.add(u)));
      });
    })
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(()=> self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Solo cachea GET y mismo origen /l/
  if(e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if(cached) return cached;
      return fetch(e.request).then(resp => {
        // Cachea nuevo si es de /l/
        if(resp.ok && e.request.url.includes('/l/')){
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return resp;
      }).catch(()=> cached);
    })
  );
});