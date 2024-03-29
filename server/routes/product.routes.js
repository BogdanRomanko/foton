const Router = require('express').Router
const productController = require('../controllers/product.controller')
const router = new Router()

router.get('/get', productController.getProductById)
router.get('/getAll', productController.getProducts)

router.post('/create', productController.addProduct)
router.post('/createMany', productController.addProducts)

router.delete('/delete', productController.deleteProduct)
router.delete('/deleteMany', productController.deleteProducts)

router.put('/update', productController.updateProduct)

module.exports = router