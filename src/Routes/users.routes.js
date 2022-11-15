const express = require('express');
const { getAllUsers, getUserById, getUserWithCourses, createUser, updateUser } = require('../Controllers/user.controller');
const router = express.Router();

router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.get('/users/:id/courses', getUserWithCourses)
router.post('/users', createUser)
router.put('/users/:id', updateUser)

module.exports = router;