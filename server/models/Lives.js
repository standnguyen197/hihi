var mongoose = require('mongoose');

var LiveSchema = new mongoose.Schema({
  idPartner: String,
  accountLive: String,
  idFanpageLive: String,
  accessTokenPage: String,
  codeLive:String,
  typeProductLive: String,
  subOrderLive: String
});

module.exports = mongoose.model('lives', LiveSchema);
