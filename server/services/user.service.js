const userModel = require('../models/user.model')
const apiError = require('../exceptions/server.error')
const crypto = require('crypto')
const tokenService = require('./token.service')

class UserService {

    async getUserById(id) {
        return await userModel.getUserById(parseInt(id))
    }

    async getUserByName(name) {
        return await userModel.getUserByName(name)
    }

    async getAllUsers() {
        return await userModel.getAllUsers()
    }

    async registration(name, password, role) {
        const hashPassword = this.hashPassword(password)

        await userModel.registration(name, hashPassword.hash, hashPassword.salt, role)

        const user = await userModel.getUserByName(name)

        const tokens = await tokenService.generateTokens({userId: user.id, userName: user.name, role: user.role})
        await tokenService.saveToken(user.id, tokens.refreshToken)

        return tokens
    }

    async login(name, password) {
        try {
            const user = await userModel.getUserByName(name)

            if (!user)
                throw new apiError(404, `User with name "${name}" not found`)

            const hashPassword = this.hashPassword(password)

            if (user.hash === hashPassword.hash) {
                const tokens = await tokenService.generateTokens({userId: user.id, userName: user.name, role: user.role})
                await tokenService.saveToken(user.id, tokens.refreshToken)
                
                return tokens
            } else
                throw new apiError(404, "Password not valid")
        } catch (e) {
            next(e)
        }
    }

    async refresh(refreshToken) {
        if (!refreshToken)
            throw apiError.UnauthorizedError()

        const userData = await tokenService.validateRefreshToken(refreshToken)
        const tokenDB = await tokenService.findToken(refreshToken)

        if (!userData || !tokenDB)
            throw apiError.UnauthorizedError()

        const user = await userModel.getUserById(userData.id)
        const tokens = await tokenService.generateTokens({userId: user.id, userName: user.name, role: user.role})
        
        return tokens
    }

    async logout(token) {
        if (!token)
            throw apiError.UnauthorizedError()

        await tokenService.removeToken(token)
        
        return true
    }

    async deleteUser(id) {
        return await userModel.deleteUser(parseInt(id))
    }

    async updateUser(id, name, password, role) {
        const oldUser = await userModel.getUserById(parseInt(id))

        if (!oldUser)
            throw new apiError(404, `User with name "${name}" not found`)

        const newUser = []

        if (name)
            newUser.push({name: name})
        else
            newUser.push({name: oldUser.name})
        
        if (password)
            newUser.push({password: this.hashPassword(password)})
        else
            newUser.push({password: {hash: oldUser.hash, salt: oldUser.salt}})

        if (role)
            newUser.push({role: role})
        else
            newUser.push({role: oldUser.role})
        
        const user = await userModel.updateUser(parseInt(id), newUser.name, newUser.password.hash, newUser.password.salt, newUser.role)

        if (!user)
            throw new apiError(404, `User with name "${name}" not found`)

        const tokens = await tokenService.generateTokens({userId: user.id, userName: user.name, role: user.role})
        
        return tokens
    }

    hashPassword(password) {
        const salt = crypto.randomBytes(16).toString('hex')
        const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
        
        return {hash, salt}
    }

}

module.exports = new UserService()