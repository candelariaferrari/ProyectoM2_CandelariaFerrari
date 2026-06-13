const validateCreatePost = (req, res, next) => {
  const { title, content, author_id, published } = req.body;

  if (!title || !content || !author_id ) {
    return res.status(400).json({
      message: "Todos los campos son obligatorios",
    });
  }
  if (typeof published !== "boolean") {
    return res.status(400).json({
      message: "Published es obligatorio y debe ser true o false",
    });
  }


  next();
};

const validateEditPost = (req, res, next) => {
  const { title, content, published } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: "Título y contenido son obligatorios",
    });
  }

  if (typeof published !== "boolean") {
    return res.status(400).json({
      message: "Published es obligatorio y debe ser true o false",
    });
  }

  next();
};

module.exports = {
  validateCreatePost,
  validateEditPost,
};
