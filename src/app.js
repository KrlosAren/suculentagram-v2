import router from '../src/utils/index.js'

window.addEventListener('hashchange', router)
window.addEventListener('load', router)

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch( error => {
    console.error(error)
  })
}