const Router = require('express')
const router = new Router()
const productRouter = require('./productRouter')
const tagRouter = require('./tagRouter')
const userRouter = require('./userRouter')



router.use('/user', userRouter)
router.use('/tag', tagRouter)
router.use('/product', productRouter)

module.exports = router