self.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open('pwa-cache').then((caches)=>{
            return caches.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/js/scripts.js'
            ]);
        })
    );
});

self.addEventListener("fetch",(event)=>{
    event.respondWith(
        caches.match(event.request).then((response)=>{
            return response || fetch(event.request);
        })
    );
});