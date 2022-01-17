const OrderService = require('../service/order-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const res = require('express/lib/response');

class ProductController {
  async getPrimaryOrderReceiver(req, res, next) {
    try {
      const id = req.user.id;
      const GetPrimaryOrderReceiver =
        await customerService.getPrimaryOrderReceiver(id);
      return res.status(200).json(GetPrimaryOrderReceiver);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProductController();
