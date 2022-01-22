const Router = require('express');
const router = new Router();
const productController = require('../controllers/product-controller');

router.get('/:id', productController.getProduct);

module.exports = router;
