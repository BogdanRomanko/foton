const categoriesService = require('../services/categories.service')

class CategoriesController {

    async getCategoryById(req, res, next) {
        try {
            const data = await categoriesService.getCategory(req.query.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async getCategories(req, res, next) {
        try {
            const data = await categoriesService.getAllCategories()
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async addCategory(req, res, next) {
        try {
            const data = await categoriesService.addCategory(req.body.title)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async addCategories(req, res, next) {
        try {
            const data = await categoriesService.addCategories(req.body.data)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteCategory(req, res, next) {
        try {
            const data = await categoriesService.deleteCategory(req.query.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteCategories(req, res, next) {
        try {
            const data = await categoriesService.deleteCategories(req.body.data)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async updateCategory(req, res, next) {
        try {
            const data = await categoriesService.updateCategory(req.body.id, req.body.title)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new CategoriesController()