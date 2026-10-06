const CACHE = 'laddr-v1';
const ASSETS = [
  '/', '/index.html', '/styles.css', '/js/app.js', '/js/store.js', '/js/data.js', '/js/config.js',
  '/assets/mascot-main.png','/assets/mascot-climb.png','/assets/mascot-peek.png','/assets/mascot-search.png',
  '/assets/mascot-write.png','/assets/mascot-mail.png','/assets/mascot-thumbs.png','/assets/mascot-grow.png','/assets/mascot-victory.png'
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
    const copy = resp.clone();
    caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
    return resp;
  }).catch(()=>caches.match('/index.html'))));
});
