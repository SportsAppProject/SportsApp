const express = require("express");
const router = express.Router();

const {
  getAllComments,
  addComment,
  deletecomment,
  updatecomment,
} = require("../controllers/comment.js");

router.get("/getall", getAllComments);

router.post("/add", addComment);

router.delete("/:id", deletecomment);

router.put("/:id", updatecomment);

module.exports = router;
