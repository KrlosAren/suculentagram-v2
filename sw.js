
const APP_PREFIX = 'Suculentagram'
const VERSION = 'V1'
const CACHE_NAME = APP_PREFIX + VERSION
const URLS = [
  'Suculentagram/src/assets/images/2.jpg',
  'Suculentagram/src/assets/images/5.jpg',
  'Suculentagram/src/assets/images/7.jpg',
  'Suculentagram/src/assets/images/partners-1.svg',
  'Suculentagram/src/assets/images/partners-2.svg',
  'Suculentagram/src/assets/images/partners-3.svg',
  'Suculentagram/src/assets/images/partners-4.svg',
  'Suculentagram/src/assets/images/partners-5.svg',
  'Suculentagram/src/assets/images/partners-6.svg',
  'Suculentagram/src/assets/images/Logo2.png',
  'Suculentagram/src/app.js',
  'Suculentagram/src/utils/index.js',
  'Suculentagram/src/styles/scss/main.scss'
]



// Respond with cached resources
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(request => {
      if (request) {
        return request || fetch(event.request)
      }
    }))
})

// Cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS)
    })
  )
})

// Delete outdated caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(key => {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME)

      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(keyList[i])
        }
      }))
    }))
})
