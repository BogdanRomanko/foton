const productModel = require('../models/product.model')

class ProductService {

    async getProductById(id) {
        return await productModel.getProductById(parseInt(id))
    }

    async getAllProducts() {
        return await productModel.getAllProducts()
    }

    async getProductsByPage(page) {
        return await productModel.getProductsByPage(parseInt(page))
    }

    async getProductsByCategory(categoryId) {
        return await productModel.getProductsByCategory(parseInt(categoryId))
    }

    async getProductsByTitle(title) {
        return await productModel.getProductsByTitle(title)
    }

    async addProduct(title, description, image, categoryId) {
        return await productModel.addProduct(title, description, image, parseInt(categoryId))
    }

    async addProducts(data) {
        return await productModel.addProducts(data)
    }

    async deleteProduct(id) {
        const product = await this.getProductById(parseInt(id))
        await this.deleteImage(product.image)

        return await productModel.deleteProduct(parseInt(id))
    }

    async deleteProducts(data) {
        const ids = []
        const paths = []

        data.forEach(item => {
            ids.push(parseInt(item.id))
        })

        for (let i = 0; i < ids.length; i++) {
            const sert = await this.getProductById(ids[i])
            paths.push(sert.sertificateImage)
        }

        await this.deleteImages(paths)

        return await productModel.deleteProducts(ids)
    }

    async updateProduct(id, title, description, image, categoryId) {
        return await productModel.updateProduct(parseInt(id), title, description, image, categoryId)
    }

    async updateProducts(data) {
        return await productModel.updateProducts(data)
    }

    async deleteImage(imagePath) {
        if (imagePath != null)
            if (fs.existsSync(Path.join("../server", imagePath)))
                fs.rm(Path.join("../server", imagePath), (err) => {
                    if (err)
                        console.log(err)
                })
    }

    async deleteImages(imagePaths) {
        imagePaths.forEach(imagePath => {
            if (imagePath != null) {
                if (fs.existsSync(Path.join("../server", imagePath)))
                    fs.rm(Path.join("../server", imagePath), (err) => {
                        if (err)
                            console.log(err)
                    })
            }
        })
    }
}

module.exports = new ProductService()