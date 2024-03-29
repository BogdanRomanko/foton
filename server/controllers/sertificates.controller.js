const sertificateService = require('../services/sertificates.service')

class SertificateController {

    async getSertificateById(req, res, next) {
        try {
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
            const data = await sertificateService.addSertificate(req.body.title, req.body.image)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async addSertificates(req, res, next) {
        try {
            const data = await sertificateService.addSertificates(req.body.data)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteSErtificate(req, res, next) {
        try {
            const data = await sertificateService.deleteSertificate(req.query.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteSertificates(req, res, next) {
        try {
            const data = await sertificateService.deleteSertificate(req.body.data)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async deleteSertificates(req, res, next) {
        try {
            const data = await sertificateService.deleteSertificates(req.body.data)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async updateContent(req, res, next) {
        try {
            const data = await sertificateService.updateSertificate(req.body.id, req.body.title, req.body.image)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new SertificateController()