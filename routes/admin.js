//Node modules
const express = require("express");

const path = require("path");

//Root directory path to app.js
const rootDirectory = require("../util/path");

//app variables
const router = express.Router();

//add product
const products = [];

//Route to views folder
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDirectory, "views", "add-product.html"));
});

//admin/add-product POST request

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
