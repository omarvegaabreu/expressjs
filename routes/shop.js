//Node modules
const path = require("path");

const express = require("express");

const router = express.Router();

//Importing products js
const productsController = require("../controllers/products");

//Route to views folder
router.get("/", productsController.getProducts);
//Module exports
module.exports = router;
