const Sequelize = require('sequelize');
const dbConection = require('../Database/dbConnection');
const vendor = require('../model/vendor.model');

const category = dbConection.define('category',{
    name :{
        type : Sequelize.STRING,
        allowNull :  false
    },
    image :{
        type : Sequelize.STRING,
        allowNull :  true
    },
    status :{
        type : Sequelize.STRING,
        allowNull :  false
    },
},{timestamps : false});

vendor.hasMany(category,{foreignKey : 'category_venderId', targetKey : 'id'});

category.sync()
.then((res)=>{ console.log('BRand Table is Created')})
.catch((err)=>{ console.log('BRand Table is NOT Created')})

module.exports = category;