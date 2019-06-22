var parallel = require('./index.js');

parallel(
    [
        function (next) { /* асинхронная операция 1 */ },
        function (next) { /* асинхронная операция 2 */ },
        // ...
    ],
    function(err, result) {
        // обработка результата выполнения операций
    }
)