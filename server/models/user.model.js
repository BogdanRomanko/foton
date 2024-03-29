const PrismaClient = require('@prisma/client').PrismaClient
const client = new PrismaClient()

class UserModel {

    async getUserById(id) {
        try {
            await client.$connect()
            const res = await client.user.findUnique({
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

    async getUserByName(name) {
        try {
            await client.$connect()
            const res = await client.user.findUnique({
                where: {
                    name: name
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async getUsers() {
        try {
            await client.$connect()
            const res = await client.user.findMany()
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async addUser(name, hash, salt, role) {
        try {
            await client.$connect()
            const res = await client.user.create({
                data: {
                    name: name,
                    hash: hash,
                    salt: salt,
                    role: role
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async deleteUser(id) {
        try {
            await client.$connect()
            const res = await client.user.delete({
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

    async updateUser(id, name, hash, salt, role) {
        try {
            await client.$connect()
            const res = await client.user.update({
                where: {
                    id: id
                },
                data: {
                    name: name,
                    hash: hash,
                    salt: salt,
                    role: role
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

module.exports = new UserModel()