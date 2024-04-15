const contentModel = require('../models/content.model')

class ContentService {

    async getContentById(id) {
        return await contentModel.getContentById(parseInt(id))
    }

    async getAllContents() {
        return await contentModel.getAllContent()
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

    async deleteContents(data) {
        var ids = []
        data.forEach(id => {
            ids.push(parseInt(id.id))
        })
        return await contentModel.deleteContents(ids)
    }

    async updateContent(id, title, content) {
        return await contentModel.updateContent(parseInt(id), title, content)
    }

    async updateContents(data) {
        return await contentModel.updateContents(data)
    }
}

module.exports = new ContentService()