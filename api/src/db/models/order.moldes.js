const {DataTypes, Model} = require('sequelize');

const ORDER_TABLE = 'Order';

const orderSchema = {

    status_payment: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}

class Order extends Model  {

    static associated (models) {
        this.belongsTo(models.User, {onDelete: 'CASCADE'});
        this.belongsToMany(models.Product, {through: models.OrderProduct})

    }
    static config (sequelize) {
        return {
            sequelize,
            nameTable: ORDER_TABLE,
            nameModel: 'Order',
            timestamps: true
        }
    }
}

module.exports = {
    Order,
    orderSchema,
    ORDER_TABLE
}