var parallel = require('./index.js');

parallel(
    [
        function (next) {
            setTimeout(function(){
                next(null, '1');
            }, 100);
        },
        
        function (next) {
            next(null, '2');
        }
    ],
    
    function (errors, result) {
        console.error(errors);
        console.log(result);
    }
);