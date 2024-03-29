const PrismaClient = require('@prisma/client').PrismaClient
const client = new PrismaClient()

class ProductModel {
    
    async getAllProducts() {
        try {
            await client.$connect()
            const products = await client.products.findMany()
            await client.$disconnect()

            return products
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async getProductById(id) {
        try {
            await client.$connect()
            const product = await client.products.findUnique({
                where: {
                    id: id
                }
            })
            await client.$disconnect()

            return product
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }



    async addProduct(title, description, image, categoryId) {
        try {
            await client.$connect()
            const res = await client.products.create({
                data: {
                    title: title,
                    description: description,
                    image: image,
                    categoryId: categoryId
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async deleteProduct(id) {
        try {
            await client.$connect()
            const res = await client.products.delete({
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

    async updateProducts(id, title, description, image, categoryId) {
        try {
            await client.$connect()
            const res = await client.products.update({
                where: {
                    id: id
                },
                data: {
                    title: title,
                    description: description,
                    image: image,
                    categoryId: categoryId
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }
}

module.exports = new ProductModel()