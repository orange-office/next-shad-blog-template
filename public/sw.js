self.addEventListener('install', () => {
  console.log('Service Worker installed');
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    console.log('Service Worker activated')
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

