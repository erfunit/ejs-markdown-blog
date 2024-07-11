const express = require("express");
const router = express.Router();
const Article = require("../models/articles");

router.get("/new", (req, res) => {
  res.render("articles/new", { article: new Article() });
});

router.get("/edit/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render("articles/edit", { article });
});

router.get("/:slug", async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug });
  if (article === null) res.redirect("/");
  res.render("articles/show", { article });
});

router.post("/", async (req, res) => {
  const { title, description, markdown } = req.body;
  let article = new Article({
    title,
    description,
    markdown,
  });

  try {
    article = await article.save();
    res.redirect(`/articles/${article.slug}`);
  } catch (error) {
    console.log(error);
    res.render("articles/new", { article });
  }
});

router.put("/:id", async (req, res) => {
  const { title, description, markdown } = req.body;

  try {
    let article = await Article.findById(req.params.id);
    article.title = title;
    article.description = description;
    article.markdown = markdown;
    article = await article.save();
    res.redirect(`/articles/${article.slug}`);
  } catch (error) {
    console.log(error);
    res.render("articles/edit", { article });
  }
});

router.get("/", (req, res) => {
  res.redirect("/");
});

router.delete("/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
