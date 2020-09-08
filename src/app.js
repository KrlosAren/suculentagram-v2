import router from './utils/index';

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js',
    {
      scope: '/Suculentagram/' })
    .catch((error) => {
      console.error(error);
    });
}
