const contentModel = require('../models/content.model')

class ContentService {

    async getContentById(id) {
        return await contentModel.getContentById(parseInt(id))
    }

    async addContent(title, content) {
        return await contentModel.addContent(title, content)
    }

    async addContents(data) {
        return await contentModel.addContents(data)
    }

    async deleteContent(id) {
        return await contentModel.deleteContent(parseInt(id))
    }

    async updateContent(id, title, content) {
        return await contentModel.updateContent(parseInt(id), title, content)
    }
}

module.exports = new ContentService()