const pool = require("../database/database");

const getPosts = async () => {
  const result = await pool.query("SELECT * FROM posts");
  return result.rows;
};
const getPostById = async (id) => {
  const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
  return result.rows[0];
};

const createPost = async (title, content, author_id, published) => {
  const result = await pool.query(
    `
    INSERT INTO posts (title, content, author_id, published)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [title, content, author_id, published]
  );

  return result.rows[0];
};

const editPost = async (id, title, content, published) => {
  const result = await pool.query(
    `
    UPDATE posts
    SET title = $1,
        content = $2,
        published = $3
    WHERE id = $4
    RETURNING *
    `,
    [title, content, published, id]
  );

  return result.rows[0];
};

const deletePost = async (id) => {
  const result = await pool.query(
    `
    DELETE FROM posts
    WHERE id = $1
    RETURNING *
    `,
    [id]
  );

  return result.rows[0];
};
module.exports = {
  getPosts,
  getPostById,
  createPost,
  editPost,
  deletePost,
};
