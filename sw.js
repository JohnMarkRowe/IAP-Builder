/* IAP Builder service worker: makes the app load and work offline.
   - Pre-caches the app shell on install.
   - Page loads: network first (so updates arrive), falling back to the cached copy
     when offline or when the network takes longer than 2.5 s.
   - Other same-origin files: cache first.
   Incident data lives in the browser's localStorage and is not touched by this file. */
const CACHE = 'iap-builder-v1';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('iap-builder-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const net = fetch(req)
        .then(res => { if (res.ok) cache.put('./index.html', res.clone()); return res; })
        .catch(() => null);
      const cached = await cache.match('./index.html');
      if (!cached) {
        const res = await net;
        return res || new Response('Offline, and the app has not been saved on this device yet. Open it once while online.',
          { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
      }
      const fast = await Promise.race([net, new Promise(r => setTimeout(() => r(null), 2500))]);
      return fast && fast.ok ? fast : cached;
    })());
    return;
  }

  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }))
  );
});
