const blockImagesModel = require('../models/block.images.model')
const fs = require('fs')
const Path = require('path')

class BlockImagesService {

    async getImage(id) {
        return await blockImagesModel.getImage(parseInt(id))
    }

    async addImage(path) {
        return await blockImagesModel.addImage(path)
    }

    async deleteImage(id) {

        const path = await blockImagesModel.getImage(parseInt(id))
        await this.deleteImagesFS([path.path])
        return await blockImagesModel.deleteImage(parseInt(id))
    }

    async updateImage(id, path) {
        return await blockImagesModel.updateImage(parseInt(id), path)
    }

    async updateImages(data, blockId) {
        return await blockImagesModel.updateImages(data)
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

module.exports = new BlockImagesService()