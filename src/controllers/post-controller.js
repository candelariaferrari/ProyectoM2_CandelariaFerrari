const postsService = require("../services/post-service");

const getPosts = async (req, res) => {
  try {
    const posts = await postsService.getPosts();

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getPost = async (req, res) => {
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
    res.status(500).json({
      error: error.message,
    });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content, author_id, published } = req.body;

    const post = await postsService.createPost(title, content, author_id, published);

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const editPost = async (req, res) => {
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
    res.status(500).json({
      error: error.message,
    });
  }
};

const deletePost = async (req, res) => {
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
    res.status(500).json({
      error: error.message,
    });
  }
};

const getPostsByAuthor = async (req, res) => {
  try {
    const { authorId } = req.params;

    const postsAuthorId = await postsService.getPostsByAuthor(authorId)

    if (postsAuthorId.length === 0) {
      return res.status(404).json({
        message: "Post no encontrado",
      });
    }

    res.json(postsAuthorId);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
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
