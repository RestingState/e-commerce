const Router = require('express');
const router = new Router();
const customerController = require('../controllers/customer-controller');
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post(
  '/registration',
  body('login').isLength({ min: 5, max: 32 }),
  body('password').isLength({ min: 5, max: 32 }),
  body('email').isEmail(),
  customerController.registration
);
router.post('/login', customerController.login);
router.post('/logout', customerController.logout);
router.get('/activate/:link', customerController.activate);
router.get('/refresh', customerController.refresh);
router.delete('', authMiddleware, customerController.deleteCustomer);
router.get('/personalInfo', authMiddleware, customerController.getPersonalInfo);
router.patch(
  '/personalInfo',
  authMiddleware,
  customerController.updatePersonalInfo
);
router.post(
  '/createDeliveryAddress',
  authMiddleware,
  customerController.createDeliveryAddress
);
router.patch(
  '/updateDeliveryAddress/:id',
  authMiddleware,
  customerController.updateDeliveryAddress
);
router.delete(
  '/deleteDeliveryAddress/:id',
  authMiddleware,
  customerController.deleteDeliveryAddress
);
router.get(
  '/getDeliveryAddress',
  authMiddleware,
  customerController.getDeliveryAddress
);
router.get(
  '/DeliveryAddress/primary',
  authMiddleware,
  customerController.getPrimaryDeliveryAddress
);

module.exports = router;
