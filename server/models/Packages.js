var mongoose = require('mongoose');

var PackageSchema = new mongoose.Schema({
  _id: String ,
  idPartner: String,
  typePackage: String,
  namePackage: String,
  xSubPackage:String,
  subPackage: Array,
  timePackage: String,
  pricePackage: String,
  timeCreated: { type: String, default: Date.now }
});

module.exports = mongoose.model('packages', PackageSchema);
