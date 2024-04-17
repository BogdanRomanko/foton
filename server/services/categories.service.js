const categoryModel = require('../models/categories.model')

class CategoriesService {

    async getCategory(id) {
        return await categoryModel.getCategoryById(parseInt(id))
    }

    async getAllCategories() {
        return await categoryModel.getAllCategories()
    }

    async addCategory(title) {
        return await categoryModel.addCategory(title)
    }

    async addCategories(data) {
        return await categoryModel.addCategories(data)
    }

    async deleteCategory(id) {
        return await categoryModel.deleteCategory(parseInt(id))
    }

    async deleteCategories(data) {
        var ids = []
        data.forEach(id => {
            ids.push(parseInt(id.id))
        })
        return await categoryModel.deleteCategories(ids)
    }

    async updateCategory(id, title) {
        return await categoryModel.updateCategory(parseInt(id), title)
    }

    async updateCategories(data) {
        return await categoryModel.updateCategories(data)
    }
}

module.exports = new CategoriesService()