self.addEventListener('install', (e) => {
    let awaiter = new Promise((resolve) => {
        setTimeout(resolve, 5000); // some long work
    });
    e.waitUntil(awaiter);

    console.log("sw installed");
});

self.addEventListener('activate', (e) => {
    let awaiter = new Promise((resolve) => {
        setTimeout(resolve, 5000); // some long work
    });
    e.waitUntil(awaiter);

    console.log("sw activated - new");
});

self.addEventListener('fetch', (e) => {
    // inspect all fetch requests
    console.log(e.request);
    let customResponse = new Response("{text:'No way!'}");
    e.respondWith(customResponse);
});

console.log("sw registered");