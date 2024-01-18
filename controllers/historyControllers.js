const HistoryServices = require('../services/historyServices');

class HistoryControllers {
    async getHistory(req, res) {
        const { id: userId } = req.user;
        const result = await HistoryServices.getHistory({ userId });
        res.send(result);
    }

    async createQuery(req, res) {
        const { name, query, sortBy, maxResults } = req.query;
        const { id: userId } = req.user;

        console.log(name, query, sortBy, maxResults, userId);

        const result = await HistoryServices.createQuery({
            name,
            query,
            sortBy,
            maxResults,
            userId,
        });

        res.json({ message: 'Query saved successfully', result });
    }
}

module.exports = new HistoryControllers();
