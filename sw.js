const CACHE_NAME = 'semeadores-cache-v5';
const ASSETS = [
    './',
    './index.html',
    './index.css',
    './app.js',
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

// Instalação do Service Worker - pré-carregamento de assets no cache
self.addEventListener('install', event => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            await cache.addAll(ASSETS);
            await self.skipWaiting();
        })()
    );
});

// Ativação do Service Worker - limpeza de caches antigos
self.addEventListener('activate', event => {
    event.waitUntil(
        (async () => {
            const cacheNames = await caches.keys();
            await Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
            await self.clients.claim();
        })()
    );
});

// Estratégia Stale-While-Revalidate para requisições GET locais
self.addEventListener('fetch', event => {
    // Intercepta apenas requisições GET para a mesma origem
    if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
        return;
    }

    event.respondWith(
        (async () => {
            const cachedResponse = await caches.match(event.request);

            const fetchPromise = fetch(event.request)
                .then(async networkResponse => {
                    if (networkResponse && networkResponse.status === 200) {
                        const cache = await caches.open(CACHE_NAME);
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                })
                .catch(() => {
                    /* Ignora falhas de rede em modo offline */
                });

            return cachedResponse || fetchPromise;
        })()
    );
});

