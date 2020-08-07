const Sequelize = require('sequelize');
const dbConection = require('../Database/dbConnection');
const vendor = require('../model/vendor.model');

const brand = dbConection.define('brand',{
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
        allowNull :  false},
},{timestamps: false});

// make 1-to-many relationship between vendor and brand;
vendor.hasMany(brand,{foreignKey : 'brand_venderId', targetKey:'id'});
brand.belongsTo(vendor,{ foreignKey: 'vendor_brandId', targetKey : 'id'});



brand.sync()
.then((res)=>{ console.log('BRand Table is Created')})
.catch((err)=>{ console.log('BRand Table is NOT Created')})

//User.hasMany(order,{ foreignKey : "order_userId", targetKey:'id'});


module.exports = brand;





