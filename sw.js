const CACHE_NAME = 'semeadores-v27';
const ASSETS = [
    './',
    './index.html',
    './index.css',
    './app.js',
    './manifest.json',
    './assets/favicon.svg',
    './assets/icon-192.png',
    './assets/icon-512.png',
    './assets/moon.svg',
    './assets/sun.svg',
    './assets/font/Lemon Milk - Bold.otf',
    './assets/font/Lemon Milk - Regular.otf',
    './assets/darkmode/caixadesugestoes.svg',
    './assets/darkmode/cronograma.svg',
    './assets/darkmode/hinario.svg',
    './assets/darkmode/logo.svg',
    './assets/darkmode/selector.svg',
    './assets/darkmode/copyright.svg',
    './assets/lightmode/caixadesugestoes.svg',
    './assets/lightmode/cronograma.svg',
    './assets/lightmode/hinario.svg',
    './assets/lightmode/logo.svg',
    './assets/lightmode/selector.svg',
    './assets/lightmode/copyright.svg'
];

// Instalação: armazena em cache todos os ativos essenciais e pula espera
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return Promise.all(
                ASSETS.map(asset => cache.add(asset).catch(err => {
                    console.warn('[SW] Aviso ao pré-cachear:', asset, err);
                }))
            );
        })
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

// Estratégia Network-First: busca na rede primeiro para sempre exibir conteúdo atualizado; fallback offline no cache
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    if (!event.request.url.startsWith('http')) return;

    event.respondWith(
        fetch(event.request).then(networkResponse => {
            if (networkResponse && networkResponse.status === 200 && (networkResponse.type === 'basic' || networkResponse.type === 'cors')) {
                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
            }
            return networkResponse;
        }).catch(() => {
            return caches.match(event.request, { ignoreSearch: true }).then(cachedResponse => {
                if (cachedResponse) return cachedResponse;
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html').then(res => res || caches.match('./'));
                }
            });
        })
    );
});
