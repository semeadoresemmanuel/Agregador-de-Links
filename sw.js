const CACHE_NAME = 'semeadores-cache-v10';
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

// Instalação: pré-carrega todos os ativos essenciais
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Ativação: remove versões antigas do cache e assume controle imediato
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
            // Se estiver no cache, retorna imediatamente e atualiza em segundo plano se houver conexão
            if (cachedResponse) {
                fetch(event.request).then(networkResponse => {
                    if (networkResponse && networkResponse.status === 200 && (networkResponse.type === 'basic' || networkResponse.type === 'cors')) {
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
                    }
                }).catch(() => {/* offline silencioso */});

                return cachedResponse;
            }

            // Não encontrado no cache: busca na rede e armazena
            return fetch(event.request).then(networkResponse => {
                if (networkResponse && networkResponse.status === 200 && (networkResponse.type === 'basic' || networkResponse.type === 'cors')) {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
                }
                return networkResponse;
            }).catch(() => {
                // Se offline e requisição de navegação, retorna a página inicial em cache
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html') || caches.match('./');
                }
            });
        })
    );
});

