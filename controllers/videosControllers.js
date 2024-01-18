const VideosServices = require('../services/videosServices');

class VideosControllers {
    async getVideos(req, res) {
        // const { id: userId } = req.user;
        const { query } = req.query;
        const result = await VideosServices.getVideos({ query });
        // res.json(result);

        res.send(result);
    }
}

module.exports = new VideosControllers();
