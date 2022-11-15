const express = require('express');
const { getAllCourses, getCoursesJoinCategoryandVideos, newCourse, updateCourse } = require('../Controllers/course.controller');
const router = express.Router();

router.get('/course', getAllCourses);
router.get('/course/:id/cateandvideos', getCoursesJoinCategoryandVideos);
router.post('/course', newCourse);
router.put('/course/:id', updateCourse);
module.exports = router;