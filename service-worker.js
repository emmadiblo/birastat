self.addEventListener('install', event => {
    console.log('Service Worker installé');
    event.waitUntil(
        caches.open('birastat-v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/js/script.js',
                '/js/audiorecorder.js',
                'fonts/Ubuntu-R.ttf',
                '/icons/icon-128.png',
                '/icons/icon-192.png',
                '/icons/icon-512.png'
            ]);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Service Worker activé');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // Supprimer les anciens caches si nécessaire
                    if (cacheName !== 'birastat-v1') {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            // Si la réponse est trouvée dans le cache, la retourner
            if (response) {
                // Fetch les ressources en ligne pour mise à jour
                fetch(event.request).then(networkResponse => {
                    // Mettre à jour le cache avec la nouvelle version
                    caches.open('birastat-v1').then(cache => {
                        cache.put(event.request, networkResponse.clone());
                    });
                });
                return response; // Retourner la version en cache
            }
            // Si pas dans le cache, faire une requête réseau
            return fetch(event.request).then(networkResponse => {
                return caches.open('birastat-v1').then(cache => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            });
        })
    );
});