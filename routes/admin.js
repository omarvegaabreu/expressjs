//Node modules
const express = require("express");
//app variables
const router = express.Router();

//routes
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name= "title"><button type="submit">Add product</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

//Module exports
module.exports = router;
