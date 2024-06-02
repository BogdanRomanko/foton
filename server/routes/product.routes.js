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
router.post('/saveImages', upload.array('image'), productController.saveImages)

router.delete('/delete/:id', productController.deleteProduct)
router.delete('/deleteMany', productController.deleteProducts)
router.delete('/deleteImages', productController.deleteImages)
router.delete('/deleteImage', productController.deleteImage)
router.delete('/deleteBlock', productController.deleteBlock)

router.put('/update', upload.single('image'), productController.updateProduct)

module.exports = router