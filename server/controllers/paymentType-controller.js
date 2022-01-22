const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const res = require('express/lib/response');
const paymentTypeService = require('../service/paymentType-service');

class PaymentTypeController {
  async getPaymentType(req, res, next) {
    try {
      const id = req.params.id;
      const GetPaymentType = await productService.getPaymentType(id);
      return res.status(200).json(GetPaymentType);
    } catch (e) {
      next(e);
    }
  }
}
module.exports = new PaymentTypeController();
