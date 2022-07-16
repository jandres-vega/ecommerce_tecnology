const routerUsers = require('./users.routes');
const routerAddress = require('./address.router')
const routerProducts = require('./products.router')
const routerCategories = require('./categories.router')
function routes(app) {

    app.use('/users', routerUsers);
    app.use('/address', routerAddress);
    app.use('/products', routerProducts)
    app.use('/categories', routerCategories)
}

module.exports = routes;



