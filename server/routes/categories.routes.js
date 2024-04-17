const Router = require('express').Router
const categoriesController = require('../controllers/categories.controller')
const router = new Router()

router.get('/get', categoriesController.getCategoryById)
router.get('/getAll', categoriesController.getCategories)

router.post('/create', categoriesController.addCategory)
router.post('/createMany', categoriesController.addCategories)

router.delete('/delete', categoriesController.deleteCategory)
router.delete('/deleteMany', categoriesController.deleteCategories)

router.put('/update', categoriesController.updateCategory)
router.put('/updateMany', categoriesController.updateCategories)

module.exports = router