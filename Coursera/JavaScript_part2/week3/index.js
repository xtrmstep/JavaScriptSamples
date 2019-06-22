/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {

    var results = [];
    var globalError = null;
    var executions = 0;

    function internalNext(err, res) {
        executions++;
        if (!err)
            results.push(res);
        else
            if (!globalError)
                globalError = err;

        if (executions === operations.length) {
            if (globalError)
                callback(globalError);
            else
                callback(null, results);
        }
    }

    operations.forEach(o => o(internalNext));
};