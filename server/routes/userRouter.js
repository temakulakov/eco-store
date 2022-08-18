const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
require('dotenv').config()

router.post('/registration', userController.registration)
router.get('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.delete('/', userController.delete)

module.exports = router