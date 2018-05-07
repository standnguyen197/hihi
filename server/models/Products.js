var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  _id: String ,
  idPartner: String,
  priceProduct: String,
  avatarProduct: String,
  nameProduct: String,
  exportProduct: String,
  timeCreated: { type: String, default: Date.now }
});

module.exports = mongoose.model('products', ProductSchema);
