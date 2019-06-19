/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
  var data = collection;
  const params = [].slice.call(arguments);
  var selectorFunctions = params.slice(1).filter(a => a.name == 'internalSelector');
  var filterFunctions = params.slice(1).filter(a => a.name == 'internalFilter');

  for (var i = 0; i < filterFunctions.length; i++) {
    data = filterFunctions[i](data);
  }

  var fields = Object.keys(data[0]);
  for (var i = 0; i < selectorFunctions.length; i++) {
    fields = selectorFunctions[i](data, fields);
  }

  var result = data.reduce((all, nextObj) => {
    var projectedObj = fields.reduce((obj, field) => {
      obj[field] = nextObj[field];
      return obj;
    }, {});
    all.push(projectedObj);
    return all;
  }, []);

  return result;
}

/**
 * @params {String[]}
 */
function select() {
  var selectingFields = [].slice.call(arguments);
  return (function (fields) {

    return function internalSelector(collection, projection) {
      var filteredFields = projection.filter(f => fields.includes(f));
      projection = projection.filter(item => filteredFields.includes(item));
      return projection;
    };
  })(selectingFields);
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
  return (function (field, possibleValues) {

    return function internalFilter(collection) {
      var filteredData = collection.filter(item => possibleValues.includes(item[field]));      
      return filteredData || [];
    };
  })(property, values);
}

module.exports = {
  query: query,
  select: select,
  filterIn: filterIn
};
