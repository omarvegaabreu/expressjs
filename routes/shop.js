//Node modules
const path = require("path");

const express = require("express");

const router = express.Router();

const adminData = require("./admin");

//Root directory path
const rootDirectory = require("../util/path");

//Route to views folder
router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

//Module exports
module.exports = router;
