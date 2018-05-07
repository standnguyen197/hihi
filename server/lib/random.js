module.exports = async (socket,idPartner) => {

    // MODEL
    var LivesModel = require('../models/Lives');
    //===================== TỔ HỢP LẤY GIỮ LIỆU ========================= //
    
    async function typeProductLive(idPartner){
        return await  LivesModel.find({idPartner:idPartner}, 'typeProductLive').exec();
    }
    
    let resultTypeProduct = await typeProductLive(idPartner);
    let results = resultTypeProduct[0].typeProductLive;
    
    if(results == 'manyProduct'){
        require('../lib/randomCodeLive/manyProduct')(socket);
    }else{
        require('../lib/randomCodeLive/onlyProduct')(socket);
    }
 
    
    return;
}