const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("In another middlewareS!");
  res.send("<h1>THIS IS / PRODUCT </h1>");
});

app.use("/", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello my friend, this is express</h1>");
});

app.listen(3000);
