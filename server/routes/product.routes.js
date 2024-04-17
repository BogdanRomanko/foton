const Router = require('express').Router
const productController = require('../controllers/product.controller')
const router = new Router()

router.get('/get', productController.getProductById)
router.get('/getAll', productController.getProducts)
router.get('/getByPage', productController.getProductsByPage)
router.get('/getByCategory', productController.getProductsByCategory)
router.get('/getByTitle', productController.getProductsByTitle)

router.post('/create', productController.addProduct)
router.post('/createMany', productController.addProducts)

router.delete('/delete', productController.deleteProduct)
router.delete('/deleteMany', productController.deleteProducts)

router.put('/update', productController.updateProduct)
router.put('/updateMany', productController.updateProducts)

module.exports = router