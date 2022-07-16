const {Model, DataTypes} = require('sequelize');

const PRODUCT_TABLE = 'products';

const productSchema = {

    name_product:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    freeShopping: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    image: {
        type: DataTypes.TEXT
    }
}

class Product extends Model{

    static associated (models) {
        this.belongsTo(models.Categories);
    }
    static config (sequelize) {
        return {
            sequelize,
            nameTable: PRODUCT_TABLE,
            nameModel: 'Product',
            timestamps: false
        }
    }

}

module.exports = {
    PRODUCT_TABLE,
    productSchema,
    Product
}