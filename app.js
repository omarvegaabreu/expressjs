//Node modules
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
//const expressHbs = require("express-handlebars");

//Node modules functions
const app = express();

//Global configuration values templating engines

app.set("view engine", "ejs");
app.set("views", "views");

//Importing routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

//Parsing
app.use(bodyParser.urlencoded({ extended: false }));

//Route to public folder
app.use(express.static(path.join(__dirname, "public")));

//Outsourced routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//Routing 404 page
app.use(errorController.get404);

//server
app.listen(3000);
