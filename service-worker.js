// service-worker.js

// Quando il service worker viene installato
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('mia-pwa-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/icons/icon-192x192.png',
        '/icons/icon-512x512.png'
      ]);
    })
  );
});

// Quando il service worker intercetta una richiesta di rete
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Se la risorsa è già nella cache, usala
      return cachedResponse || fetch(event.request); // Altrimenti, fai una richiesta di rete
    })
  );
});
