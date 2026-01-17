function userValidate(data)
{
    const { name, age, phones } = data;

    if (name == null) return 'Name is required';          
    if (typeof name !== 'string') return 'Name must be a string';
    if (name.trim() === '') return 'Name cannot be empty';

    if (age == null) return 'Age is required';
    if (typeof age !== 'number') return 'Age must be a number';
    if (age < 0) return 'Age must be valid';

    if (phones == null) return 'Phone is required';
    
    return null;
}
module.exports = userValidate;