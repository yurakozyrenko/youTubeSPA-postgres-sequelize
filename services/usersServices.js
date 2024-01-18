const { User } = require('../models/models');

class UsersServices {
    // Создать пользователя по login
    async getUser({ login }) {
        try {
            const user = await User.findOne({ where: { login } });
            return user;
        } catch (e) {}
    }

    // Создать пользователя
    async createUser({ login, password: hashPassword }) {
        const user = await User.create({
            login,
            password: hashPassword,
        });

        return user;
    }
}

module.exports = new UsersServices();
