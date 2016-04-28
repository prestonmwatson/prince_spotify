var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hits', function(req, res, next){
  res.send('Hits page');
});

router.get('/auth/spotify', passport.authenticate('spotify', {}), function(req, res, next){
  res.send('spotify sign in /redirect');
});

router.get('/auth/spotify/callback', passport.authenticate('spotify', { failureRedirect: '/' }), function(req, res, next){
  res.send('spotify has returned you authenticated to this location');
});


module.exports = router;
