var express = require('express');
var router = express.Router();
const product = require('../model/product.model');
/* GET users listing. */

router.post('/add',async(req,res,next)=>{
    try {
        let { ...body} = req.body;
        let product = await product.findOne({where : { name : body.name}});
        if(product){
            res.status(200).json({'message':'product '+body.name+' is All ready Inserted'})
        }
        else{
            let result = await product.create(body);
            res.status(200).json({'message':"product registed Succesfully"});
        }
    } catch (error) {
        console.log(error);
    }
})
router.get('/read',async(req,res,next)=>{
    try {
            let products = await product.findAll();
            res.status(200).json(products);
    } catch (error) {
        console.log(error);
    }
})

router.put('/update/:id',async(req,res,next)=>{
    try {
            let {...body} = req.body;
            let {...param} = req.param;
            let product = await product.findOne({where :{ id : param.id}})
            if(product){
                product = await product.update(body,{where : { id:param.id}});
                res.status(200).json({'message':'product updated succesfully'});
            }
            else{
                res.status(200).json({'message':'product is Not Available'});
            }
    } catch (error) {
        console.log(error);
    }
})

router.delete('/delete/:id',async(req,res,next)=>{
    try {
            let {...param} = req.param;
            let product = await product.findOne({where :{ id : param.id}});
            if(product){
                let result = await product.distroy({where :{ id : param.id}});
                res.status(200).json({'message':"product Deleted succesfully"});
            }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
