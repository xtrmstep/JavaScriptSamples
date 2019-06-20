var numbers = new Collection();
numbers.append(10);
numbers.append(20);
    
numbers.at(2); // 20
numbers.values(); // [10, 20] 
numbers.count(); // 2
numbers.removeAt(1); // 10