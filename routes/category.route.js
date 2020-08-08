const express = require('express');
const router = express.Router();

const CATEGORY = require('../model/category.model');

router.post('/add',async(req,res,next)=>{
    try {
            let { ...body } = req.body;
        let result = await CATEGORY.findOne({where : { name : body.name}});
        
        if(result){
            res.status(200).json({ 'message':' Category All ready Inserted'})
        }
        else{
            result = await CATEGORY.create(body);
            res.status(200).json({ 'message' : 'category Inserted SuucessFully'})
        }
    } catch (error) {
        console.log(error)
    }
});

router.get('/read',async(req,res,next)=>{
    try {
        let brandName = await CATEGORY.findAll();
        res.status(200).json(brandName);
    } catch (error) {
        console.log(error)
    } 
})

router.put('/update/:id',async(req,res,next)=>{
    try {
        let {...param} = req.param;
        let {...body} = req.body;

       
        let result = await CATEGORY.findOne({where : { id : param.id}});
        
        if(result){
            let brandName = await CATEGORY.update(body,{where:{id : param.id}});
            res.status(200).json(brandName);
        }
        else{            
            res.status(200).json({ 'message' : 'Category is not present'})
        }
    } catch (error) {
        console.log(error)
    }
})

router.delete('/delete',async(req,res,next)=>{
    try {
        let {...param} = req.param;

        let result = await CATEGORY.findOne({where : { id : param.id}});
        
        if(result){
            let brans = await CATEGORY.destroy({where : { id : param.id}});
            res.json({ 'message':'category Deleted Sucessfully'});
        }
        else{            
            res.status(200).json({ 'message' : 'Category is not present'})
        }
        

    } catch (error) {
        console.log(error);
    }
})
module.exports=router;