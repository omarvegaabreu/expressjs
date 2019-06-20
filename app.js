//Node modules
const express = require("express");
const bodyParser = require("body-parser");

//Node modules functions
const app = express();

//Importing routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//Parsing
app.use(bodyParser.urlencoded({ extended: false }));

//outsourced routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//Error page
app.use((req, res, next) => {
  res.status(404).send("<h1>PAGE NOT FOUND</h1>");
});

//server
app.listen(3000);
