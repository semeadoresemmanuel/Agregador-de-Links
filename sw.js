const CACHE_NAME = 'ferramentas-semeadores-v1';

// Recursos essenciais do shell da aplicação unificada
const PRECACHE_ASSETS = [
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
    './assets/icon-512.png',
    './sugestoes/',
    './sugestoes/index.html',
    './cronograma/',
    './cronograma/index.html',
    './hinario/',
    './hinario/index.html'
];

// Instalação: armazena os shells essenciais no cache imediatamente
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return Promise.allSettled(
                PRECACHE_ASSETS.map(url => cache.add(url).catch(err => {
                    console.warn('[SW] Pré-cache opcional não encontrado:', url, err);
                }))
            );
        })
    );
});

// Ativação: remove caches obsoletos e assume controle de todos os clientes
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Controle de downloads de áudio em andamento para evitar requisições redundantes
const pendingAudioDownloads = new Map();

/**
 * Gerenciador de requisições de áudio:
 * 1. Reprodução instantânea (streaming sem delay via rede).
 * 2. Download transparente e não bloqueante em segundo plano para persistência offline.
 * 3. Suporte offline total com Range Requests (HTTP 206) a partir do cache local.
 */
async function handleAudioRequest(request) {
    const cache = await caches.open(CACHE_NAME);
    const rangeHeader = request.headers.get('range');
    const url = new URL(request.url);
    const cleanUrl = url.origin + url.pathname;

    const cachedResponse = await cache.match(cleanUrl);

    if (cachedResponse) {
        if (!rangeHeader) {
            return cachedResponse;
        }

        try {
            const arrayBuffer = await cachedResponse.arrayBuffer();
            const total = arrayBuffer.byteLength;
            const parts = rangeHeader.replace(/bytes=/, '').split('-');
            const start = parseInt(parts[0], 10) || 0;
            const end = parts[1] ? parseInt(parts[1], 10) : total - 1;

            if (start >= total || end >= total) {
                return new Response('', {
                    status: 416,
                    statusText: 'Range Not Satisfiable',
                    headers: { 'Content-Range': `bytes */${total}` }
                });
            }

            const sliced = arrayBuffer.slice(start, end + 1);
            return new Response(sliced, {
                status: 206,
                statusText: 'Partial Content',
                headers: {
                    'Content-Type': cachedResponse.headers.get('Content-Type') || 'audio/mpeg',
                    'Content-Range': `bytes ${start}-${end}/${total}`,
                    'Content-Length': String(sliced.byteLength),
                    'Accept-Ranges': 'bytes'
                }
            });
        } catch (err) {
            return cachedResponse;
        }
    }

    if (!pendingAudioDownloads.has(cleanUrl)) {
        const downloadPromise = fetch(cleanUrl)
            .then(networkFull => {
                if (networkFull && networkFull.status === 200) {
                    return cache.put(cleanUrl, networkFull);
                }
            })
            .catch(() => {})
            .finally(() => {
                pendingAudioDownloads.delete(cleanUrl);
            });
        pendingAudioDownloads.set(cleanUrl, downloadPromise);
    }

    return fetch(request).catch(() => {
        return new Response('Áudio não disponível offline', {
            status: 503,
            statusText: 'Service Unavailable'
        });
    });
}

// Interceptador de requisições HTTP (Fetch)
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    if (!event.request.url.startsWith('http')) return;

    const request = event.request;
    const url = new URL(request.url);

    // Ignora requisições de desenvolvimento e HMR
    if (
        url.pathname.includes('/@vite/') ||
        url.pathname.includes('/@fs/') ||
        url.pathname.includes('/@id/') ||
        url.pathname.includes('hot-update')
    ) {
        return;
    }

    // 1. Áudio (songs/*.mp3): Suporte offline completo com Range Requests
    if (url.pathname.includes('/songs/') || url.pathname.endsWith('.mp3')) {
        event.respondWith(handleAudioRequest(request));
        return;
    }

    // 2. Navegação de páginas HTML: Network-First com fallback para o Shell correto da rota
    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then(networkResponse => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
                    }
                    return networkResponse;
                })
                .catch(() => {
                    const pathname = url.pathname;
                    if (pathname.includes('/sugestoes/')) {
                        return caches.match('./sugestoes/index.html')
                            .then(res => res || caches.match('./sugestoes/') || caches.match('./index.html'));
                    }
                    if (pathname.includes('/cronograma/')) {
                        return caches.match('./cronograma/index.html')
                            .then(res => res || caches.match('./cronograma/') || caches.match('./index.html'));
                    }
                    if (pathname.includes('/hinario/')) {
                        return caches.match('./hinario/index.html')
                            .then(res => res || caches.match('./hinario/') || caches.match('./index.html'));
                    }
                    return caches.match('./index.html').then(res => res || caches.match('./'));
                })
        );
        return;
    }

    // 3. Recursos estáticos (JS, CSS, Fontes, SVGs, Imagens): Stale-While-Revalidate com cache dinâmico
    event.respondWith(
        caches.match(request, { ignoreSearch: true }).then(cachedResponse => {
            const networkFetch = fetch(request).then(networkResponse => {
                if (
                    networkResponse &&
                    networkResponse.status === 200 &&
                    (networkResponse.type === 'basic' || networkResponse.type === 'cors')
                ) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
                }
                return networkResponse;
            }).catch(() => cachedResponse);

            return cachedResponse || networkFetch;
        })
    );
});

// Suporte a cliques em notificações (PWA)
self.addEventListener('notificationclick', event => {
    event.notification.close();
    const targetUrl = event.notification.data?.url || './';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
            for (const client of clientList) {
                if (client.url.startsWith(self.location.origin) && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});
