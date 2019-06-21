//Node modules
const express = require("express");

const path = require("path");

const router = express.Router();

//Root directory path
const rootDirectory = require("../util/path");

//Route to views folder
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDirectory, "views", "shop.html"));
});

//Module exports
module.exports = router;
