const express = require("express");
const authorsRouter = require('./routes/authors-route');
const postsRouter = require('./routes/post-route');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// middlewares globales
app.use(express.json());

// ruta raíz
app.use('/api/authors', authorsRouter);

app.use('/api/posts', postsRouter);

app.use(errorHandler);

module.exports = app;