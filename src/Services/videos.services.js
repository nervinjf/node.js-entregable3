const Videos = require('../Models/videos.models');

class VideosServices {
    static async add(newVideo){
        try {
            const result  = await Videos.create(newVideo);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await Videos.destroy({
                where: {id},
            })
            return result;
        } catch (error) {
            throw error
        }
    }
}


module.exports = VideosServices;