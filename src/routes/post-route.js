const express = require("express");

const { getPost, createPost, editPost, deletePost, getPosts } = require("../controllers/post-controller");
const { validateCreatePost, validateEditPost } = require("../validators/post-validator");
const { validateId } = require("../validators/id-validator");

const router = express.Router();

router.get("/", getPosts);

router.get("/:id",validateId, getPost);

router.post("/", validateCreatePost, createPost);

router.put("/:id",validateId, validateEditPost, editPost);

router.delete("/:id",validateId, deletePost);

module.exports = router;
