var Collection = require('./index');

var numbers = new Collection();
numbers.append(10);
numbers.append(20);
    
console.log(numbers.at(2)); // 20
console.log(numbers.values()); // [10, 20] 
console.log(numbers.count()); // 2
console.log(numbers.removeAt(1)); // 10