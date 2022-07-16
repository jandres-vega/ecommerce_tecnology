const {models} = require('../libs/conexion');
const boom = require('@hapi/boom')
class CategoriesService {

    async createCategory(body) {

        const {name_category} = body;
        const allCategories = await this.getAllCategory();
        const category = allCategories.find(data => data.name_category === name_category)
        if (category){
            return 'ya ahi una categoria con ese nombre'
        }else {
            return models.Categories.create(body)
        }
    }

    async getAllCategory () {
        return await models.Categories.findAll()
    }

    async getAllCategoryById (id) {
        const category = await models.Categories.findByPk(id, {
            include: {
                model: models.Product
            }
        })
        if (!category) {
            throw boom.notFound("Category Not Found");
        }
        return category
    }

    async findCategory (id) {
        const category = await models.Categories.findByPk(id);
        if (!category){
            throw boom.notFound("Category Not Found")
        }
        return category
    }

    async deleteCategory (id) {

        const deleteCategory = await this.findCategory(id)
        if (!deleteCategory){
            throw boom.notFound("Category Not Found")
        }
        await deleteCategory.destroy();
        return {id}
    }

    async updateCategory (id, body) {

        const category = await this.findCategory(id);
        if (!category){
            throw boom.notFound("Category Not Found");
        }
        return await category.update(body);
    }
}

module.exports = CategoriesService;