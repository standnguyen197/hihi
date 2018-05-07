var mongoose = require('mongoose');
var Time = Date.now();

var OrderSchema = new mongoose.Schema({
  _id: String,
  idPartner: String, // Có thể là chủ shop hoặc doanh nghiệp shop
  idFB: String, // ID NGƯỜI MUA
  nameFB: String, // TÊN NGƯỜI MUA
  avatarFB: String, // ẢNH ĐẠI DIỆN
  codeProduct: String, // MÃ SẢN PHẨM MUA
  typeOrder: {type: String, default: '0'},
  statusVerify: {type:String , default: '0'}, // LÀ NGƯỜI MUA ĐẦU HAY DỰ BỊ
  timeOrder: { type: String, default: Date.now }, // THỜI GIAN MUA
  timeCreated: { type: String, default: Date.now }
});

module.exports = mongoose.model('orders', OrderSchema);
