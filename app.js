//Node modules
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

//Node modules functions
const app = express();

//Global configuration values templating engines

//EJS
app.set("view engine", "ejs");
app.set("views", "views");

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
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});
//console.log(adminData);

//server
app.listen(3000);
