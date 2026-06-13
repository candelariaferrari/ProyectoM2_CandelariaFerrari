const validateId = (paramName = "id") => (req, res, next) => {
    const id = Number(req.params[paramName]);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ message: "ID inválido, tiene que ser un número" });
    }
    next();
  };

module.exports = {
  validateId,
};
