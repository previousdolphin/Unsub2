const CACHE_NAME = 'dietcoke-oracle-v2';
const ASSETS = [
  './dietcoke.html',
  './dietcoke-manifest.json',
  './logo192.PNG',
  './logo512.PNG'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Intentionally using catch to prevent the entire caching process
      // from failing if a logo isn't present right away.
      return cache.addAll(ASSETS).catch((err) => console.log('Partial cache setup:', err));
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
