var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

// LIST MODEL
var usersModel = require('../../models/Users');
var walletsModel = require('../../models/Wallets');

async function getBalanceWallet(idPartner){
    return await walletsModel.find({idPartner: idPartner}).select('idWallet balance').exec();
}
router.post('/' , (req , res , next) => {
    var userDataSign = req.body;
    var idPartnerFB = req.body.idPartnerFB;
    var namePartner = req.body.namePartner;
    var avatarPartner = req.body.avatarPartner;
    var roleIdPartner = req.body.roleIdPartner;
    var currentSubscriptions = '';
    var newUserData = new usersModel({
        idPartnerFB,
        namePartner,
        avatarPartner,
        roleIdPartner,
        currentSubscriptions
    });
   
    jwt.sign({userDataSign}, 'thekingstand' , (err,token) => {

        usersModel.find({idPartnerFB: idPartnerFB}, async (err, infoData) => {
            if(err || !infoData.length){
                newUserData.save((err, userData) => {
                    console.log(userData);
                    var newIdPartner = userData._id;
                    var newWallets = new walletsModel({
                        idPartner: newIdPartner
                    });
                    newWallets.save((err,resultWallet) =>{
                        let balanceUsers = resultWallet;
                        res.status(200).json({userData, balanceUsers, token});
                    });
                    // let balance = await getBalanceWallet(idPartner);
                    // let balanceUsers = balance[0];
                });
                console.log('Created new Wallets');

            }else{

                var _id = infoData[0]._id;
                var userData = infoData[0];
                let balance = await getBalanceWallet(_id);
                let balanceUsers = balance[0];
                res.status(200).json({userData, balanceUsers, token});
            }
        });
    });
});

router.post('/getService', verifyToken , (req,res,next) =>{

var idUser = req.body.idUser;

    jwt.verify(req.token, 'thekingstand',(err,authData) => {
        if(err){
            res.sendStatus(403);
        }else{
            usersModel.find({_id: idUser}, (err, infoData) => {
                if(err || infoData.length == 0){
                    res.status(404).json(serviceStatus);
                }else{

                    var serviceStatus = infoData[0].serviceStatus;
                    res.status(200).json(serviceStatus);

                }
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