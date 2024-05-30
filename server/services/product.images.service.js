const productImagesModel = require('../models/product.images.model')
const fs = require('fs')
const Path = require('path')

class ProductImagesService {

    async getProductImages(productId) {
        return await productImagesModel.getProductImages(parseInt(productId))
    }

    async addImage(path, productId) {
        return await productImagesModel.addImage(path, parseInt(productId))
    }

    async deleteImage(id) {
        return await productImagesModel.deleteImage(parseInt(id))
    }

    async deleteImages(productId) {
        const images = await this.getProductImages(parseInt(productId))
        const paths = []

        images.forEach(image => {
            paths.push(image.path)
        })

        this.deleteImagesFS(paths)

        return await productImagesModel.deleteImages(parseInt(productId))
    }

    async deleteManyProductsImages(data) {
        data.forEach(item => {
            this.deleteImages(parseInt(item.id))
        })
    }

    async updateImage(id, path, productId) {
        return await productImagesModel.updateImage(parseInt(id), path, parseInt(productId))
    }

    async updateImages(data, productId) {
        data.forEach(item => {
            item.productId = productId
        })

        return await productImagesModel.updateImages(data)
    }

    async deleteImagesFS(imagePaths) {
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

module.exports = new ProductImagesService()