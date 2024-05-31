const blockImagesModel = require('../models/block.images.model')
const fs = require('fs')
const Path = require('path')

class BlockImagesService {

    async getBlockImages(blockId) {
        return await blockImagesModel.getBlockImages(parseInt(blockId))
    }

    async addImage(path, blockId) {
        return await blockImagesModel.addImage(path, parseInt(blockId))
    }

    async deleteImage(id) {
        return await blockImagesModel.deleteImage(parseInt(id))
    }

    async deleteImages(blockId) {
        const images = await this.getBlockImages(parseInt(blockId))
        const paths = []

        images.forEach(image => {
            paths.push(image.path)
        })

        this.deleteImagesFS(paths)

        return await blockImagesModel.deleteBlockImages(parseInt(blockId))
    }

    async deleteManyBlockImages(data) {
        data.forEach(item => {
            this.deleteImages(parseInt(item.id))
        })
    }

    async updateImage(id, path, blockId) {
        return await blockImagesModel.updateImage(parseInt(id), path, parseInt(blockId))
    }

    async updateImages(data, blockId) {
        data.forEach(item => {
            item.blockId = blockId
        })

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