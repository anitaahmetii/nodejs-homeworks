const Person = require('./Person');
const OldPerson = require('./oldPerson');

//ES 6
console.log("-------------------ES 6------------------");
const bill = new Person("Bill");
const tom = new Person("Tom");

bill.emit('says', "Hello, I am Bill!");
tom.emit('says', "Greetings, this is Tom!");

//ES 5 
console.log("-------------------ES 5------------------");
const bill2 = new OldPerson("Bill");
const tom2 = new OldPerson("Tom");

bill2.on('says', bill2.speaks);
tom2.on('says', tom2.speaks);

bill2.emit('says', "Hello, I am Bill from ES 5!")
tom2.emit('says', "Greetings, this is Tom from ES 5!");