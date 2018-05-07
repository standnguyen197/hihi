var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var randomstring = require('randomstring');
// LIST MODEL
var livesModel = require('../../models/Lives');

// async function getNumPackages(){
//     return await packagesModel.count({}).exec();
// }

router.post('/getLiveSetting', verifyToken , (req,res,next) => {
    var idPartner = req.body.idPartner;
        jwt.verify(req.token, 'thekingstand', async (err,authData) => {
            if(err){
                console.log(err);
                res.sendStatus(403);
            }else{
               let result = await livesModel.count({idPartner:idPartner}).exec();
               res.status(200).json(result);
            }
        });
    
});
router.post('/getSetting', verifyToken , (req,res,next) => {
    var idPartner = req.body.idPartner;
        jwt.verify(req.token, 'thekingstand', async (err,authData) => {
            if(err){
                console.log(err);
                res.sendStatus(403);
            }else{
               let result = await livesModel.find({idPartner:idPartner}).exec();
               let results = result[0];
               res.status(200).json(results);
            }
        });
    
});

router.post('/saveSetting', verifyToken , (req,res,next) => {
    var idPartner = req.body.idPartner;
    var bodyData = req.body;
        jwt.verify(req.token, 'thekingstand', async (err,authData) => {
            if(err){
                console.log(err);
                res.sendStatus(403);
            }else{
                livesModel.findOneAndUpdate({idPartner:idPartner}, {$set: bodyData} , {upsert: true, new:true}, async (err,result)=>{
                    if(err){
                        console.log(err);
                    }else{
                        let results = await livesModel.count({idPartner:idPartner}).exec();
                        res.status(200).json(results);
                    }
                })
            }
        });
    
});

router.post('/getInfoLive', verifyToken , (req,res,next) => {
    var idPartner = req.body.idPartner;
    var bodyData = req.body;
        jwt.verify(req.token, 'thekingstand', async (err,authData) => {
            if(err){
                console.log(err);
                res.sendStatus(403);
            }else{
                livesModel.find({idPartner:idPartner}, async (err,result)=>{
                    if(err || !result.length){
                        console.log(err);
                    }else{
                        var results = result[0];
                        res.status(200).json(results);
                    }
                })
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