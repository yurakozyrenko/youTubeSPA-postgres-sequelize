const { User } = require('./user');
const { Query } = require('./query');

User.hasMany(Query);
Query.belongsTo(User);

module.exports = {
    User,
    Query,
};
