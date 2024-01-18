const express = require('express');
const router = express.Router();
const VideosControllers = require('../controllers/videosControllers');
const authMiddleware = require('../middleware/authMiddleware');

// Упорядочить по
// По релевантности
// По дате загрузки
// По числу просмотров
// По рейтингу
/**
 * @swagger
 * /api/search/:
 *  get:
 *      security:
 *      - bearerAuth: []
 *      summary: Получить видео по запросу
 *      tags: [Search]
 *      parameters:
 *        - in: query
 *          name: query
 *          schema:
 *            type: string
 *            example: Поиск...
 *          description: Поиск видео
 *      responses:
 *          200:
 *              description: Success response
 *              content:
 *                application/json:
 *                  schema:
 *                    type: array
 *                    items:
 *                      $ref: "#/components/schemas/SearchItem"
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

router.get('/', authMiddleware, VideosControllers.getVideos);

module.exports = router;
