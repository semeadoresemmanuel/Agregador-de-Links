const CACHE_NAME = 'semeadores-v14';
const ASSETS = [
    './',
    './index.html',
    './index.css',
    './app.js',
    './manifest.json',
    './assets/logo.svg',
    './assets/caixadesugestoes.svg',
    './assets/cronograma.svg',
    './assets/hinario.svg',
    './assets/copyright.svg',
    './assets/icon-192.png',
    './assets/icon-512.png'
];

// Instalação: armazena em cache todos os ativos essenciais
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Ativação: remove caches obsoletos e assume controle imediato
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

// Estratégia Stale-While-Revalidate com fallback offline garantido
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    if (!event.request.url.startsWith('http')) return;

    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(cachedResponse => {
            const networkFetch = fetch(event.request).then(networkResponse => {
                if (networkResponse && networkResponse.status === 200 && (networkResponse.type === 'basic' || networkResponse.type === 'cors')) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
                }
                return networkResponse;
            }).catch(() => {
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html').then(res => res || caches.match('./'));
                }
            });

            return cachedResponse || networkFetch;
        })
    );
});
