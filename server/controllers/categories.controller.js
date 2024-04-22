const categoriesService = require('../services/categories.service')
const apiError = require('../exceptions/server.error')
const Joi = require('joi')

class CategoriesController {

    async getCategoryById(req, res, next) {
        try {
            const schema = Joi.object({
                id: Joi.number().required()
            })
            const {error} = schema.validate(req.query)

            if (error)
                throw apiError.HttpException(error.details[0].message)

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
            const schema = Joi.object({
                title: Joi.string().required()
            })
            const {error} = schema.validate(req.body)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await categoriesService.addCategory(req.body.title)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async addCategories(req, res, next) {
        try {
            const schema = Joi.array().items({
                title: Joi.string().required()
            })
            const {error} = schema.validate(req.body.data)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await categoriesService.addCategories(req.body.data)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteCategory(req, res, next) {
        try {
            const schema = Joi.object({
                id: Joi.number().required()
            })
            const {error} = schema.validate(req.query)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await categoriesService.deleteCategory(req.query.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteCategories(req, res, next) {
        try {
            const schema = Joi.array().items({
                id: Joi.number().required()
            })
            const {error} = schema.validate(req.body.data)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await categoriesService.deleteCategories(req.body.data)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async updateCategory(req, res, next) {
        try {
            const schema = Joi.object({
                id: Joi.number().required(),
                title: Joi.string().required()
            })
            const {error} = schema.validate(req.body)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await categoriesService.updateCategory(req.body.id, req.body.title)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async updateCategories(req, res, next) {
        try {
            const schema = Joi.array().items({
                id: Joi.number().required(),
                title: Joi.string().required()
            })

            const {error} = schema.validate(req.body.data)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await categoriesService.updateCategories(req.body.data)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new CategoriesController()