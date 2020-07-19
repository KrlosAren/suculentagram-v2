/// resolve
const VERSION = 'v1';

self.addEventListener('install', event => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  // get
  if (request.method !== 'GET') {
    return;
  }

  // buscar en cache
  event.respondWith(cachedResponse(request));

  // actualizar el cache
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    '/',
    './html/index.html',
    './src/assets/images/2.jpg',
    './src/assets/images/5.jpg',
    './src/assets/images/7.jpg',
    './src/assets/images/partners-1.svg',
    './src/assets/images/partners-2.svg',
    './src/assets/images/partners-3.svg',
    './src/assets/images/partners-4.svg',
    './src/assets/images/partners-5.svg',
    './src/assets/images/partners-6.svg',
    './src/assets/images/Logo2.png',
    './src/app.js',
    './src/styles/scss/main.scss',
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}