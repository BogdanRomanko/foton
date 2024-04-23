const multer = require('multer')
const path = require('path')

const productsStorageEngine = multer.diskStorage({
    destination: "./static/products",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname}`)
    },
})

const sertificatesStorageEngine = multer.diskStorage({
    destination: "./static/sertificates",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname}`)
    },
})

const checkFileType = function (file, cb) {
    const fileTypes = /jpeg|jpg|png|gif|svg/
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())
    const mimeType = fileTypes.test(file.mimetype)

    if (mimeType && extName)
        return cb(null, true)
    else
        cb("Error: You can Only Upload Images.")
}

const uploadProducts = multer({
    storage: productsStorageEngine,
    limits: { fileSize: 10000000 },
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb)
    },
})

const uploadSertificates = multer({
    storage: sertificatesStorageEngine,
    limits: { fileSize: 10000000 },
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb)
    },
})

module.exports = {uploadProducts, uploadSertificates}