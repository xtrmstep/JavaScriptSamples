function Student(name){
  this.name = name; 
}
Student.prototype.setName = function (){
  this.name = "new name";
}

var s1 = new Student("a1");
var s2 = new Student("a2");
console.log(s1.name);
console.log(s2.name);
s2.setName();
console.log(s1.name);
console.log(s2.name);