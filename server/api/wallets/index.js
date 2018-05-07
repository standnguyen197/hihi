var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

// LIST MODEL
var walletsModel = require('../../models/Wallets');
var transfersModel = require('../../models/Transfers');

router.post('/getBalance', verifyToken , (req,res,next) =>{
    var idPartner = req.body.idPartner;
        jwt.verify(req.token, 'thekingstand', (err,authData) => {
            if(err){
                res.sendStatus(403);
            }else{
               walletsModel.find({idPartner: idPartner} , 'balance', (err,result) =>{
                    if(err || !result.length){
                        res.status(404);
                    }else{
                        var results = result[0];
                        res.status(200).json(results);
                    }
                    
            });
            }
        });
    
    });

router.post('/sendTransfers', verifyToken , (req,res,next) =>{
        var idPartner = req.body.idPartner;
        var balance = req.body.balance;
        var currentBalance = req.body.currentBalance;
        var newBalance = parseInt(balance) + parseInt(currentBalance);
            jwt.verify(req.token, 'thekingstand', (err,authData) => {
                if(err){
                    res.sendStatus(403);
                }else{
                    walletsModel.findOneAndUpdate({idPartner: idPartner} , {$set: {balance: newBalance,timeUpdated: Date.now()}} , {upsert: true,new: true}, (err,result) =>{
                        if(err){
                            res.status(404);
                        }else{
                            var priceTransfer = balance;
                            var typeTransfer = '0'; // Nạp tài khoản
                            var newTransfersModel = new transfersModel({
                                idPartner,
                                priceTransfer,
                                typeTransfer
                            });
                            newTransfersModel.save((err, results) => {
                                res.status(200).json(result);
                            });
                            
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