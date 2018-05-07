var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var randomstring = require('randomstring');
var moment = require('moment-timezone');
// LIST MODEL
var packagesModel = require('../../models/Packages');
var usersModel = require('../../models/Users');
var subscriptionsModel = require('../../models/Subscriptions');
var walletsModel = require('../../models/Wallets');
var transfersModel = require('../../models/Transfers');

async function getNumPackages(){
    return await packagesModel.count({}).exec();
}
async function getInfoPackages(idPackages) {
    return await packagesModel.find({_id: idPackages }).exec();
}

async function updateServicesUser(idPartner,typePackage,serviceStatus){
    return await usersModel.findOneAndUpdate({_id: idPartner} , {$set: {serviceStatus: serviceStatus , currentSubscriptions: typePackage , roleIdPartner: 1} } ,  {upsert: true,new: true});
}

async function updateWalletPayment(idPartner,currentPricePackage) {
    var wallets = await walletsModel.find({idPartner: idPartner}).exec();
    var balanceWallet = parseInt(wallets[0].balance) - parseInt(currentPricePackage);
    return await walletsModel.findOneAndUpdate({idPartner: idPartner} , {$set: {balance:balanceWallet , timeUpdated: Date.now() } } , {upsert: true,new: true});
}

router.post('/registerServices', verifyToken ,async (req,res,next) => {

    var idPackage = req.body.idPackages;
    var idPartner = req.body.idPartner;
    var currentPricePackage = req.body.currentPricePackage;
    var infoPackages = await getInfoPackages(idPackage);
    var timePackage = infoPackages[0].timePackage;
    var typePackage = infoPackages[0].typePackage;

    var timeStart = moment().tz('Asia/Ho_Chi_Minh').format('x');
    var timeCalendar = moment().tz('Asia/Ho_Chi_Minh').add(timePackage, 'days').calendar(null, {
        lastWeek: 'YYYY-MM-DD HH:mm:ss',
        sameElse: 'YYYY-MM-DD HH:mm:ss'
    });
    var timeEnd = moment(timeCalendar).format('x');
        var dataSubscriptions = {
            idPackage,
            idPartner,
            typePackage,
            timeStart,
            timeEnd
        }

    subscriptionsModel.findOneAndUpdate({idPartner: idPartner} , {$set: dataSubscriptions } ,  {upsert: true,new: true}, async (err,result) =>{
        if(err){
            console.log(err);
            res.status(404);
        }else{
            var serviceStatus = 1;
            var infoServicesUser = await updateServicesUser(idPartner,typePackage,serviceStatus);
            let newBalance = await updateWalletPayment(idPartner, currentPricePackage);
            var priceTransfer = currentPricePackage;
                            var typeTransfer = '1'; // Trừ tài khoản
                            var newTransfersModel = new transfersModel({
                                idPartner,
                                priceTransfer,
                                typeTransfer
                            });
            newTransfersModel.save((err, results) => {
                res.status(200).json({infoServicesUser, newBalance});
            });
           
        }
    });

        
});


function verifyToken(req, res, next){
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        //Split at the space
        const bearer = bearerHeader.split(' ');
        // Get totken from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    }else{
        // Forbidden
        res.sendStatus(403);
    }
}

module.exports = router;