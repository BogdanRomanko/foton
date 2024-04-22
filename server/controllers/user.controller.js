const userService = require('../services/user.service')
const crypto = require('crypto')
const apiError = require('../exceptions/server.error')
const Joi = require('joi')

class UserController {

    async getUserById(req, res, next) {
        try {
            const schema = Joi.object({
                id: Joi.number().required()
            })
            const {error} = schema.validate(req.query)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await userService.getUserById(req.query.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async getUserByName(req, res, next) {
        try {
            const schema = Joi.object({
                name: Joi.string().required()
            })
            const {error} = schema.validate(req.query)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await userService.getUserByName(req.query.name)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async getUsers(req, res, next) {
        try {
            const data = await userService.getAllUsers()
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async registration(req, res, next) {
        try {
            const schema = Joi.object({
                name: Joi.string().required(),
                password: Joi.string().required(),
                role: Joi.string()
            })
            const {error} = schema.validate(req.body)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await userService.registration(req.body.name, req.body.password, req.body.role)
            res.cookie("JWTRefreshToken", data.refreshToken, {
                httpOnly: true,
                maxAge: 30 * 24 * 60 * 60 * 1000,
            })
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteUser(req, res, next) {
        try {
            const schema = Joi.object({
                id: Joi.number().required()
            })
            const {error} = schema.validate(req.query)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await userService.deleteUser(req.query.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async updateUser(req, res, next) {
        try {
            const schema = Joi.object({
                id: Joi.number().required(),
                name: Joi.string().required(),
                password: Joi.string().required(),
                role: Joi.string()
            })
            const {error} = schema.validate(req.body)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await userService.updateUser(req.body.id, req.body.name, req.body.password, req.body.role)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const schema = Joi.object({
                name: Joi.string().required(),
                password: Joi.string().required(),
            })
            const {error} = schema.validate(req.body)

            if (error) 
                throw apiError.HttpException(error.details[0].message)

            const userData = await userService.login(req.body.email, req.body.password)

            res.cookie("JWTRefreshToken", userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            })
            res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const { JWTRefreshToken } = req.cookies
            const userData = await userService.refresh(JWTRefreshToken)

            res.cookie("JWTRefreshToken", userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            })

            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController()