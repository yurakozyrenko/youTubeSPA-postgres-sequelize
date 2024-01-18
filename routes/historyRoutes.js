const express = require('express');
const router = express.Router();
const HistoryControllers = require('../controllers/historyControllers');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * /api/history/:
 *  get:
 *      security:
 *      - bearerAuth: []
 *      summary: Сохраненные запросы
 *      tags: [History]
 *      responses:
 *          200:
 *              description: Success response
 *              content:
 *                application/json:
 *                  schema:
 *                    type: array
 *                    items:
 *                      $ref: "#/components/schemas/HistoryItem"
 *          401:
 *              description: Unauthorized Error
 *              content:
 *                application/json:
 *                  schema:
 *                    type: object
 *                    required:
 *                      - message
 *                    properties:
 *                      message:
 *                        type: string
 *                        example: Для работы нужен токен
 *          404:
 *              description: The users by age was not found
 *          500:
 *              description: Some server err
 */
// Получить все запросы

router.get('/', authMiddleware, HistoryControllers.getHistory);

// Сохранить запрос
/**
 * @swagger
 * /api/history/:
 *  post:
 *      security:
 *      - bearerAuth: []
 *      summary: Сохранить запрос
 *      tags: [History]
 *      parameters:
 *        - in: query
 *          name: name
 *          schema:
 *            type: string
 *          description: Запрос
 *        - in: query
 *          name: query
 *          schema:
 *            type: string
 *            example : Укажите название
 *          description: Название
 *        - in: query
 *          name: sortBy
 *          schema:
 *            type: string
 *            example : Без сортировки
 *          description: Сортировать по
 *        - in: query
 *          name: maxResults
 *          schema:
 *            type: integer
 *            example : 5
 *          description: Максимальное количество от 0 до 50 включительно.
 *      responses:
 *          200:
 *              description: Success response
 *              content:
 *                application/json:
 *                  schema:
 *                    type: array
 *                    items:
 *                      $ref: "#/components/schemas/HistoryItem"
 *          401:
 *              description: Unauthorized Error
 *              content:
 *                application/json:
 *                  schema:
 *                    type: object
 *                    required:
 *                      - message
 *                    properties:
 *                      message:
 *                        type: string
 *                        example: Для работы нужен токен
 *          404:
 *              description: The users by age was not found
 *          500:
 *              description: Some server err
 */

router.post('/', authMiddleware, HistoryControllers.createQuery);

module.exports = router;
