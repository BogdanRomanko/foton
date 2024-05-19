const Router = require('express').Router
const userController = require('../controllers/user.controller')
const router = new Router()

router.get('/get', userController.getUserById)
router.get('/getAll', userController.getUsers)
router.get('/getByName', userController.getUserByName)

router.post('/registration', userController.registration)
router.post('/login', userController.login)

router.delete('/delete', userController.deleteUser)

router.put('/update', userController.updateUser)

module.exports = router