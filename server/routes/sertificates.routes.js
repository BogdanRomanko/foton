const Router = require('express').Router
const sertificateController = require('../controllers/sertificates.controller')
const router = new Router()

router.get('/getAll', sertificateController.getSertificates)
router.get('/get', sertificateController.getSertificateById)

router.post('/create', sertificateController.addSertificate)
router.post('/createMany', sertificateController.addSertificates)

router.put('/update', sertificateController.updateSertificate)
router.put('/updateMany', sertificateController.updateSertificates)

router.delete('/delete', sertificateController.deleteSErtificate)
router.delete('/deleteMany', sertificateController.deleteSertificates)

module.exports = router