const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Video = sequelize.define('video', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, unique: true },
    url: { type: DataTypes.STRING, unique: true },
});

module.exports = { Video };
