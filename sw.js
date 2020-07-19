if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    console.log('Service Worker registration succeded', registartion);
  })
  .catch((error) => {
    console.error('Service Worker registration failed',error)
  })
}else {
  console.error('Service Worker not Supported')
}