const express = require("express");
const authorsRouter = require('./routes/authors-route');
const app = express();

// middlewares globales
app.use(express.json());

// ruta raíz
app.use('/api/authors', authorsRouter);



module.exports = app;