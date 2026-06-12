const validateCreateAuthor = (req, res, next) => {
  const { name, email, bio } = req.body;

  if (!name || !email || !bio) {
    return res.status(400).json({
      message: "Todos los campos son obligatorios",
    });
  }

  next();
};

const validateEditAuthor = (req, res, next) => {
  const { name, email, bio } = req.body;

  if (!name || !email || !bio) {
    return res.status(400).json({
      message: "Todos los campos son obligatorios",
    });
  }

  next();
};

module.exports = {
  validateCreateAuthor,
  validateEditAuthor 
};