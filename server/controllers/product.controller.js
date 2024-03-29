const productService = require('../services/products.service')

class ProductController {

    async getProductById(req, res, next) {
        try {
            const data = await productService.getProduct(req.query.id)
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

    async addProduct(req, res, next) {
        try {
            const data = await productService.addProduct(
                req.body.title,
                req.body.description,
                req.body.image,
                req.body.categoryId
                )
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async addProducts(req, res, next) {
        try {
            const data = await productService.addProducts(req.body.data)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteProduct(req, res, next) {
        try {
            const data = await productService.deleteProduct(req.query.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteProducts(req, res, next) {
        try {
            const data = await productService.deleteProducts(req.body.data)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async updateProduct(req, res, next) {
        try {
            const data = await productService.updateProduct(
                req.body.id, 
                req.body.title, 
                req.body.description,
                req.body.image,
                req.body.categoryId
                )
            res.json(data)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ProductController()