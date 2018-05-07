var mongoose = require('mongoose');
var Time = Date.now();

var CustomerSchema = new mongoose.Schema({
  idPartner: String, // Có thể là chủ shop hoặc doanh nghiệp shop
  idCustomers: String, // ID KHÁCH HÀNG
  nameCustomers: String, // TÊN KHÁCH HÀNG
  avatarCustomers: String, // ẢNH ĐẠI DIỆN
  phoneCustomers: String, // SỐ ĐIỆN THOẠI
  typeCustomers: { type:String , default: '0' }, // LOẠI KHÁCH HÀNG
  timeCreated: { type: String, default: Date.now }
});

module.exports = mongoose.model('customers', CustomerSchema);
