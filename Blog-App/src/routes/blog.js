const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const imagekit = require("../config");

router.get("/", async (req, res) => {
  const posts = await Blog.find().sort({ createdAt: -1 });
  res.render("home", { posts });
});

router.get("/new", (req, res) => {
  if (!req.session.user) return res.redirect("/login");
  res.render("newpost");
});

router.post("/new", async (req, res) => {
  const upload = await imagekit.upload({
    file: req.body.imageFile,
    fileName: "blog-img"
  });

  await Blog.create({
    title: req.body.title,
    content: req.body.content,
    image: upload.url,
    description: req.body.description
  });

  res.redirect("/");
});

router.post("/delete/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
