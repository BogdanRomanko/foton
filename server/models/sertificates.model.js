const PrismaClient = require('@prisma/client').PrismaClient
const client = new PrismaClient()

class SertificatesModel {
    
    async getAllSertificates() {
        try {
            await client.$connect()
            const sertificates = await client.sertificates.findMany()
            await client.$disconnect()

            return sertificates
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async getSertificateById(id) {
        try {
            await client.$connect()
            const sertificate = await client.sertificates.findUnique({
                where: {
                    id: id
                }
            })
            await client.$disconnect()

            return sertificate
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async addSertificate(title, image) {
        try {
            await client.$connect()
            const res = await client.sertificates.create({
                data: {
                    title: title,
                    sertificateImage: image
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async addSertificates(data) {
        try {
            await client.$connect()
            const res = await client.sertificates.createMany({
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

    async deleteSertificate(id) {
        try {
            await client.$connect()
            const res = await client.sertificates.delete({
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

    async deleteSertificates(data) {
        try {
            await client.$connect()
            const res = await client.sertificates.deleteMany({
                where: {
                    id: {
                        in: data
                    }
                }
            })
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async updateSertificate(id, title, image) {
        try {
            await client.$connect()
            const res = await client.sertificates.update({
                where: {
                    id: id
                },
                data: {
                    title: title,
                    image: image
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async updateSertificates(data) {
        try {
            var res = []
            data.forEach(cur => {
                res.push(this.updateSertificate(parseInt(cur.id), cur.title, cur.image))
            })

            return res.length
        } catch (e) {
            console.error(e)
        }
    }
}

module.exports = new SertificatesModel()