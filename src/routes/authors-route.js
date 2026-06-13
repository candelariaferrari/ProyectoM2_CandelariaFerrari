const express = require("express");

const { getAuthors, getAuthor, createAuthor, editAuthor, deleteAuthor } = require("../controllers/authors-controller");
const { validateCreateAuthor, validateEditAuthor } = require("../validators/authors-validator");
const { validateId } = require("../validators/id-validator");

const router = express.Router();

router.get("/", getAuthors);

router.get("/:id",validateId(), getAuthor);

router.post("/", validateCreateAuthor, createAuthor);

router.put("/:id",validateId(), validateEditAuthor, editAuthor);

router.delete("/:id",validateId(), deleteAuthor);

module.exports = router;
