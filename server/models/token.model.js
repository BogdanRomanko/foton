const PrismaClient = require('@prisma/client').PrismaClient
const client = new PrismaClient()

class TokenModel {
    
    async createToken(userId, refreshToken) {
        try {
            await client.$connect()
            const res = await client.token.create({
                data: {
                    user: userId,
                    refreshToken: refreshToken
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async getTokenByRefreshToken(refreshToken) {
        try {
            await client.$connect()
            const token = await client.token.findUnique({
                where: {
                    refreshToken: refreshToken
                },
                select: {
                    refreshToken
                }
            })
            await client.$disconnect()

            return token
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async getTokenByUser(userId) {
        try {
            await client.$connect()
            const token = await client.token.findUnique({
                where: {
                    user: userId
                },
                select: {
                    refreshToken
                }
            })
            await client.$disconnect()

            return token
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async updateToken(userId, refreshToken) {
        try {
            await client.$connect()
            const token = await client.token.update({
                where: {
                    user: userId
                },
                data: {
                    refreshToken: refreshToken
                }
            })
            await client.$disconnect()

            return token
        } catch (e) {
            console.error(e)
            client.$disconnect()
        }
    }

    async deleteToken(refreshToken) {
        try {
            await client.$connect()
            const res = await client.token.delete( {
                where: {
                    refreshToken: refreshToken
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

module.exports = new TokenModel()