const PaymentTypeModel = require('../models/paymentType-model');

class PaymentTypeService {
  async getPaymentType(id) {
    const paymentType = await PaymentTypeModel.findById(id);
    return paymentType;
  }
}
module.exports = new PaymentTypeService();
