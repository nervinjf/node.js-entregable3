const express = require('express');
const { newCategory, deleteCategory } = require('../Controllers/categories.controller')
const router = express.Router();


router.post('/categories', newCategory);
router.delete('/categories/:id', deleteCategory)

module.exports = router;