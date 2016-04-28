var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('You forgot to reqest a new song with node-rest-client');
});

module.exports = router;
