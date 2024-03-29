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
        return await sertificatesModel.deleteSertificate(id)
    }

    async deleteSertificates(ids) {
        return await sertificatesModel.deleteSertificates(ids)
    }

    async updateSertificate(id, title, image) {
        return await sertificatesModel.updateSertificate(id, title, image)
    }
}

module.exports = new SertificateService()