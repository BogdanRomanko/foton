const sertificatesModel = require('../models/sertificates.model')
const fs = require('fs')
const Path = require('path')

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
        const sertificate = await this.getSertificateById(parseInt(id))
        await this.deleteImage(sertificate.sertificateImage)

        return await sertificatesModel.deleteSertificate(parseInt(id))
    }

    async deleteSertificates(data) {
        const ids = []
        const paths = []

        data.forEach(item => {
            ids.push(parseInt(item.id))
        })

        for (let i = 0; i < ids.length; i++) {
            const sert = await this.getSertificateById(ids[i])
            paths.push(sert.sertificateImage)
        }

        await this.deleteImages(paths)

        return await sertificatesModel.deleteSertificates(ids)
    }

    async updateSertificate(id, title, image) {
        return await sertificatesModel.updateSertificate(parseInt(id), title, image)
    }

    async updateSertificates(data) {
        return await sertificatesModel.updateSertificates(data)
    }

    async deleteImage(imagePath) {
        if (imagePath != null)
            if (fs.existsSync(Path.join("../server", imagePath)))
                fs.rm(Path.join("../server", imagePath), (err) => {
                    if (err)
                        console.log(err)
                })
    }

    async deleteImages(imagePaths) {
        imagePaths.forEach(imagePath => {
            if (imagePath != null) {
                if (fs.existsSync(Path.join("../server", imagePath)))
                    fs.rm(Path.join("../server", imagePath), (err) => {
                        if (err)
                            console.log(err)
                    })
            }
        })
    }
}

module.exports = new SertificateService()