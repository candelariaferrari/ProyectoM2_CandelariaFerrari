const express = require("express");
const authorsRouter = require('./routes/authors-route');
const postsRouter = require('./routes/post-route');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/openAPI.yaml')


const app = express();

// middlewares globales
app.use(express.json());

// ruta raíz
app.use('/api/authors', authorsRouter);

app.use('/api/posts', postsRouter);

app.use(errorHandler);

app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;