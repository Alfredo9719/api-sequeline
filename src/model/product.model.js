const { Sequelize, DataTypes, Model } = require('sequelize');

//Local
const sequelize = new Sequelize('product_test', 'root', '',
    {
    host: "localhost",
    dialect: 'mysql',
    port: '3306'  //En la documentacion no lo marca pero es importante colocarlo
});

//Servidor 
// const sequelize = new Sequelize('product_test', 'sigha', '.T3mp0r4l+2021',
//     {
//     host: "172.16.41.2",
//     dialect: 'mariadb',
//     port: '3603'  //En la documentacion no lo marca pero es importante colocarlo
// });

class Product extends Model {}

Product.init({
    product_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false
    },
    is_stock: {
        type: DataTypes.BOOLEAN
    }
},{
    sequelize,
    modelName: 'Product'
});

module.exports = Product;

// codigo para provar la conexion en mysql

// async function testConnection(){
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// testConnection();