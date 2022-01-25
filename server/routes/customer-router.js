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
  '/DeliveryAddress',
  authMiddleware,
  body('houseNum').isNumeric(),
  body('flatNum').if(body('flatNum').exists()).isNumeric(),
  customerController.createDeliveryAddress
);
router.patch(
  '/DeliveryAddress/:id',
  authMiddleware,
  body('houseNum').if(body('houseNum').exists()).isNumeric(),
  body('flatNum').if(body('flatNum').exists()).isNumeric(),
  customerController.updateDeliveryAddress
);
router.delete(
  '/DeliveryAddress/:id',
  authMiddleware,
  customerController.deleteDeliveryAddress
);
router.get(
  '/DeliveryAddress/primary',
  authMiddleware,
  customerController.getPrimaryDeliveryAddress
);
router.get(
  '/DeliveryAddresses',
  authMiddleware,
  customerController.getDeliveryAddress
);

module.exports = router;
