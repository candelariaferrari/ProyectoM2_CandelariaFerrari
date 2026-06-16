const authorsService = require("../services/authors-service");


const getAuthors = async (req, res, next) => {
  try {
    const authors =
      await authorsService.getAuthors();

    res.status(200).json(authors);
  } catch (error) {
    next(error);
  }
};

const getAuthor = async (req, res,next) => {
  try {
    const { id } = req.params;

    const author =
      await authorsService.getAuthorById(id);

    if (!author) {
      return res.status(404).json({
        message: "Autor no encontrado",
      });
    }

    res.json(author);
  } catch (error) {
    next(error);
  }
};

const createAuthor = async (req, res, next) => {
  try {
    const { name, email, bio } = req.body;

    const author = await authorsService.createAuthor(
      name,
      email,
      bio
    );

    res.status(201).json(author);
  } catch (error) {
    if (error.code === '23505') {
      return res.status(409).json({ 
        message: "El email ya está registrado" 
      });
    };
    next(error);
  }
};

const editAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, bio } = req.body;

    const author = await authorsService.editAuthor(
      id,
      name,
      email,
      bio
    );
    if (!author) {
      return res.status(404).json({
        message: "Autor no encontrado",
      });
    }  
    res.status(200).json(author);
  } catch (error) {
    if (error.code === '23505') {
      return res.status(409).json({ 
        message: "El email ya está registrado" 
      });
    };
    next(error);
  }
};

const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;

    const author = await authorsService.deleteAuthor(id);

    if (!author) {
      return res.status(404).json({
        message: "Autor no encontrado",
      });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};



module.exports = {
  getAuthors,
  getAuthor,
  createAuthor, 
  editAuthor,
  deleteAuthor
};