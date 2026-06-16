const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");
const authorsRouter = require("./routes/authors-route");
const postsRouter = require("./routes/post-route");
const errorHandler = require("./middlewares/errorHandler");

const swaggerDocument = YAML.load(path.join(__dirname, "../docs/openAPI.yaml"));

const app = express();

// middlewares globales - SIEMPRE PRIMERO
app.use(cors());
app.use(express.json());

// ruta raíz
app.get("/", (req, res) => {
  res.json({ message: "MiniBlog API corriendo", docs: "/api-docs" });
});

app.use("/api/authors", authorsRouter);
app.use("/api/posts", postsRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

module.exports = app;