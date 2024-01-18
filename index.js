const express = require('express');
const sequelize = require('./config/db');
const app = express();
const PORT = 3000;
app.use(express.json());
const router = require('./routes');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
app.use('/api', router);

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'YouTube SPA',
            version: '1.0.0',
            description:
                'API для поиска youtube-видео по ключевым словам, а также сохранение запросов поиска',
            contact: {
                name: 'Yura Kozyrenko',
            },
            servers: ['http://localhost:3000'],
        },
    },
    apis: ['./routes/*js'],
};
app.use('/api', require('./routes/index'));

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Обработка ошибок, последний Middleware
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        console.log('Соединение с БД было успешно установлено');
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
    } catch (e) {
        console.log('Невозможно выполнить подключение к БД: ', e);
    }
};
start();
