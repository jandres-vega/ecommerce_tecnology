const joi = require('joi');

const createProductSchema = joi.object({
    name_product: joi.string().min(5).max(30).required(),
    price: joi.number().required(),
    stock: joi.number().min(1).integer().required(),
    brand: joi.string().required(),
    description: joi.string().required(),
    image: joi.string(),
    CategoryId: joi.number().integer().required()
});

module.exports = createProductSchema;

