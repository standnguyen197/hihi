var mongoose = require('mongoose');
var randomstring = require('randomstring');
var idUser = randomstring.generate({
  length: 9,
  charset: 'numeric'
});
var UserSchema = new mongoose.Schema({
  _id: { type: String, default: idUser },
  idPartnerFB : String,
  namePartner: String,
  avatarPartner: String,
  currentSubscriptions: String,
  roleIdPartner: {type: Number, default: 0},
  serviceStatus: {type: Number, default: 0},
  timeCreated: { type: String, default: Date.now }
});

module.exports = mongoose.model('users', UserSchema);
