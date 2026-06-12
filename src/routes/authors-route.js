const express = require("express");

const { getAuthors, getAuthor, createAuthor, editAuthor, deleteAuthor } = require("../controllers/authors-controller");

const router = express.Router();

router.get("/", getAuthors);

router.get("/:id", getAuthor);

router.post("/", createAuthor);

router.put("/:id", editAuthor);

router.delete("/:id", deleteAuthor);

module.exports = router;
