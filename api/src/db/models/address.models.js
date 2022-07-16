const {Model, DataTypes} = require('sequelize');

const LOCATION_TABLE = 'address';

const addressSchema = {

    address: {
        type: DataTypes.STRING,
        allowNull:false
    },
    zipCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT
    },

}

class Address extends Model{

    static associated (models){
        this.belongsTo(models.User)
    }
    static config (sequelize) {
        return {
            sequelize,
            nameTable: LOCATION_TABLE,
            nameModel: 'Address',
            timestamps: false
        }
    }
}
module.exports = {
    LOCATION_TABLE,
    addressSchema,
    Address
}