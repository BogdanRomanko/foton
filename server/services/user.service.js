const userModel = require('../models/user.model')
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

    async createUser(name, password, role) {
        const salt = crypto.randomBytes(16).toString('hex')
        const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

        return await userModel.addUser(name, hash, salt, role)
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