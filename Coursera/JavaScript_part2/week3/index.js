/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
// solution with promises
module.exports = function (operations, callback) {

    let promises = [];
    let results = new Array(operations.length);

    operations.forEach((o, i) => {
        let promise = new Promise(function (resolve, reject) {
            let idx = i;
            o(function (err, res) {
                if (err)
                    reject(err);
                else {
                    resolve(res);
                    results[idx] = res;
                }
            });
        });
        promises.push(promise);
    });

    Promise.all(promises)
        .then(function (res) {
            callback(null, res);
        })
        .catch(function (err) {
            callback(err);
        });
};

// solution with callbacks
// module.exports = function (operations, callback) {

//     let results = new Array(operations.length);
//     let globalError = null;
//     let executions = 0;

//     function nextClosure(operationIndex) {
//         let idx = operationIndex;
//         return function internalNext(err, res) {
//             executions++;
//             if (!err)
//                 results[idx] = res;
//             else
//                 if (!globalError)
//                     globalError = err;

//             if (executions === operations.length) {
//                 if (globalError)
//                     callback(globalError);
//                 else
//                     callback(null, results);
//             }
//         }
//     }
//     if (operations.length > 0)
//         operations.forEach((o, i) => o(nextClosure(i)));
//     else
//         callback(null, []);
// };