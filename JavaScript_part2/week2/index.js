module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.innerCollection = [];
}

// Методы коллекции
Collection.prototype.values = function () {
    return this.innerCollection;
};

Collection.prototype.append = function (value) {
    this.innerCollection.push(value);
}

Collection.prototype.at = function (index) {
    return this.innerCollection[index - 1] || null;
}

Collection.prototype.count = function () {
    return this.innerCollection.length;
}

Collection.prototype.removeAt = function (index) {
    var idx = index - 1;
    if (this.innerCollection[idx]) {
        this.innerCollection.splice(idx, 1);
        return true;
    }
    return false;
}


/**
 * Создание коллекции из массива значений
 */
Collection.from = function () {
    if (arguments && arguments[0] && Array.isArray(arguments[0]))
        this.innerCollection = [].slice.call(arguments[0]);
    else
        this.innerCollection = [];
    return this;
};
