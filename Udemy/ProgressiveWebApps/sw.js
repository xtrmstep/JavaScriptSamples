self.addEventListener('install', (e) => {
    // let awaiter = new Promise((resolve) => {
    //     setTimeout(()=>{
    //         console.log("sw: long work on install - done");
    //         resolve();
    //     }, 5000); // some long work
    //     console.log("sw: long work on install");
    // });
    // e.waitUntil(awaiter);

    console.log("sw installed");
});

self.addEventListener('activate', (e) => {
    // let awaiter = new Promise((resolve) => {
    //     setTimeout(() => {
    //         console.log("sw: long work on activate - done");
    //         resolve();
    //     }, 5000); // some long work
    //     console.log("sw: long work on activate");
    // });
    // e.waitUntil(awaiter);

    console.log("sw activated");
});

self.addEventListener('fetch', (e) => {
    // inspect all fetch requests
    console.log(e.request);
    // e.respondWith(new Response("{text:'No way!'}"));
});

console.log("sw registered");