const productModel = require('../models/product.model')
const categoryModel = require('../models/categories.model')

class ProductService {

    async getProduct(id) {
        return await productModel.getProductById(parseInt(id))
    }

    async getAllProducts() {
        return await productModel.getAllProducts()
    }

    async addProduct(title, description, image, categoryId) {
        return await productModel.addProduct(title, description, image, parseInt(categoryId))
    }

    async addProducts(data) {
        return await productModel.addProducts(data)
    }

    async deleteProduct(id) {
        return await productModel.deleteProduct(parseInt(id))
    }

    async deleteProducts(data) {
        var ids = []
        data.forEach(id => {
            ids.push(parseInt(id.id))
        })
        return await productModel.deleteProducts(ids)
    }

    async updateProduct(id, title, description, image, categoryId) {
        return await productModel.updateProduct(parseInt(id), title, description, image, categoryId)
    }
}

module.exports = new ProductService()