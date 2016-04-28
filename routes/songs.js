var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('You forgot to reqest a new song with node-rest-client');
});

var Client = require('node-rest-client').Client;

var client = new Client();

client.get("https://api.spotify.com/v1/artists/5a2EaR3hamoenG9rDuVn8j/top-tracks?country=us", function (data, response) {
  for (var i = 0 ; i < data.tracks.length; i++){

   console.log(data.tracks[i].name);
  }
});

module.exports = router;
