const Sequelize = require('sequelize');
const dbConnection = require('../Database/dbConnection');

const user = dbConnection.define('user',{
    fullName :{
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

user.sync()
    .then((res)=>{ console.log('Table User Created')})
    .catch((err)=>{ console.log('Table User NOt Created')})

module.exports = user;    