const Router = require('express');
const router = new Router();
const productController = require('../controllers/product-controller');
const productService = require('../service/product-service');

router.get('/product/:id', productController.getProduct);
router.get('/category/:id', productController.getCategory);
router.get('/deliveryType/:id', productController.getDeliveryType);
router.get('/paymentType/:id', productController.getPaymentType);

module.exports = router;
