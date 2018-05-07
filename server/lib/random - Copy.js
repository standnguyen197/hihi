module.exports = (socket) => {
    var express = require('express');
    var randomQuery = require("randomstring");
    var localStorage = require('localStorage');
    var uniqid = require('uniqid');
    var Timer = Date.now();

    // MODEL

    var LivesModel = require('../models/Lives');
    var OrdersModel = require('../models/Orders');
    var CustomersModel = require('../models/Customers');
    var ProductsModel = require('../models/Products');

    //===================== TỔ HỢP LẤY GIỮ LIỆU ========================= //
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
          length: 4,
          charset: 'hex',
          capitalization: 'uppercase'
      });
    socket.emit('codeLiveFromServer', randomNumber );

    // ======== LẮNG NGHE LẤY ĐƠN HÀNG HIỆN TẠI KHI RELOAD TỪ CLIENT =========//
    socket.on('reloadCodeLive',() =>{
        randomNumber = randomQuery.generate({
            length: 4,
            charset: 'hex',
            capitalization: 'uppercase'
        });
        socket.emit('newCodeLiveFromServer', randomNumber );
    });
    

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

        //========== LẤY SỐ NGƯỜI DỰ BỊ ĐỂ LẤY ĐƠN ============ //
        console.log(`================${randomNumber}==================`)
        const getSubOrderLiveResult = await getSubOrderLive(idPartner);
        const subOrderLive = parseInt(getSubOrderLiveResult[0].subOrderLive) + 1;
        const checkCodeOrderLive = upCaseTotalResult.indexOf(randomNumber);

        const checkCustomers = await checkCustomerOrder(idPartner,idCustomers);

        if(checkCustomers != 0){
            var checkTypeCustomers = await checkCloseCustomerOrder(idPartner,idCustomers);
            var checkTypeCustomersResult = checkTypeCustomers[0].typeCustomers;
            if(checkTypeCustomersResult == 0){
                var closeCustomers = 'normal';
            }else{
                var closeCustomers = 'vip';
            }
            
        }
       
        const formatCloseCustomerComment = 'CHỐT';
        const checkCodeOrderLiveCloseCustomer = upCaseTotalResult.indexOf(formatCloseCustomerComment);
        console.log(`========= [${closeCustomers}] =============`);

        if (checkCodeOrderLive != '-1' || closeCustomers == 'vip' && checkCodeOrderLiveCloseCustomer != '-1') {

            PersonOrder.push(data);

              if (PersonOrder.length == subOrderLive) {

                // ========= LƯU 2 NGƯỜI KHÁCH ORDER VÀO DATABASE =========== //
                

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
                        
                        // == XỬ LÝ SỐ ĐIỆN THOẠI == //
                        var mesFB = valueListOrder.messageFB;
                        var oneResults = mesFB.split('/')[0];
                        var twoResults = mesFB.split('/')[1];
                        if(oneResults == undefined){
                            var oneResults = '';
                        }
                        if(twoResults == undefined){
                            var twoResults = '';
                        }
                            var totalResults = `${oneResults} ${twoResults}`;
                            var upCaseTotalResults = totalResults.toUpperCase();

                            var formatPhoneCustomers = /^\d+$/g;
                            var resultPhoneCustomers = formatPhoneCustomers.test(oneResults);

                            if(resultPhoneCustomers == true){
                                var phoneCustomers = oneResults;
                            }else{
                                var phoneCustomers = '';
                            }


                        var checkCustomers = await checkCustomerOrder(idPartner,idCustomers);
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
                        // ===== KẾT THÚC XỬ LÝ SDT ===== //

                        //=== XỬ LÝ KHÁCH QUEN VÀ KHÁCH THƯỜNG ===//

                        if(checkCustomers != 0){
                            var checkTypeCustomers = await checkCloseCustomerOrder(idPartner,idCustomers);
                            var checkTypeCustomersResult = checkTypeCustomers[0].typeCustomers;
                            if(checkTypeCustomersResult == 0){
                                var closeCustomers = 'normal';
                            }else{
                                var closeCustomers = 'vip';
                            }
                            
                        }
                        var checkCloseCustomers = closeCustomers;
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

                        var startTimeLive = localStorage.getItem('startTimeLive');
                        var nowTimer = Date.now();
                        var totalNumberOrders = await getTotalNumberOrder(startTimeLive, idPartner , nowTimer);
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

                // ================= TRẢ VỀ MÃ LIVE MỚI ================= //

                randomNumber = randomQuery.generate({
                    length: 4,
                    charset: 'hex',
                    capitalization: 'uppercase'
                });
                PersonOrder = [];
                socket.emit('newCodeLiveFromServer', randomNumber);
            }
        }
        
    });

    return;
}