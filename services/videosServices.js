const axios = require('axios');

class VideosServices {
    async getVideos({ query }) {
        const response = await axios.get(
            'https://www.googleapis.com/youtube/v3/search',
            {
                params: {
                    part: 'snippet',
                    q: query,
                    type: 'video',
                    key: process.env.API_KEY,
                    maxResults: 12,
                },
            }
        );
        return response.data.items;
    }
}

module.exports = new VideosServices();
