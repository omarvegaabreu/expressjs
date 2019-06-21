//Node modules
const express = require("express");
const path = require("path");
//app variables
const router = express.Router();

/***
 * Routes
 */

//Route to views folder

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

//admin/add-product POST request

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

//Module exports
module.exports = router;
