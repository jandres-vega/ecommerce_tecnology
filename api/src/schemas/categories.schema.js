const joi = require('joi');

const id = joi.number().integer()

const createSchemaCategory = joi.object({
    name_category: joi.string().required(),
    image_categories: joi.string().uri().required()
})
const updateSchemaCategory = joi.object({
    name_category: joi.string(),
    image_categories: joi.string().uri()
})
const getSchemaCategoryById = joi.object({
    id: id.required()
})



module.exports = {
    createSchemaCategory,
    getSchemaCategoryById,
    updateSchemaCategory
};