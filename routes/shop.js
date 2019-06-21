//Node modules
const express = require("express");
const path = require("path");

//Variables
const router = express.Router();

//Route to views folder
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

//Module exports
module.exports = router;
