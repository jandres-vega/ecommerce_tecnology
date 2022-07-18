const {Model, DataTypes} = require('sequelize');

const ORDER_PRODUCT_TABLE = 'Order_Product';

const OrderProductSchema = {

    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}

class OrderProduct extends Model {

    static associated (models) {

    }
    static config (sequelize) {
        return {
            sequelize,
            nameTable: ORDER_PRODUCT_TABLE,
            nameModel: 'OrderProduct',
        }
    }
}

module.exports = {
    OrderProductSchema,
    OrderProduct,
    ORDER_PRODUCT_TABLE
}