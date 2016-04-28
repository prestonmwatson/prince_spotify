var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  spotifyId: {type: String, required: true}
});

var User = mongoose.model('User', userSchema);

module.exports = User;
