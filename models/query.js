const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Query = sequelize.define('query', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    query: { type: DataTypes.STRING, allowNull: false },
    sortBy: { type: DataTypes.STRING },
    maxResults: { type: DataTypes.INTEGER },
});

module.exports = { Query };
