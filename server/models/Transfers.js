var mongoose = require('mongoose');

var TransferSchema = new mongoose.Schema({
  idPartner: String,
  typeTransfer: String, // '0' - Nạp tiền ; '1' - Thanh toán dịch vụ 
  priceTransfer: String,
  timeCreated: { type: String, default: Date.now }
});

module.exports = mongoose.model('transfers', TransferSchema);
