var mongoose = require('mongoose');
var randomstring = require('randomstring');
var id = randomstring.generate({
    length: 9,
    charset: 'numeric'
  });

var uniqid = require('uniqid');
var walletid = randomstring.generate({
    length: 12,
    charset: 'numeric'
  });
var WalletSchema = new mongoose.Schema({
  _id: {type: String, default: id} ,
  idWallet: {type: String , default: walletid},
  idPartner: String,
  balance: { type: String , default: 0},
  timeCreated: { type: String, default: Date.now },
  timeUpdated: { type:String , default: Date.now }
});
module.exports = mongoose.model('wallets', WalletSchema);
