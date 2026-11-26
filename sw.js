// Chronoglobe service worker: works offline after the first visit.
const VERSION = 'chronoglobe-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
// Libraries and map data that rarely change: keep a copy once fetched.
const KEEP = ['cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'raw.githubusercontent.com', 'fonts.googleapis.com', 'fonts.gstatic.com', 'gws.gplates.org'];

self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // the app itself: network first so updates arrive, cache as fallback
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return r; }).catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
  } else if (KEEP.includes(url.hostname)) {
    // libraries and map data: cache first
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok || r.type === 'opaque') { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return r; })));
  }
  // Wikipedia and Wikidata lookups always go to the network.
});
