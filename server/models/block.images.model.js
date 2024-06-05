const PrismaClient = require('@prisma/client').PrismaClient
const client = new PrismaClient()

class BlockImagesModel {

    async getImage(id) {
        try {
            await client.$connect()
            const image = await client.blockImages.findUnique({
                where: {
                    id: id
                }
            })
            await client.$disconnect()

            return image
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async addImage(path) {
        try {
            await client.$connect()
            const res = await client.blockImages.create({
                data: {
                    path: path
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

    async updateImage(id, path) {
        try {
            await client.$connect()
            const res = await client.blockImages.update({
                where: {
                    id: id
                },
                data: {
                    path: path
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
                res.push(this.updateImage(parseInt(cur.id), cur.path))
            })

            return res.length
        } catch (e) {
            console.error(e)
        }
    }
}

module.exports = new BlockImagesModel()