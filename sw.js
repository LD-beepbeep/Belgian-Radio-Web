// A minimal service worker to satisfy PWA install requirements.
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // We aren't doing offline caching for radio, so just let requests pass through normally.
    return;
});
