/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {

    var results = [];
    var globalError = null;

    function internalNext(err, res) {
        if (!err)
            results.push(res);
        else
            if (!globalError)
                globalError = err;
    }

    operations.forEach(o => o(internalNext));

    if (globalError)
        callback(globalError);
    else
        callback('', results);
};