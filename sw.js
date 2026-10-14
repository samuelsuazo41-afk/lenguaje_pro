const CACHE_NAME = 'lenguaje-pro-v9';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/LAYA_FINAL_COMPLETO.js',
  '/laia_0_furious.png',
  '/laia_1_observer.png',
  '/laia_2_empatica.png',
  '/laia_3_celebratoria.png',
  '/laia_4_colega.png',
  '/laia_5_strict_light.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
