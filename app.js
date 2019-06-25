//Node modules
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

//Node modules functions
const app = express();

//Global configuration values templating engines

//Pug
// app.set("view engine", "pug");
// app.set("views", "views");

//Handlebars
app.engine("hbs", expressHbs());
app.set("view engine", "hbs");
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
  res.status(404).render("404");
});
//console.log(adminData);

//server
app.listen(3000);
