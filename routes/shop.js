//Node modules
const express = require("express");

//Variables
const router = express.Router();

//Routes
router.get("/", (req, res, next) => {
  res.send("<h1>Hello my friend, this is express</h1>");
});

//Module exports
module.exports = router;
