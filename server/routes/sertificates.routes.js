const Router = require('express').Router
const sertificateController = require('../controllers/sertificates.controller')
const upload = require('../middleware/multer.middleware').uploadSertificates
const router = new Router()

router.get('/getAll', sertificateController.getSertificates)
router.get('/get', sertificateController.getSertificateById)

router.post('/create', upload.single('image'), sertificateController.addSertificate)
router.post('/createMany', sertificateController.addSertificates)

router.put('/update', upload.single('image'), sertificateController.updateSertificate)
router.put('/updateMany', sertificateController.updateSertificates)

router.delete('/delete', sertificateController.deleteSertificate)
router.delete('/deleteMany', sertificateController.deleteSertificates)

module.exports = router