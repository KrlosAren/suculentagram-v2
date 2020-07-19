import router from '../src/utils/index.js'

window.addEventListener('hashchange', router)
window.addEventListener('load', router)

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://krlosaren.github.io/Suculentagram/sw.js').catch( error => {
    console.error(error)
  })
}