const VideosServices = require('../Services/videos.services');

const newVideo = async (req, res, next) => {
    try {
        const newVideo = req.body;
        console.log(newVideo);
        const result = await VideosServices.add(newVideo);
        res.status(201).json(result);
    } catch (error) {
        next({
            message: "Algo salio mal al crear los videos",
            status: 400,
            errorContent: error,
        })
    }
}

const deleteVideos = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await VideosServices.delete(id);
        res.status(200).json(result);
    } catch (error) {
        next({
            message: "Algo salio mal al eliminar los videos",
            status: 400,
            errorContent: error,
        });
    }
}

module.exports = {
    newVideo,
    deleteVideos,
};

