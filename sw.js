const CACHE_NAME = 'semeadores-cache-v2';
const ASSETS = [
    './',
    './index.html',
    './index.css',
    './manifest.json',
    './assets/favicon.svg',
    './assets/logo.svg',
    './assets/caixadesugestoes.svg',
    './assets/cronograma.svg',
    './assets/hinario.svg',
    './assets/copyright.svg',
    './assets/icon-192.png',
    './assets/icon-512.png'
];

// Install event - caching assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - cleaning up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - Stale-While-Revalidate caching strategy
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    // Fetch in background to update the cache
                    fetch(event.request).then(networkResponse => {
                        if (networkResponse.status === 200) {
                            caches.open(CACHE_NAME).then(cache => {
                                cache.put(event.request, networkResponse);
                            });
                        }
                    }).catch(() => {/* Ignore network failures when offline */});
                    
                    return cachedResponse;
                }
                return fetch(event.request);
            })
    );
});
