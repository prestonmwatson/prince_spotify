var express = require('express');
var router = express.Router();
var passport = require('passport');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/hits', isLoggedIn, function(req, res, next){
  res.render('hits');
});

router.get('/auth/spotify', passport.authenticate('spotify', {}), function(req, res, next){
});

router.get('/auth/spotify/callback', passport.authenticate('spotify', { failureRedirect: '/' }), function(req, res, next){

});

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
})


module.exports = router;
