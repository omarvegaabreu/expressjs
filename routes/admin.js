//Node modules
const express = require("express");

const path = require("path");

//Root directory path to app.js
const rootDir = require("../util/path");

//app variables
const router = express.Router();

//add product
const products = [];

//Route to views folder
//admin/add-product GET request
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

//admin/add-product POST request

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
