const express = require('express');
const { newVideo, deleteVideos } = require('../Controllers/videos.controller');
const router = express.Router();


router.post('/videos', newVideo)

router.delete('/videos/:id', deleteVideos)


module.exports = router;
