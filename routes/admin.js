//Node modules
const express = require("express");

const path = require("path");

//Importing products js
const productsController = require("../controllers/products");

//Root directory path to app.js
//const rootDir = require("../util/path");

//app variables
const router = express.Router();

//add product
const products = [];

//Route to views folder
//admin/add-product GET request
router.get("/add-product", productsController.getAddProduct);

//admin/add-product POST request

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
