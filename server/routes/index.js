const Router = require('express')
const router = new Router()
const customerRouter = require('./customer-router')

router.use('/customer', customerRouter);

module.exports = router
