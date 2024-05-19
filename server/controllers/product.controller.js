const productService = require('../services/products.service')
const apiError = require('../exceptions/server.error')
const Joi = require('joi')

class ProductController {

    async getProductById(req, res, next) {
        try {
            const schema = Joi.object({
                id: Joi.number().required()
            })
            const {error} = schema.validate(req.params)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await productService.getProductById(req.params.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async getProducts(req, res, next) {
        try {
            const data = await productService.getAllProducts()
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async getProductsByPage(req, res, next) {
        try {
            const schema = Joi.object({
                page: Joi.number().required()
            })
            const {error} = schema.validate(req.query)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await productService.getProductsByPage(req.query.page)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async getProductsByCategory(req, res, next) {
        try {
            const schema = Joi.object({
                categoryId: Joi.number().required()
            })
            const {error} = schema.validate(req.query)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await productService.getProductsByCategory(req.query.categoryId)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async getProductsByTitle(req, res, next) {
        try {
            const schema = Joi.object({
                title: Joi.string().required()
            })
            const {error} = schema.validate(req.query)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await productService.getProductsByTitle(req.query.title)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async addProduct(req, res, next) {
        try {
            const schema = Joi.object({
                title: Joi.string().required(),
                description: Joi.string().required(),
                image: Joi.any().meta({swaggerType: 'file'}).optional(),
                categoryId: Joi.number().required()
            })
            const {error} = schema.validate(req.body)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            console.log(req.body)

            const data = await productService.addProduct(
                req.body.title,
                req.body.description,
                req.file.path,
                req.body.categoryId
                )
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async addProducts(req, res, next) {
        try {
            const schema = Joi.array().items({
                title: Joi.string().required(),
                description: Joi.string().required(),
                image: Joi.string().required(),
                categoryId: Joi.number().required()
            })
            const {error} = schema.validate(req.body.data)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await productService.addProducts(req.body.data)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteProduct(req, res, next) {
        try {
            const schema = Joi.object({
                id: Joi.number().required()
            })
            const {error} = schema.validate(req.query)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await productService.deleteProduct(req.query.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteProducts(req, res, next) {
        try {
            const schema = Joi.array().items({
                id: Joi.number().required()
            })
            const {error} = schema.validate(req.body.data)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await productService.deleteProducts(req.body.data)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async updateProduct(req, res, next) {
        try {
            const schema = Joi.object({
                id: Joi.number().required(),
                title: Joi.string().required(),
                description: Joi.string().required(),
                image: Joi.any().meta({swaggerType: 'file'}).optional(),
                categoryId: Joi.number().required()
            })
            const {error} = schema.validate(req.body)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await productService.updateProduct(
                req.body.id,
                req.body.title,
                req.body.description,
                req.file.path,
                req.body.categoryId
                )
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async updateProducts(req, res, next) {
        try {
            const schema = Joi.array().items({
                id: Joi.number().required(),
                title: Joi.string().required(),
                description: Joi.string().required(),
                image: Joi.string().required(),
                categoryId: Joi.number().required()
            })
            const {error} = schema.validate(req.body.data)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await productService.updateProducts(req.body.data)
            res.json(data)
        } catch (e) {
            console.error(e)
        }
    }
}

module.exports = new ProductController()