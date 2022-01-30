const Router = require('express');
const router = new Router();
const productController = require('../controllers/product-controller');
const categoryController = require('../controllers/category-controller');
const deliveryTypeController = require('../controllers/deliveryType-controller');
const paymentTypeController = require('../controllers/paymentType-controller');

router.get('/:id', productController.getProduct);
router.get('/products/get', productController.getProductByCategories);
router.get('/category/:id', categoryController.getCategory);
router.get('/categories/get', categoryController.getCategories);
router.get('/deliveryType/:id', deliveryTypeController.getDeliveryType);
router.get('/paymentType/:id', paymentTypeController.getPaymentType);

module.exports = router;
