const DeliveryTypeModel = require('../models/deliveryType-model');

class DeliveryTypeService {
  async getDeliveryType(id) {
    const deliveryType = await DeliveryTypeModel.findById(id);
    console.log(id);
    return deliveryType;
  }
}
module.exports = new DeliveryTypeService();
