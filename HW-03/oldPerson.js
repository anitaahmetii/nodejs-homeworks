function OldPerson(name)
{
    this.name = name;
}

OldPerson.prototype.speaks = function(mssg) 
{
   console.log(`${this.name} says: ${mssg}`);
}

module.exports = OldPerson;