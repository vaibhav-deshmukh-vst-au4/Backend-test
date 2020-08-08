const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
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

vendor.encryptPassword=(password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null)
}   

vendor.validatePassword=(password,user)=>{
return bcrypt.compareSync(password,user.password);
}

module.exports = vendor;    