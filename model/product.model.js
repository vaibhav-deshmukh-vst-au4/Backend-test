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

product.sync()
    .then((res)=>{ console.log('Table product Created')})
    .catch((err)=>{ console.log('Table product NOt Created')})

// makeing 1 -to -many relationship between vendor and product
vendor.hasMany(product,{foreignKey:'product_vendorID', targetKey : 'id'});
product.belognsTo(vendor,{ foreignKey : 'vendor_productID', targetKey : 'id'})

// Make 1-to-many relationship with brand and product
brand.hasMany(product,{ foreignKey : 'product_brandId', targetKey: 'id'});
product.belognsTo(brand,{foreignKey : 'brand_productId',targetKey :'id'});

//MAke 1-to-many relationship with category and Product
category.hasMany(product,{foreignKey:'product_categoryId', targetKey:'id'});
product.belongsTo(category,{foreignKey:'category_productId',targetKey:'id'});

module.exports = product;    