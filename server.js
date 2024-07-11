const express = require("express");
const mongoose = require("mongoose");
const app = express();
const articleRouter = require("./routes/article");
const Article = require("./models/articles");
const methodOverride = require("method-override");
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URI, {});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({
    createdAt: "desc",
  });

  res.render("articles/index", { articles });
});

app.use("/articles", articleRouter);
app.listen(3002);
