self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("todo-cache-v1").then(cache => {
            return cache.addAll([
                "/To-Do-Task/",
                "/To-Do-Task/index.html",
                "/To-Do-Task/style.css",
                "/To-Do-Task/script.js",
                "/To-Do-Task/manifest.json",
                "/To-Do-Task/icons/icon-192.png",
                "/To-Do-Task/icons/icon-512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

