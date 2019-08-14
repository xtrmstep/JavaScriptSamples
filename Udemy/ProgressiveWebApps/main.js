(function () {

    if (navigator.serviceWorker) {
        navigator.serviceWorker.register("/sw.js")
            .then((registered) => {
                console.log("registered");
                registered.active.postMessage('Message TO SW');
            })
            .catch(() => {
                console.log("error");
            });
    } else {
        console.log("sw is disabled");
    }

    setTimeout(() => {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=9a608d49")
            .then(response => response.json())
            .then(function (data) {
                console.log(data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, 5000);

    Notification.requestPermission(perm => {
        console.log(perm);
    });

    let n = new Notification("My Notificatin");
    n.onclick = () => { console.log("clicked in notification!"); };
})();