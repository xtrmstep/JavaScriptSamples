function Animal(name) {
  this.name = name;
}

function Cat(name) {
 Animal(name);
}

// Добавляет возможность мурлыкать
Cat.prototype.purr = function() {}; 

var murzik = new Cat('Murzik');

console.log(murzik.name);