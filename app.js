const express = require("express");
const mustache = require("mustache-express");
const bodyParser = require("body-parser");
const app = express();

const mainRoutes = require("./routes/main");

app.engine('mustache', mustache());
app.set("view engine", 'mustache');

app.use(express.static("public"));
app.use(mainRoutes);


app.listen(3000, function(){
  console.log("Server running!");
})
