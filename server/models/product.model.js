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

    async getProductsByPage(page) {
        try {
            await client.$connect()
            const products = await client.products.findMany({
                skip: page * 10,
                take: 10
            })

            const res = []
            res.push({products: products})
            res.push({count: await client.products.count()})

            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async getProductsByCategory(categoryId) {
        try {
            await client.$connect()
            const products = await client.products.findMany({
                where: {
                    categoryId: categoryId
                }
            })
            await client.$disconnect()

            return products
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async getProductsByTitle(title) {
        try {
            await client.$connect()
            const product = await client.products.findMany({
                where: {
                    title: {
                        contains: title
                    }
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

    async addProducts(data) {
        try {
            await client.$connect()
            const res = await client.products.createMany({
                data: data
            })
            await client.$disconnect()
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

    async deleteProducts(data) {
        try {
            await client.$connect()
            const res = await client.products.deleteMany({
                where: {
                    id: {
                        in: data
                    }
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async updateProduct(id, title, description, image, categoryId) {
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