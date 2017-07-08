const express = require("express");
const router = express.Router();

router.get('/', function(req, res){
  console.log("Home page route connected!")
  res.render("main")
})



module.exports = router;
