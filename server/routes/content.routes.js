const Router = require('express').Router
const contentController = require('../controllers/content.controller')
const router = new Router()

router.get('/get', contentController.getContentById)
router.get('/getAll', contentController.getContents)

router.post('/create', contentController.addContent)
router.post('/createMany', contentController.addContents)

router.delete('/delete', contentController.deleteContent)
router.delete('/deleteMany', contentController.deleteContents)

router.put('/update', contentController.updateContent)
router.put('/updateMany', contentController.updateContents)

module.exports = router