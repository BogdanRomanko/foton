const blockModel = require('../models/blocks.model')
const imagesService = require('../services/block.images.service')

class BlocksService {

    async getProductsBlocks(productId) {
        return await blockModel.getProductsBlocks(parseInt(productId))
    }

    async addBlock(type, content, productId) {
        return await blockModel.addBlock(type, content, parseInt(productId))
    }

    async addBlocks(data, productId) {
        return await blockModel.addBlocks(data, productId)
    }

    async deleteBlocks(productId) {
        const blocks = await blockModel.getProductsBlocks(parseInt(productId))
        blocks.forEach(block => {
            if (block.type === 'media')
                imagesService.deleteImages(parseInt(block.id))
        })

        return await blockModel.deleteBlocks(parseInt(productId))
    }

    async deleteBlock(blockId) {
        const block = await blockModel.getBlock(parseInt(blockId))
        var res

        if (block.type === 'media') {
            await imagesService.deleteImage(parseInt(block.content))
            res = await blockModel.deleteBlock(parseInt(blockId))
        }
        else
            res = await blockModel.deleteBlock(parseInt(blockId))

        return res
    }

    async deleteManyProductBlocks(data) {
        data.forEach(item => {
            this.deleteBlocks(parseInt(item.productId))
        })
    }

    async updateBlock(id, type, content, productId) {
        return await blockModel.updateBlock(parseInt(id), type, content, parseInt(productId))
    }

    async updateBlocks(data, productId) {
        return await blockModel.updateBlocks(data, productId)
    }
}

module.exports = new BlocksService()