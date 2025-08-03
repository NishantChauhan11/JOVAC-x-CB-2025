
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");

const authRoutes = require("./src/routes/auth");
const blogRoutes = require("./src/routes/blog");
require("./src/config"); 

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secretblog",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/", authRoutes);
app.use("/blog", blogRoutes);

module.exports = app;

