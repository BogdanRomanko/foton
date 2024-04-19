const jwt = require('jsonwebtoken')
const apiError = require('../exceptions/server.error')
const tokenModel = require('../models/token.model')

class TokenService {

    async generateTokens(payload) {
        const accessToken = jwt.sign(
            {payload},
            process.env.JWT_ACCESS_SECRET,
            {expiresIn: process.env.JWT_ACCESS_EXPIRES}
        )
        const refreshToken = jwt.sign(
            {payload},
            process.env.JWT_REFRESH_SECRET,
            {expiresIn: process.env.JWT_REFRESH_EXPIRES}
        )

        return {
            accessToken,
            refreshToken
        }
    }

    async validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            return userData
        } catch (e) {
            return null
        }
    }

    async validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
            return userData
        } catch (e) {
            return null
        }
    }

    async findToken(refreshToken) {
        return await tokenModel.getTokenByRefreshToken(refreshToken)
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.getTokenByUser(parseInt(userId))

        if (tokenData) {
            return await tokenModel.updateToken(parseInt(userId), refreshToken) 
        }

        return await tokenModel.createToken(userId, refreshToken)
    }

    async removeToken(refreshToken) {
        const tokenData = await tokenModel.deleteToken(refreshToken)

        if (!tokenData) {
            throw new apiError.UnauthorizedError()
        }
        
        return tokenData
    }

}

module.exports = new TokenService()