const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const res = require('express/lib/response');
const deliveryTypeService = require('../service/deliveryType-service');

class DeliveryTypeController {
  async getDeliveryType(req, res, next) {
    try {
      const id = req.params.id;
      const GetDeliveryType = await deliveryTypeService.getDeliveryType(id);
      return res.status(200).json(GetDeliveryType);
    } catch (e) {
      next(e);
    }
  }
}
module.exports = new DeliveryTypeController();
