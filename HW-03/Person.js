const EventEmitter = require('events');

class Person extends EventEmitter
{
    constructor(name)
    {
        super();
        this.name = name;
        this.on('says', this.speaks);
    }
    speaks(mssg)
    {
        console.log(`${this.name} says: ${mssg}`);
    }
}

module.exports =  Person;