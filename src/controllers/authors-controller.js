const authorsService = require("../services/authors-service");


const getAuthors = async (req, res) => {
  try {
    const authors =
      await authorsService.getAuthors();

    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getAuthor = async (req, res) => {
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
    res.status(500).json({
      error: error.message,
    });
  }
};

const createAuthor = async (req, res) => {
  try {
    const { name, email, bio } = req.body;

    const author = await authorsService.createAuthor(
      name,
      email,
      bio
    );

    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const editAuthor = async (req, res) => {
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
    res.status(500).json({
      error: error.message,
    });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    const author = await authorsService.deleteAuthor(id);

    if (!author) {
      return res.status(404).json({
        message: "Autor no encontrado",
      });
    }

    res.status(200).json({
      message: "Autor eliminado correctamente",
      author,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};



module.exports = {
  getAuthors,
  getAuthor,
  createAuthor, 
  editAuthor,
  deleteAuthor
};