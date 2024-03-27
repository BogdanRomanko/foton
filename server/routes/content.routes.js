const Router = require('express').Router
const contentController = require('../controllers/content.controller')
const router = new Router()

router.get('/get', contentController.getContentById)
router.post('/create', contentController.addContent)
router.post('/createMany', contentController.addContents)

module.exports = router