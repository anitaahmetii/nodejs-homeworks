const express = require('express');
const router = express.Router();
const { addUser, getUsers, getUserById, updateUser, deleteUser } = require('../Controllers/userController');

router.post('/api/addUser', addUser);
router.get('/api/users', getUsers);
router.get('/api/user/:id', getUserById);
router.put('/api/updateUser/:id', updateUser);
router.delete('/api/deleteUser/:id', deleteUser);

module.exports = router;