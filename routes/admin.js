//Node modules
const express = require("express");

//Importing products js
const productsController = require("../controllers/products");

//app variables
const router = express.Router();

//Route to views folder
//admin/add-product GET request
router.get("/add-product", productsController.getAddProduct);

//admin/add-product POST request

router.post("/add-product", productsController.postAddProduct);

module.exports = router;
