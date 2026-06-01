self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  // Directly passes data through to keep your cloud sheets current
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
