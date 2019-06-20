//Node modules
const express = require("express");
//app variables
const router = express.Router();

/***
 * Routes
 */

/**
 *  /admin/add-product GET request
 */
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name= "title"><button type="submit">Add product</button></form>'
  );
});

/**
 *  /admin/add-product POST request
 */
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

//Module exports
module.exports = router;
