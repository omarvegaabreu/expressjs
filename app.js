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

//Routes
app.use(adminRoutes);
app.use(shopRoutes);

//server
app.listen(3000);
