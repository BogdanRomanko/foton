const Router = require('express').Router
const productController = require('../controllers/product.controller')
const upload = require('../middleware/multer.middleware').uploadProducts
const router = new Router()

router.get('/get/:id', productController.getProductById)
router.get('/getAll', productController.getProducts)
router.get('/getByPage', productController.getProductsByPage)
router.get('/getByCategory', productController.getProductsByCategory)
router.get('/getByTitle', productController.getProductsByTitle)

router.post('/create', upload.single('image'), productController.addProduct)
router.post('/createMany', productController.addProducts)

router.delete('/delete', productController.deleteProduct)
router.delete('/deleteMany', productController.deleteProducts)

router.put('/update', upload.single('image'), productController.updateProduct)
router.put('/updateMany', productController.updateProducts)

module.exports = router