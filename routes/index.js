var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hits', function(req, res, next){
  res.send('Hits page');
});

router.get('/auth/spotify', function(req, res, next){
  res.send('spotify sign in /redirect');
});

router.get('/auth/spotify/callback', function(req, res, next){
  res.send('spotify has returned you authenticated to this location');
});



module.exports = router;
