
const express = require("express");
const app = express();
const path = require("path");

require("./src/config"); // MongoDB and ImageKit config

const blogRoutes = require("./src/routes/blog");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", blogRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});