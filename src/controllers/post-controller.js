const postsService = require("../services/post-service");

const getPosts = async (req, res, next) => {
  try {
    const posts = await postsService.getPosts();

    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const getPost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await postsService.getPostById(id);

    if (!post) {
      return res.status(404).json({
        message: "Post no encontrado",
      });
    }

    res.json(post);
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    const { title, content, author_id, published } = req.body;

    const post = await postsService.createPost(title, content, author_id, published);

    res.status(201).json(post);
  } catch (error) {
    if (error.code === '23503') {
      return res.status(400).json({ 
        message: "El author_id no existe" 
      });
    }
    next(error);
  }
};

const editPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, published} = req.body;

    const post = await postsService.editPost(id, title, content, published);
    if (!post) {
      return res.status(404).json({
        message: "Post no encontrado",
      });
    }
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await postsService.deletePost(id);

    if (!post) {
      return res.status(404).json({
        message: "Post no encontrado",
      });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const getPostsByAuthor = async (req, res, next) => {
  try {
    const { authorId } = req.params;

    const postsAuthorId = await postsService.getPostsByAuthor(authorId)

    if (postsAuthorId.length === 0) {
      return res.status(404).json({
        message: "Autor no encontrado",
      });
    }

    res.json(postsAuthorId);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getPosts,
  getPost,
  createPost,
  editPost,
  deletePost,
  getPostsByAuthor
};
