const express = require('express');
const router = express.Router();
const UsersControllers = require('../controllers/usersControllers');

/**
 * @swagger
 * /api/users/login:
 *  post:
 *      summary: Check user in system
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          description: Check login and password
 *          content:
 *              application/json:
 *                  schema:
 *                     $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: The user was successfully registration
 *              content:
 *                application/json:
 *                  schema:
 *                    type: object
 *                    required:
 *                      - token
 *                    properties:
 *                      token:
 *                        type: string
 *                        example: i132nro2iu3br2u3bro2i3ro233nfwdfwef434f34f34f3
 *          401:
 *              description: Проблемы с аутентификацией или авторизацией
 *          500:
 *              description: Some server err
 */

router.post('/login', UsersControllers.login);

/**
 * @swagger
 * /api/users/registration:
 *  post:
 *      summary: Registration a new user
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          description: Register a new user
 *          content:
 *              application/json:
 *                  schema:
 *                     $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: The user was successfully registration
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          500:
 *              description: Some server err
 */

router.post('/registration', UsersControllers.registration);

module.exports = router;
