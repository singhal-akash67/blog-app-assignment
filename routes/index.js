var express = require("express");
var router = express.Router();

const blogs = [
  {
    title: "How Node js works",
    author: "akash.singhal67@yahoo.com",
    description: "Node is a run time environment for running javascripts..."
  },
  {
    title: "ReactJS",
    author: "akash.singhal67@yahoo.com",
    description: "ReactJS is a single page application which involves jquery in its core. You can build great UIs with lot of flexibility and speed"
  },
  {
    title: "MongoDb",
    author: "tanmaymishra@gmail.com",
    description: "Mongo DB is a document value pair database suitable for unstructured data"
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { blogs });
});

router.post("/filter", function (req, res, next) {
  const filterValue = req.body.filter;
  console.log(filterValue);

  const filteredBlogs = blogs.filter((blog) => blog.author === filterValue);
  console.log(filteredBlogs);

  res.render("index", { blogs: filteredBlogs });
});

router.get("/create", function (req, res, next) {
  return res.render("create");
});

router.post("/create", function (req, res, next) {
  const title = req.body.title;
  const email = req.body.email;
  const description = req.body.description;

  const blog = { title, author: email, description };
  blogs.push(blog);
  res.redirect("/");
});


module.exports = router;
