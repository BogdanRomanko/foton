const Router = require('express').Router
const userController = require('../controllers/user.controller')
const router = new Router()

router.get('/get', userController.getUserById)
router.get('/getAll', userController.getUsers)
router.get('/getbyname', userController.getUserByName)

router.post('/registration', userController.registration)

router.delete('/delete', userController.deleteUser)

router.put('/update', userController.updateUser)

router.post('/validate', userController.validatePassword)

module.exports = router