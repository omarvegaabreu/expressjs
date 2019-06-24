//Node modules
const path = require("path");

const express = require("express");

const router = express.Router();

const adminData = require("./admin");

//Root directory path
const rootDirectory = require("../util/path");

//Route to views folder
router.get("/", (req, res, next) => {
  res.render("shop");

  // console.log("shop.js", adminData.products);
  // res.sendFile(path.join(rootDirectory, "views", "shop.html"));
});

//Module exports
module.exports = router;
