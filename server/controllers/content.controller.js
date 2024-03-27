const contentService = require('../services/content.service')

class ContentController {

    async getContentById(req, res, next) {
        try {
            const data = await contentService.getContentById(req.query.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async addContent(req, res, next) {
        try {
            const data = await contentService.addContent(req.body.title, req.body.content)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async addContents(req, res, next) {
        try {
            const data = await contentService.addContents(req.body.data)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ContentController()