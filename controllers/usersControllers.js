const ApiError = require('../error/ApiError');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { generateJwt } = require('../helpers/generateJwt');
const UsersServices = require('../services/usersServices');

class UsersControllers {
    async login(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { login, password } = req.body;
            const user = await UsersServices.getUser({ login });
            if (!user) {
                return next(ApiError.unauthorized('Пользователь не найден'));
            }
            let comparePassword = bcrypt.compareSync(password, user.password);

            if (!comparePassword) {
                return next(ApiError.unauthorized('Указанн неверный пароль '));
            }

            const token = generateJwt(user.id, user.login);
            return res.json({ token });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async registration(req, res, next) {
        try {
            const { login, password } = req.body;

            if (!login || !password) {
                return next(
                    ApiError.unauthorized('Некорректный login или password')
                );
            }

            const candidate = await UsersServices.getUser({ login });
            if (candidate) {
                return next(
                    ApiError.badRequest('Пользователь с таким login существует')
                );
            }

            const hashPassword = await bcrypt.hash(password, 5);
            const user = await UsersServices.createUser({
                login,
                password: hashPassword,
            });
            const token = generateJwt(user.id, user.login);
            return res.json({ token });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new UsersControllers();
