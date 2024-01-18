const express = require('express');
const router = express.Router();

const videosRoutes = require('./videosRoutes');
router.use('/search', videosRoutes);

const usersRoutes = require('./usersRoutes');
router.use('/users', usersRoutes);

const historyRoutes = require('./historyRoutes');
router.use('/history', historyRoutes);

module.exports = router;

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - login
 *          - password
 *        properties:
 *          login:
 *            type: string
 *            description: login
 *          password:
 *            type: string
 *            description: password
 *        example:
 *            login: Yura1989
 *            password: qwerty
 */

/**
 * @swagger
 *  components:
 *    securitySchemes:
 *      bearerAuth:
 *        type: http
 *        scheme: bearer
 *        bearerFormat: JWT
 *    schemas:
 *      HistoryItem:
 *        type: object
 *        required:
 *          - query
 *          - maxResults
 *          - userId
 *        properties:
 *          query:
 *            type: string
 *            description: name
 *          maxResults:
 *            type: integer
 *            description: количество
 *          userId:
 *            type: integer
 *            description: id
 *        example:
 *            query: Котики
 *            maxResults: 12
 *            userId: 1
 */

/**
 * @swagger
 *  components:
 *    securitySchemes:
 *      bearerAuth:
 *        type: http
 *        scheme: bearer
 *        bearerFormat: JWT
 *    schemas:
 *      SearchItem:
 *        type: object
 *        required:
 *          - query
 *          - maxResults
 *        properties:
 *          query:
 *            type: string
 *            description: name
 *          maxResults:
 *            type: integer
 *            description: количество
 *        example:
 *            query: Котики
 *            maxResults: 12
 *            userId: 1
 */
