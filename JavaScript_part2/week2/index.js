module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.innerCollection = [];
}

// Методы коллекции
Collection.prototype = {
    values: function () {
        return this.innerCollection;
    },

    append: function (value) {
        if (value.constructor.name === 'Collection') {
            this.innerCollection = this.innerCollection.concat(value.values());
        } else {
            this.innerCollection.push(value);
        }
    },

    at: function (index) {
        return this.innerCollection[index - 1] || null;
    },

    count: function () {
        return this.innerCollection.length;
    },

    removeAt: function (index) {
        var idx = index - 1;
        if (this.innerCollection[idx]) {
            this.innerCollection.splice(idx, 1);
            return true;
        }
        return false;
    }
};
Collection.prototype.constructor = Collection;


/**
 * Создание коллекции из массива значений
 */
Collection.from = function () {
    var col = new Collection();
    var initialArray = [];
    if (arguments && arguments[0] && Array.isArray(arguments[0]))
        initialArray = [].slice.call(arguments[0]);
    initialArray.forEach(item => col.append(item));
    return col;
};
