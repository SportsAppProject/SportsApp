const express = require("express");
const router = express.Router();

const {
  getAllComments,
  addComment,
  deletecomment,
  updatecomment,
  getNumber,
  getCommentOnePost,
} = require("../controllers/comment.js");

router.get("/getNumber/:idpost", getNumber);

router.get("/getall", getAllComments);

router.get("/getCommentOnePost/:idpost", getCommentOnePost);

router.post("/add", addComment);

router.delete("/:id", deletecomment);

router.put("/:id", updatecomment);

module.exports = router;
