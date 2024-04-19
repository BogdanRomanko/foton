const userModel = require('../models/user.model')
const apiError = require('../exceptions/server.error')
const crypto = require('crypto')

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
        const salt = crypto.randomBytes(16).toString('hex')
        const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

        return await userModel.registration(name, hash, salt, role)
    }

    async login(name, password) {
        try {
            const data = userModel.getUserByName(name)

            if (!data) {
                throw new apiError(404, `User with name "${name}" not found`)
            }

            var hash = crypto.pbkdf2Sync(password, data.salt, 1000, 64, 'sha512').toString('hex')
            if (data.hash === hash) {

            } else {
                throw new apiError(404, "Password not valid")
            }
        } catch (e) {
            next(e)
        }
    }

    async refresh(refreshToken) {

    }

    async logout() {

    }

    async deleteUser(id) {
        return await userModel.deleteUser(parseInt(id))
    }

    async updateUser(id, name, password, role) {
        const salt = crypto.randomBytes(16).toString('hex')
        const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

        return await userModel.updateUser(parseInt(id), name, hash, salt, role)
    }

}

module.exports = new UserService()