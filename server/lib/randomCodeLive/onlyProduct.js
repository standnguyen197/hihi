module.exports = (socket) => {
    var randomQuery = require("randomstring");
    var localStorage = require('localStorage');
    var uniqid = require('uniqid');
    var Timer = Date.now();

    // MODEL
    
    var LivesModel = require('../../models/Lives');
    var OrdersModel = require('../../models/Orders');
    var CustomersModel = require('../../models/Customers');
    var ProductsModel = require('../../models/Products');
    async function getSubOrderLive(idPartner){
        return await LivesModel.find({idPartner:idPartner},'subOrderLive').exec();
    }

    async function getTotalNumberOrder(startTimeLive , idPartner , nowTimer){
        var startTimeLiveINT = parseInt(startTimeLive);
        var nowTimerINT = parseInt(nowTimer);
        return await OrdersModel.count({
          idPartner: idPartner , typeOrder: '1'
        }).where('timeOrder').gte(startTimeLiveINT).lte(nowTimerINT).exec();
    }
    
    async function getListOrder(startTimeLive , idPartner , nowTimer){
       
        var startTimeLiveINT = parseInt(startTimeLive);
        var nowTimerINT = parseInt(nowTimer);
        return await OrdersModel.find({
            idPartner: idPartner , typeOrder: '1'
        }).where('timeOrder').gte(startTimeLiveINT).lte(nowTimerINT).exec();
      }
    async function getSubListOrder(startTimeLive , idPartner , nowTimer){
       
        var startTimeLiveINT = parseInt(startTimeLive);
        var nowTimerINT = parseInt(nowTimer);
        return await OrdersModel.find({
            idPartner: idPartner , typeOrder: '0'
        }).where('timeOrder').gte(startTimeLiveINT).lte(nowTimerINT).exec();
      }
    async function checkCustomerOrder(idPartner,idCustomers){
        return await CustomersModel.count({
            idPartner: idPartner , idCustomers: idCustomers
          }).exec();
    }
    async function checkCloseCustomerOrder(idPartner,idCustomers){
        return await CustomersModel.find({
            idPartner: idPartner , idCustomers: idCustomers
          },'typeCustomers').exec();
    }
    

    var PersonOrder = [];

     
    // =============== THỜI GIAN BẮT ĐẦU LIVE GỬI TỪ CLIENT =============== //

    socket.on('startTimeFromClient', () => {
        localStorage.setItem('startTimeLive', Timer);
    });

    socket.on('clearStartTimeLiveFromClient', function(){
        localStorage.removeItem('startTimeLive', null);
    });

    var startTimeLive = localStorage.getItem('startTimeLive');
    
    // ================= LẤY SỐ ĐƠN HÀNG TRONG THỜI GIAN LIVE ============== //

    socket.on('getListOrderFromClient', async function(idPartner){
        var startTimeLives = localStorage.getItem('startTimeLive');
        var nowTimers = Date.now();
        var idPartners = idPartner;
        let listOrder = await getListOrder(startTimeLives, idPartners , nowTimers);
        console.log(listOrder);
        socket.emit('getListOrderFromServer',listOrder);
        
    });
    socket.on('getSubListOrderFromClient', async function(idPartner){
        var startTimeLives = localStorage.getItem('startTimeLive');
        var nowTimers = Date.now();
        var idPartners = idPartner;
        let subListOrder = await getSubListOrder(startTimeLives, idPartners , nowTimers);
        console.log(subListOrder);
        socket.emit('getSubListOrderFromServer',subListOrder);
    });


    // ===============  GỬI MÃ RANDOM CODE LIVE VỀ CLIENT ============== //

    var randomNumber = randomQuery.generate({
          length: 3,
          charset: 'numeric',
          capitalization: 'uppercase'
      });
    socket.emit('codeLiveFromServer', randomNumber );

    // ======== LẮNG NGHE LẤY ĐƠN HÀNG HIỆN TẠI KHI RELOAD TỪ CLIENT =========//

    socket.on('reloadCodeLive',() =>{
        randomNumber = randomQuery.generate({
            length: 3,
            charset: 'numeric',
            capitalization: 'uppercase'
        });
        socket.emit('newCodeLiveFromServer', randomNumber );
    });
    
    // =============== LẤY SỐ ĐƠN HÀNG ĐÃ ĐẶT THÀNH CÔNG ================ //

    socket.on('getNumberOrdersFromClient', async (idPartner) => {
        const nowTimers = Date.now();
        const startTimeLives = startTimeLive;
        const idPartners = idPartner;
        const totalNumberOrders = await getTotalNumberOrder(startTimeLives, idPartners , nowTimers);
        socket.emit('totalNumberOrdersFromServer', totalNumberOrders);
    })
    


    // ============= LẮNG NGHE COMMENT - XỬ LÝ ĐƠN HÀNG ============== //
    socket.on('nowCommentFromClient', async (data) => {

        var idPartner = data.idPartner;
        var messageFacebook = data.messageFB;
        var idCustomers = data.idFBSys;
       
        var oneResult = messageFacebook.split('/')[0];
        var twoResult = messageFacebook.split('/')[1];
        if(oneResult == undefined){
            var oneResult = '';
         }
        if(twoResult == undefined){
           var twoResult = '';
        }
        var totalResult = `${oneResult} ${twoResult}`;
        var upCaseTotalResult = totalResult.toUpperCase();

        //=============== LẤY SỐ NGƯỜI DỰ BỊ ĐỂ LẤY ĐƠN ================= //

        const getSubOrderLiveResult = await getSubOrderLive(idPartner);
        const subOrderLive = parseInt(getSubOrderLiveResult[0].subOrderLive) + 1;
        const checkCodeOrderLive = upCaseTotalResult.indexOf(randomNumber);

        // ============= CHECK CÓ ĐƯỢC COMMENT "CHỐT" KHÔNG ================ //
        const checkCustomers = await checkCustomerOrder(idPartner,idCustomers);

        if(checkCustomers != 0){
            const checkTypeCustomers = await checkCloseCustomerOrder(idPartner,idCustomers);
            const checkTypeCustomersResult = checkTypeCustomers[0].typeCustomers;
            if(checkTypeCustomersResult == 0){
                var closeCustomers = 'normal';
            }else{
                var closeCustomers = 'vip';
            }
            
        }
        const formatCloseCustomerComment = 'CHỐT';
        const checkCodeOrderLiveCloseCustomer = upCaseTotalResult.indexOf(formatCloseCustomerComment);

        // ================= KẾT THÚC CHECK CÓ ĐƯỢC COMMENT "CHỐT" KHÔNG ================ //
        if (checkCodeOrderLive != '-1' || closeCustomers == 'vip' && checkCodeOrderLiveCloseCustomer != '-1') {

            PersonOrder.push(data);

              if (PersonOrder.length == subOrderLive) {

                // ========= LƯU n NGƯỜI KHÁCH ORDER VÀO DATABASE =========== //
                
                PersonOrder.forEach(async function(valueListOrder, i) {

                    var linkFB = valueListOrder.idFB;
                    var idFB = valueListOrder.idFBSys;
                    var avatarFB = valueListOrder.avatarFB;
                    var nameFB = valueListOrder.nameFB;
                    var codeProduct = randomNumber;
                    var idPartner = valueListOrder.idPartner;

                    var nameCustomers = valueListOrder.nameFB;
                    var idCustomers = valueListOrder.idFBSys;
                    var avatarCustomers = valueListOrder.avatarFB;


                    if (i == 0) {
                        var dataOrder = new OrdersModel({
                          _id: 'DH-'+uniqid.time().toUpperCase(),
                            idFB,
                            idPartner,
                            linkFB,
                            nameFB,
                            avatarFB,
                            codeProduct,
                            typeOrder: '1',
                            statusVerify: '0'
                        });
                        
                        // ============= XỬ LÝ SỐ ĐIỆN THOẠI ĐỂ LƯU THÔNG TIN ĐẦY ĐỦ =========== //
                        var mesFB = valueListOrder.messageFB;
                        var oneResults = mesFB.split('/')[0];
                        var twoResults = mesFB.split('/')[1];
                        if(oneResults == undefined){
                            var oneResults = '';
                        }
                        if(twoResults == undefined){
                            var twoResults = '';
                        }
                            const totalResults = `${oneResults} ${twoResults}`;
                            const upCaseTotalResults = totalResults.toUpperCase();

                            const formatPhoneCustomers = /^\d+$/g;
                            const resultPhoneCustomers = formatPhoneCustomers.test(oneResults);

                            if(resultPhoneCustomers == true){
                                var phoneCustomers = oneResults;
                            }else{
                                var phoneCustomers = '';
                            }


                        const checkCustomers = await checkCustomerOrder(idPartner,idCustomers);
                        if(checkCustomers == 0){

                            var dataCustomers = new CustomersModel({
                                nameCustomers,
                                idPartner,
                                idCustomers,
                                avatarCustomers,
                                phoneCustomers
                            });
        
                            await dataCustomers.save();
                        }
                        // ============= KẾT THÚC XỬ LÝ SDT ============== //

                        //========== XỬ LÝ KHÁCH QUEN VÀ KHÁCH THƯỜNG =========//

                        if(checkCustomers != 0){
                            const checkTypeCustomers = await checkCloseCustomerOrder(idPartner,idCustomers);
                            const checkTypeCustomersResult = checkTypeCustomers[0].typeCustomers;
                            if(checkTypeCustomersResult == 0){
                                var closeCustomers = 'normal';
                            }else{
                                var closeCustomers = 'vip';
                            }
                            
                        }
                        const checkCloseCustomers = closeCustomers;
                        if(checkCloseCustomers == 'vip'){
                            var infoData = {
                                idFB,
                                linkFB,
                                avatarFB,
                                nameFB,
                                codeProduct,
                                closeCustomers: 'Khách quen'
                              }
                        }else{
                            var infoData = {
                                idFB,
                                linkFB,
                                avatarFB,
                                nameFB,
                                codeProduct,
                                closeCustomers: 'Khách mới'
                              }
                        }

                    //=== KẾT THÚC XỬ LÝ KHÁCH QUEN VÀ KHÁCH THƯỜNG ===//

                    try{   
                                   
                        await dataOrder.save();

                        const startTimeLive = localStorage.getItem('startTimeLive');
                        const nowTimer = Date.now();
                        const totalNumberOrders = await getTotalNumberOrder(startTimeLive, idPartner , nowTimer);
                        socket.emit('totalNumberOrdersFromServer', totalNumberOrders);
                        socket.emit('infoOrderFromServer', infoData);

                        } catch (err){
                            console.log(err);
                        }

                    } else {
                        var dataOrder = new OrdersModel({
                            _id: 'DH-'+uniqid.time().toUpperCase(),
                            idFB,
                            idPartner,
                            linkFB,
                            nameFB,
                            avatarFB,
                            codeProduct,
                            typeOrder: '0',
                            statusVerify: '0'
                        });

                        try{          
                          await dataOrder.save();
                         
                        } catch (err){
                            console.log(err);
                        }
                    }
                });

                // ================== LƯU SẢN PHẨM  =================== //

                var dataProduct = {
                    _id: data.codeProduct,
                    idPartner:idPartner,
                    priceProduct: data.priceProduct,
                    avatarProduct: data.avatarProduct,
                    timeCreated: Date.now(),
                    exportProduct: '1'
                }
                ProductsModel.findOneAndUpdate({_id: data.codeProduct} , {$set:dataProduct},{upsert:true,new:true}).exec();
  
                PersonOrder = [];
               
            }
        }
        
    });
    return;
}