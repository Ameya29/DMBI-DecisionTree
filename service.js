if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  })
  .catch(function(error) {
    console.log('Service worker registration failed, error:', error);
  });
}

self.addEventListener('install',(event)=> {
    console.log("service worker installed successfully")
})

self.addEventListener('fetch',(event)=> {
    console.log("service worker fetched successfully")
})