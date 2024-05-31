const PrismaClient = require('@prisma/client').PrismaClient
const client = new PrismaClient()

class BlockImagesModel {

    async getBlockImages(blockId) {
        try {
            await client.$connect()
            const images = await client.blockImages.findMany({
                where: {
                    blockId: blockId
                }
            })
            await client.$disconnect()

            return images
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async addImage(path, blockId) {
        try {
            await client.$connect()
            const res = await client.blockImages.create({
                data: {
                    path: path,
                    blockId: blockId
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async deleteBlockImages(blockId) {
        try {
            await client.$connect()
            const res = await client.blockImages.deleteMany({
                where: {
                    blockId: blockId
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async deleteImage(id) {
        try {
            await client.$connect()
            const res = await client.blockImages.delete({
                where: {
                    id: id
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async updateImage(id, path, blockId) {
        try {
            await client.$connect()
            const res = await client.blockImages.update({
                where: {
                    id: id
                },
                data: {
                    path: path,
                    blockId: blockId
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async updateImages(data) {
        try {
            var res = []
            data.forEach(cur => {
                res.push(this.updateImage(parseInt(cur.id), cur.path, parseInt(cur.blockId)))
            })

            return res.length
        } catch (e) {
            console.error(e)
        }
    }
}

module.exports = new BlockImagesModel()