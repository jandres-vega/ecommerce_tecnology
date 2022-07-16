const {Model, DataTypes} = require('sequelize');

const CATEGORIES_TABLE = 'categories';

const categoriesSchema = {

    name_category: {
        type: DataTypes.STRING,
        AllowNull: false,
    },
    image_categories: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}

class Categories extends Model{

    static associated (models) {
        this.hasMany(models.Product)
    }
    static config (sequelize){
        return {
            sequelize,
            nameTable: CATEGORIES_TABLE,
            nameModel: 'Categories',
            timestamps: false
        }

    }
}

module.exports = {
    CATEGORIES_TABLE,
    categoriesSchema,
    Categories,
}