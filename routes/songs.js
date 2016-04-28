var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var client = new Client();

/* GET users listing. */
router.get('/', function(req, res, next){
  client.get("https://api.spotify.com/v1/artists/5a2EaR3hamoenG9rDuVn8j/top-tracks?country=us", function (data, response){
  res.json(data)
 })
});

module.exports = router;
