const {models} = require('../libs/conexion');
const boom = require('@hapi/boom')

class ProductService {

    async createProduct (body) {
        const {
            name_product,
            image
        } = body;

        const allProducts = await this.getAllProduct();
        const productName = allProducts.find(product => product.name_product === name_product);
        const productImage = allProducts.find(product => product.image === image);

        if (productName){
            return "ya ahi un producto con ese nombre"
        }else if (productImage){return "ya ahi una imagen con ese producto"}
        else {
            return models.Product.create(body)
        }
    }

    async getAllProduct () {

        return await models.Product.findAll({
            include: {
                model: models.Categories
            }
        });
    }

    async getProductById (id) {
        const productId = await models.Product.findByPk(id, {
            include: {
                model: models.Categories
            }
        })
        if (!productId) {
            throw boom.notFound("Product Not Found")
        }
        return productId;
    }

    async deleteProduct (id) {

        const productDelete = await this.getProductById(id);
        await productDelete.destroy();
        return {id}
    }

    async updateProduct (id, changes) {
        const productId = await this.getProductById(id);
        return await productId.update(changes);
    }


}

module.exports = ProductService;