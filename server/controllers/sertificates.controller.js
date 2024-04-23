const sertificateService = require('../services/sertificates.service')
const apiError = require('../exceptions/server.error')
const Joi = require('joi')

class SertificateController {

    async getSertificateById(req, res, next) {
        try {
            const schema = Joi.object({
                id: Joi.number().required()
            })
            const {error} = schema.validate(req.query)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await sertificateService.getAllSertificates(req.query.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async getSertificates(req, res, next) {
        try {
            const data = await sertificateService.getAllSertificates()
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async addSertificate(req, res, next) {
        try {
            const schema = Joi.object({
                title: Joi.string().required(),
                image: Joi.any().meta({swaggerType: 'file'}).optional()
            })
            const {error} = schema.validate(req.body)

            if (error)
                throw apiError.HttpException(error.details[0].message)
            
            const data = await sertificateService.addSertificate(req.body.title, req.file.path)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async addSertificates(req, res, next) {
        try {
            const schema = Joi.array().items({
                title: Joi.string().required(),
                image: Joi.string().required()
            })
            const {error} = schema.validate(req.body.data)

            if (error)
                throw apiError.HttpException(error.details[0].message)
            
            const data = await sertificateService.addSertificates(req.body.data)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteSertificate(req, res, next) {
        try {
            const schema = Joi.object({
                id: Joi.number().required()
            })
            const {error} = schema.validate(req.query)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await sertificateService.deleteSertificate(req.query.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteSertificates(req, res, next) {
        try {
            const schema = Joi.array().items({
                id: Joi.number().required()
            })
            const {error} = schema.validate(req.body.data)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await sertificateService.deleteSertificates(req.body.data)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async updateSertificate(req, res, next) {
        try {
            const schema = Joi.object({
                id: Joi.number().required(),
                title: Joi.string().required(),
                image: Joi.any().meta({swaggerType: 'file'}).optional()
            })
            const {error} = schema.validate(req.body)

            if (error)
                throw apiError.HttpException(error.details[0].message)
            
            const data = await sertificateService.updateSertificate(req.body.id, req.body.title, req.file.path)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async updateSertificates(req, res, next) {
        try {
            const schema = Joi.array().items({
                id: Joi.number().required(),
                title: Joi.string().required(),
                image: Joi.string().required()
            })
            const {error} = schema.validate(req.body.data)

            if (error)
                throw apiError.HttpException(error.details[0].message)

            const data = await sertificateService.updateSertificates(req.body.data)
            res.json(data)
        } catch (e) {
            console.error(e)
        }
    }

}

module.exports = new SertificateController()