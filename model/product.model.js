const Sequelize = require('sequelize');
const dbConnection = require('../Database/dbConnection');

const vendor = require('../model/vendor.model');
const brand = require('../model/brand.model');
const category = require('../model/category.model');

const product = dbConnection.define('product',{
    name :{
        type : Sequelize.STRING,
        allowNull : false
    },
    price : { 
        type : Sequelize.INTEGER,
        allowNull : false
    },
    quantity :{
        type : Sequelize.INTEGER,
        allowNull : false
    }
},{ timestamps : false});
// makeing 1 -to -many relationship between vendor and product
vendor.hasMany(product);
product.belognsTo(vendor)

// Make 1-to-many relationship with brand and product
brand.hasMany(product);
product.belognsTo(brand);

//MAke 1-to-many relationship with category and Product
category.hasMany(product);
product.belongsTo(category);

product.sync()
    .then((res)=>{ console.log('Table product Created')})
    .catch((err)=>{ console.log('Table product NOt Created')})

    module.exports = product;    