const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  addPost,
  getPost,
  delPost,
  updatepost,
  updatelike,
} = require("../controllers/post.js");

router.get("/getall", getAllPosts); // get all posts

router.get("/:categorie", getPost); // get all post by categorie

router.post("/add", addPost); // add post

router.delete("/del/:id", delPost); // delete post

router.put("/update/:id", updatepost); // update post

router.put("/updatelike/:id", updatelike); // update like of post !!

module.exports = router;
