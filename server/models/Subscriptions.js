var mongoose = require('mongoose');

var SubcriptionSchema = new mongoose.Schema({
  _id: String ,
  idPartner: String,
  idPackage: String,
  typePackage: String,
  timeStart: String,
  timeEnd: String,
  timeCreated: { type: String, default: Date.now }
});

module.exports = mongoose.model('subcriptions', SubcriptionSchema);
