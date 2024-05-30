const PrismaClient = require('@prisma/client').PrismaClient
const client = new PrismaClient()

class ProductImagesModel {

    async getProductImages(productId) {
        try {
            await client.$connect()
            const images = await client.productImages.findMany({
                where: {
                    productId: productId
                }
            })
            await client.$disconnect()

            return images
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async addImage(path, productId) {
        try {
            await client.$connect()
            const res = await client.productImages.create({
                data: {
                    path: path,
                    productId: productId
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async deleteImages(productId) {
        try {
            await client.$connect()
            const res = await client.productImages.deleteMany({
                where: {
                    productId: productId
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
            const res = await client.productImages.delete({
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

    async updateImage(id, path, productId) {
        try {
            await client.$connect()
            const res = await client.productImages.update({
                where: {
                    id: id
                },
                data: {
                    path: path,
                    productId: productId
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
                res.push(this.updateImage(parseInt(cur.id), cur.path, parseInt(cur.productId)))
            })

            return res.length
        } catch (e) {
            console.error(e)
        }
    }
}

module.exports = new ProductImagesModel()