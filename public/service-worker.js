const CACHE_NAME = "my-pwa-cache-v1";
const FIREBASE_CACHE = "firebase-cache-v1";

const urlsToCache = [
  "/static/js/main.chunk.js",
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "/main.a2dfd8e9d098a454c055.hot-update.js",
  "/assets/logos/logo.png",
  "/manifest.json",
];

self.addEventListener("install", function (event) {
  console.log("Service worker installed");
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      // Open a cache and cache our files
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      console.log(response);
      return response || fetch(event.request);
    })
  );
});
