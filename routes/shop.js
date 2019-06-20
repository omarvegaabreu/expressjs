//Node modules
const express = require("express");

//Variables
const router = express.Router();

//Routes
router.get("/", (req, res, next) => {
  res.send("<h1>HELLO THIS IS MY MAIN ROUTE THE SHOP JS FILE</h1>");
});

//Module exports
module.exports = router;
