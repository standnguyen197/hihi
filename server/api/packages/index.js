var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var randomstring = require('randomstring');
// LIST MODEL
var packagesModel = require('../../models/Packages');

async function getNumPackages(){
    return await packagesModel.count({}).exec();
}

router.post('/getInfoPackages',  (req,res,next) => {

    packagesModel.find({}, async (err, result) => {
        if(err || !result.length){
            var numPackages = await getNumPackages();
            res.status(200).json(numPackages);
        }else{
            var numPackages = await getNumPackages();
            res.status(200).json({numPackages,result});
        }
    });
        
});

router.post('/getPathPackages', (req,res,next) => {
    var idPackage = req.body.idPackages;
        packagesModel.find({_id:idPackage }, async (err, result) => {
                if(err || !result.length){
                    var status = {
                        status: 404
                    }
                    res.status(200).json(status);
                }else{
                    var status = {
                        status: 200
                    }
                    var resultPackages = result[0];
                    res.status(200).json({resultPackages, status});
            }
    });

});

router.post('/getPackages', verifyToken , (req,res,next) => {
        jwt.verify(req.token, 'thekingstand',(err,authData) => {
            if(err){
                console.log(err);
                res.sendStatus(403);
            }else{
                packagesModel.find({}, async (err, result) => {
                    if(err || !result.length){
                        var numPackages = await getNumPackages();
                        res.status(200).json(numPackages);
                    }else{
                        var numPackages = await getNumPackages();
                        res.status(200).json({numPackages,result});
                    }
                });
            }
        });
    
});

router.post('/createPackages', verifyToken , (req,res,next) =>{
var data = req.body;
var idPackage = randomstring.generate({
    length: 5,
    charset: 'numeric'
  });
  const dataPackages = Object.assign({_id:idPackage}, data);
    var packageData = new packagesModel(dataPackages);
    jwt.verify(req.token, 'thekingstand',(err,authData) => {
        if(err){
            res.sendStatus(403);
        }else{

            packageData.save((err, result)=>{
                if(err){
                    console.log(err);
                }else{
                    res.status(200).json(result);
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