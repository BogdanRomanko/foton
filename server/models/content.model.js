const PrismaClient = require('@prisma/client').PrismaClient
const client = new PrismaClient()

class ContentModel {

    async getContentById(id) {
        try {
            await client.$connect()
            const content = await client.siteContent.findUnique({
                where: {
                    id: id
                }
            })
            await client.$disconnect()

            return content
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async getContents() {
        try {
            await client.$connect()
            const contents = await client.siteContent.findMany()
            await client.$disconnect()

            return contents
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async addContent(title, content) {
        try {
            await client.$connect()
            const res = await client.siteContent.create({
                data: {
                    title: title,
                    content: content
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async addContents(data) {
        try {
            await client.$connect()
            const res = await client.siteContent.createMany({
                data: data,
                skipDuplicates: true
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async deleteContent(id) {
        try {
            await client.$connect()
            const res = await client.siteContent.delete({
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

    async deleteContents(data) {
        try {
            await client.$connect()
            const res = await client.siteContent.deleteMany({
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
            client.$disconnect()
        }
    }

    async updateContent(id, title, content) {
        try {
            await client.$connect()
            const res = await client.siteContent.update({
                where: {
                    id: id
                },
                data: {
                    title: title,
                    content: content
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async updateContents(data) {
        try {
            var res = []
            data.forEach(cur => {
                res.push(this.updateContent(parseInt(cur.id), cur.title, cur.content))
            })

            return res.length
        } catch (e) {
            console.error(e)
        }
    }
}

module.exports = new ContentModel()