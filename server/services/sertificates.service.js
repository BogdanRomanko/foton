const sertificatesModel = require('../models/sertificates.model')

class SertificateService {

    async getSertificateById(id) {
        return await sertificatesModel.getSertificateById(parseInt(id))
    }

    async getAllSertificates() {
        return await sertificatesModel.getAllSertificates()
    }

    async addSertificate(title, image) {
        return await sertificatesModel.addSertificate(title, image)
    }
    
    async addSertificates(data) {
        return await sertificatesModel.addSertificates(data)
    }

    async deleteSertificate(id) {
        return await sertificatesModel.deleteSertificate(parseInt(id))
    }

    async deleteSertificates(data) {
        var ids = []
        data.forEach(id => {
            ids.push(parseInt(id.id))
        })
        return await sertificatesModel.deleteSertificates(ids)
    }

    async updateSertificate(id, title, image) {
        return await sertificatesModel.updateSertificate(parseInt(id), title, image)
    }

    async updateSertificates(data) {
        return await sertificatesModel.updateSertificates(data)
    }
}

module.exports = new SertificateService()