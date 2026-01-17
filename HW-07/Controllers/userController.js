const User = require('../Database/Models/User');
const userValidate = require('./userValidate');

async function addUser(req, res)
{
    try
    {
        const validation = userValidate(req.body);
        if (validation !== null) return res.status(400).json({ error: validation });
        
        const addUser = new User(req.body);
        const savedUser = await addUser.save();
        res.status(201).json(savedUser);
    }
    catch(err)
    {
        res.status(400).json({message: "User can not be added!", error: err.message})
    }
}
async function getUsers(req, res)
{
    try
    {
        const users = await User.find({});
        res.status(200).json(users);
    }
    catch(err)
    {
        res.status(400).json({message: "User can not be loaded!", error: err.message})
    }
}
async function getUserById(req, res)
{
    try
    {
        const { id } = req.params;
        const userID = await User.findById(id);
        if (!userID) { return res.status(404).json({ error: "User not found!" }); }
        res.status(200).json(userID);
    }
    catch(err)
    {
        res.status(400).json({message: "UserID can not be loaded!", error: err.message})
    }
}
async function updateUser(req, res)
{
    try
    {
        const { id } = req.params;
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updateUser) { return res.status(404).json({ error: "User not found!" }); }
        res.status(200).json(updateUser);
    }
    catch(err)
    {
        res.status(400).json({message: "User can not be updated!", error: err.message})
    }
}
async function deleteUser(req, res)
{
    try
    {
        const { id } = req.params;
        const deleteUser = await User.findByIdAndDelete(id);
        res.status(400).json(deleteUser);
    }
    catch(err)
    {
        res.status(400).json({message: "User can not be deleted!", error: err.message})
    }
}

module.exports = { addUser, getUsers, getUserById, updateUser, deleteUser };