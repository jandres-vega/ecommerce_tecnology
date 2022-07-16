const {Router} = require('express');
const CategoriesService = require('../services/categories.service');
const validatorHandlers = require('../middlewares/validatos.handler');
const  {createSchemaCategory, getSchemaCategoryById, updateSchemaCategory} = require('../schemas/categories.schema')
const router = Router();

const category = new CategoriesService();

router.post('/',
    validatorHandlers(createSchemaCategory, 'body'),
    async (req, res, next) => {

    try {
        const body = req.body;
        const newCategory = await category.createCategory(body);
        res.send(newCategory);
    }catch (e) {
        next(e);
    }
})

router.get('/', async (req, res, next) => {
    try {
        const categories = await category.getAllCategory()
        res.send(categories);
    }catch (e) {
        next(e)
    }
});

router.get('/:id',
    validatorHandlers(getSchemaCategoryById, 'params'),
    async (req, res, next) => {
    try {
        const {id} = req.params
        const catego = await category.getAllCategoryById(id);
        res.send(catego)
    }catch (e) {
        next(e);
    }
});

router.delete('/:id',
    validatorHandlers(getSchemaCategoryById, 'params'),
    async (req, res, next) => {
    try {
        const {id} = req.params;
        const deleteCategory = await category.deleteCategory(id);
        res.status(201).send(`Se elimino la categoria con id ${deleteCategory.id}`)
    }catch (e) {
        next(e);
    }
});

router.put('/:id',
    validatorHandlers(updateSchemaCategory, 'body'),
    async (req, res, next) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const categoryUpdate = await category.updateCategory(id, body);
        res.status(200).send(categoryUpdate);
    }catch (e) {
        next(e);
    }
})

module.exports = router;