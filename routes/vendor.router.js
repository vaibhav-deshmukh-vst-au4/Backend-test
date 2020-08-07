var express = require('express');
var router = express.Router();
const VENDOR = require('../model/vendor.model');
/* GET users listing. */

router.post('/add',async(req,res,next)=>{
    try {
        let { ...body} = req.body;
        let vendor = await VENDOR.findOne({where : { email : body.email}});
        if(vendor){
            res.status(200).json({'message':'Vendor '+body.name+' is All ready Registered'})
        }
        else{
            let result = await VENDOR.create(body);
            res.status(200).json({'message':"vendor registed Succesfully"});
        }
    } catch (error) {
        console.log(error);
    }
})
router.get('/read',async(req,res,next)=>{
    try {
            let vendors = await VENDOR.findAll();
            res.status(200).json(vendors);
    } catch (error) {
        console.log(error);
    }
})

router.put('/update/:id',async(req,res,next)=>{
    try {
            let {...body} = req.body;
            let {...param} = req.param;
            let vendor = await VENDOR.findOne({where :{ id : param.id}})
            if(vendor){
                vendor = await VENDOR.update(body,{where : { id:param.id}});
                res.status(200).json({'message':'Vendor updated succesfully'});
            }
            else{
                res.status(200).json({'message':'Vendor is Not Available'});
            }
    } catch (error) {
        console.log(error);
    }
})

router.delete('/delete/:id',async(req,res,next)=>{
    try {
            let {...param} = req.param;
            let vendor = await VENDOR.findOne({where :{ id : param.id}});
            if(vendor){
                let result = await VENDOR.distroy({where :{ id : param.id}});
                res.status(200).json({'message':"Vendor Deleted succesfully"});
            }
    } catch (error) {
        console.log(error);
    }
})
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
