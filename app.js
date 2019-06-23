//Node modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//Node modules functions
const app = express();

//Importing routes
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//Parsing
app.use(bodyParser.urlencoded({ extended: false }));

//Route to public folder
app.use(express.static(path.join(__dirname, "public")));

//Outsourced routes
app.use("/admin", adminData.routes);
app.use(shopRoutes);

//Routing 404 page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

console.log(adminData);
//server
app.listen(3000);
