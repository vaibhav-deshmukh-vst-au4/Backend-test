const Sequelize = require('sequelize');
const dbConection = require('../Database/dbConnection');

const category = dbConection.define('category',{
    name :{
        type : Sequelize.STRING,
        allowNull :  false
    },
    image :{
        type : Sequelize.STRING,
        allowNull :  false
    },
    status :{
        type : Sequelize.STRING,
        allowNull :  false
    },
},{timestamp : false});

category.sync()
.then((res)=>{ console.log('BRand Table is Created')})
.catch((err)=>{ console.log('BRand Table is NOT Created')})

module.exports = category;