const {DataTypes, Model} = require('sequelize');

const ORDER_TABLE = 'Order';

const orderSchema = {

    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    }
}

class Order extends Model  {

    static associated (models) {

    }
    static config (sequelize) {
        return {
            sequelize,
            nameTable: ORDER_TABLE,
            nameModel: 'Order',
            timestamps: false
        }
    }
}

module.exports = {
    Order,
    orderSchema,
    ORDER_TABLE
}