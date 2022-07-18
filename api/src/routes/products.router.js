const {Router} = require('express');
const router = Router();
const validatorHandlers = require('../middlewares/validatos.handler');
const createProductSchema = require('../schemas/product.schema');
const ProductService = require('../services/products.service');

const product = new ProductService();

router.post('/',
    validatorHandlers(createProductSchema, 'body'),
    async (req, res, next) => {
    try {
        const body = req.body;
        const productCreated = await product.createProduct(body);
        res.send(productCreated);
    }catch (e) {
        next(e);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const products = await product.getAllProduct();
        res.send(products)
    }catch (e) {
        next(e);
    }
});

router.get('/:id',async (req, res, next) => {
    try {
        const{id} = req.params;
        const productById = await product.getProductById(id);
        res.status(200).send(productById)
    }catch (e) {
        next(e);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const productDelete = await product.deleteProduct(id);
        res.status(200).send(productDelete);
    }catch (e) {
        next(e);
    }
});

router.put('/:id', async function (req, res, next) {

    try {
        const {id} = req.params;
        const body = req.body;
        const productUpdate = await product.updateProduct(id, body);
        res.status(200).send(productUpdate);
    }catch (e) {
        next(e);
    }
})

module.exports = router;