const CACHE_NAME = 'semeadores-cache-v8';
const ASSETS = [
    '/',
    '/index.html',
    '/index.css',
    '/app.js',
    '/manifest.json',
    '/assets/favicon.svg',
    '/assets/logo.svg',
    '/assets/caixadesugestoes.svg',
    '/assets/cronograma.svg',
    '/assets/hinario.svg',
    '/assets/copyright.svg',
    '/assets/icon-192.png',
    '/assets/icon-512.png'
];

// Instalação do Service Worker - pré-carregamento dos assets no cache
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Ativação do Service Worker - limpeza de caches antigos
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

// Estratégia de Fetch segura: tenta responder do cache ou busca da rede sem falhar a resposta
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                // Atualização do cache em segundo plano
                fetch(event.request).then(networkResponse => {
                    if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
                    }
                }).catch(() => {/* offline fallback */});

                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});

