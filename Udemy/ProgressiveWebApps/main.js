(function () {

    if (navigator.seviceWorker){
        navigator.seviceWorker.register("/sw.js")
        .then(function(registered){
            console.log("registered");
        })
        .catch(function(){
            console.log("error");
        });
    }else{
        console.log("sw is disabled");
    }
})();