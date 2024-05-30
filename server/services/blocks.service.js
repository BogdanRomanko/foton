const blockModdel = require('../models/blocks.model')

class BlocksService {

    async getProductsBlocks(productId) {
        return await blockModdel.getProductsBlocks(parseInt(productId))
    }

    async addBlock(type, content, product_id) {
        return await blockModdel.addBlock(type, content, parseInt(productId))
    }

    async addBlocks(data, productId) {
        return await blockModdel.addBlocks(data, productId)
    }

    async deleteBlocks(productId) {
        return await blockModdel.deleteBlocks(parseInt(productId))
    }

    async deleteManyProductBlocks(data) {
        data.forEach(item => {
            this.deleteBlocks(parseInt(item.id))
        })
    }

    async updateBlock(id, type, content, productId) {
        return await blockModdel.updateBlock(parseInt(id), type, content, parseInt(productId))
    }

    async updateBlocks(data) {
        return await blockModdel.updateBlocks(data)
    }
}

module.exports = new BlocksService()