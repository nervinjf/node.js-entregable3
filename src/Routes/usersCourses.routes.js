const express = require('express');
const { newUseCourse } = require('../Controllers/usersCourses.controller');
const router = express.Router();

router.post('/userandcourse', newUseCourse); 


module.exports = router;