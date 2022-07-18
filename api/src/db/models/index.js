const {User, userSchema} = require('./user.models');
const {Address, addressSchema} = require('./address.models');
const {Product, productSchema} = require('./product.models');
const {Categories, categoriesSchema} = require('./categories.models');
const {Order, orderSchema} = require('./order.moldes');
const { OrderProduct, OrderProductSchema } = require('./order-product.models');


function setupModels (sequelize) {

    User.init(userSchema, User.config(sequelize));
    Address.init(addressSchema, Address.config(sequelize));
    Product.init(productSchema, Product.config(sequelize));
    Categories.init(categoriesSchema, Categories.config(sequelize))
    Order.init(orderSchema, Order.config(sequelize));
    OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize))

    User.associated(sequelize.models);
    Address.associated(sequelize.models);
    Categories.associated(sequelize.models);
    Product.associated(sequelize.models);
    Order.associated(sequelize.models);
    OrderProduct.associated(sequelize.models);

}


module.exports = setupModels;