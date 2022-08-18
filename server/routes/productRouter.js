const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')
const chechRole = require('../middleware/checkRoleMiddleware')

router.post('/', chechRole("ADMIN"), productController.create)
router.get('/', productController.getAll)
router.get('/:id', productController.getOne)
router.delete('/', chechRole("ADMIN"), productController.delete)

module.exports = router