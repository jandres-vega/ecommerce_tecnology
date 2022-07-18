const {Model, DataTypes} = require('sequelize');

const USER_TABLE = 'users';

const userSchema = {

    fullName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    dni:{
        type: DataTypes.INTEGER,
        AllowNull: false,
        unique: true,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

}

class User extends Model {

    static associated (models){
        this.hasOne(models.Address, {onDelete: 'CASCADE'})
        this.hasMany(models.Order, {onDelete: 'CASCADE'})
    }
    static config(sequelize) {
        return {
            sequelize,
            nameTable: USER_TABLE,
            nameModel: 'User',
            timestamps: false
        }
    }
}

module.exports = {
    USER_TABLE,
    userSchema,
    User
}

