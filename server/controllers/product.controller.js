const productService = require('../services/products.service')
const blocksService = require('../services/blocks.service')
const imagesService = require('../services/block.images.service')
const apiError = require('../exceptions/server.error')
const Joi = require('joi')

class ProductController {

    async getProductById(req, res, next) {
        try {
            const schema = Joi.object({
                id: Joi.number().required()
            })
            const {error} = schema.validate(req.query)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await productService.getProductById(req.query.id)
            const blocks = await blocksService.getProductsBlocks(data.id)
            data.blocks = blocks
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
            req.body.blocks = JSON.parse(req.body.blocks)

            const schema = Joi.object({
                title: Joi.string().required(),
                description: Joi.string().required(),
                image: Joi.any().meta({swaggerType: 'file'}).optional(),
                categoryId: Joi.number().required(),
                blocks: Joi.array().items({
                    type: Joi.string().required(),
                    content: Joi.string().required()
                })
            })

            const {error} = schema.validate(req.body)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await productService.addProduct(
                req.body.title,
                req.body.description,
                req.file.path,
                req.body.categoryId
            )

            const blocks = await blocksService.addBlocks(req.body.blocks, data.id)
            data.blocks = blocks

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
            const blocks = await blocksService.deleteBlocks(req.query.id)
            data.blocks = blocks

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
            const blocks = await blocksService.deleteManyProductBlocks(req.body.data)
            data.blocks = blocks

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
                categoryId: Joi.number().required(),
                blocks: Joi.array().items({
                    type: Joi.string().required(),
                    content: Joi.string().required()
                })
            })
            const {error} = schema.validate(req.body)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await productService.updateProduct(
                req.body.id,
                req.body.title,
                req.body.description,
                req.file?.path,
                req.body.categoryId
            )

            const blocks = await blocksService.addBlocks(req.body.blocks, data.id)
            data.blocks = blocks

            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async saveImages(req, res, next) {
        try {
            req.files.forEach(image => {
                imagesService.addImage(image.path, req.body.blockId)
            })

            const data = await imagesService.getBlockImages(req.body.blockId)

            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteImages(req, res, next) {
        try {
            const schema = Joi.object({
                productId: Joi.number().required()
            })
            const {error} = schema.validate(req.query)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await imagesService.deleteImages(req.query.blockId)

            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteImage(req, res, next) {
        try {
            const schema = Joi.object({
                id: Joi.number().required()
            })
            const {error} = schema.validate(req.query)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await imagesService.deleteImage(req.query.id)

            res.json(data)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ProductController()