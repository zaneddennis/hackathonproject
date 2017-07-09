const express = require("express");
const router = express.Router();
const fetchGoogleMaps = require('fetch-google-maps');


router.get('/', function(req, res){
  console.log("Home page route connected!");

  fetchGoogleMaps({
      apiKey: 'AIzaSyD7A419LWMHGOXzXWr1GrSWEL-bLE70lP4',
      language: 'en',
      libraries: ['geometry']
  }).then(( Maps ) => {
      const map = new Maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: new Maps.LatLng(-34.397, 150.644)
      });
  });

  res.render("main")
})

router.post('/', function(req, res){
  console.log("Posting to home page!")

  res.render("main", {
  })
})

module.exports = router;
