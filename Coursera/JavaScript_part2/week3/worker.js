var parallel = require('./index.js');

parallel(
    [
        function (next) {
            setTimeout(function(){
                next(null, '3');
            }, 200);
        },
        
        function (next) {
            setTimeout(function(){
                next(null, '2');
            }, 100);
        },
        
        function (next) {
            setTimeout(function(){
                next(null, '1');
            }, 0);
        }
    ],
    
    function (errors, result) {
        console.error(errors);
        console.log(result);
    }
);