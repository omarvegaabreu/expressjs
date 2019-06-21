//Node modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//Node modules functions
const app = express();

//Importing routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//Parsing
app.use(bodyParser.urlencoded({ extended: false }));

//Outsourced routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//Routing 404 page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

//server
app.listen(3000);
