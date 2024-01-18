const { Query, User } = require('../models/models');

class HistoryServices {
    async getHistory({ userId }) {
        const data = await Query.findAll({
            where: { userId },
            include: User,
        });
        return data;
    }

    async createQuery({ name, query, sortBy, maxResults, userId }) {
        const data = await Query.create({
            name,
            query,
            sortBy,
            maxResults,
            userId,
        });
        return data;
    }
}
module.exports = new HistoryServices();
