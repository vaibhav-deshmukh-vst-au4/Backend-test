const Sequelize = require('sequelize');
const dbConnection = require('../Database/dbConnection');
const brand = require('../model/brand.model');
const vendor = dbConnection.define('vendor',{
    name :{
        type : Sequelize.STRING,
        allowNull : false
    },
    email : { 
        type : Sequelize.STRING,
        allowNull : false
    },
    password :{
        type : Sequelize.STRING,
        allowNull : false
    },
    image : {
        type : Sequelize.STRING,
        allowNull : true
    },
    Bio:{
        type : Sequelize.STRING,
        allowNull : true
    }

},{ timestamps : false});

vendor.sync()
    .then((res)=>{ console.log('Table vendor Created')})
    .catch((err)=>{ console.log('Table vendor NOt Created')})

module.exports = vendor;    