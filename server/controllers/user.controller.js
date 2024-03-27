const userService = require('../services/user.service')
const crypto = require('crypto')

class UserController {

    async getUserById(req, res, next) {
        try {
            const data = await userService.getUserById(req.query.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async getUserByName(req, res, next) {
        try {
            const data = await userService.getUserByName(req.query.name)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async getUsers(req, res, next) {
        try {
            const data = await userService.getUsers()
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async createUser(req, res, next) {
        try {
            const data = await userService.createUser(req.body.name, req.body.password, req.body.role)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteUser(req, res, next) {
        try {
            const data = await userService.deleteUser(req.query.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async updateUser(req, res, next) {
        try {
            const data = await userService.updateUser(req.body.id, req.body.name, req.body.password, req.body.role)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async validatePassword(req, res, next) {
        try {
            const data = await userService.getUserByName(req.body.name)
            var hash = crypto.pbkdf2Sync(req.body.password, data.salt, 1000, 64, 'sha512').toString('hex')
            res.json(data.hash === hash)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController()