const EventEmitter = require('events');
const util = require('util');

function OldPerson(name)
{
    this.name = name;
}

util.inherits(OldPerson, EventEmitter);

OldPerson.prototype.speaks = function(mssg) 
{
   console.log(`${this.name} says: ${mssg}`);
}

module.exports = OldPerson;