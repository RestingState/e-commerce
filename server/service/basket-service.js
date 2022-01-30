const BasketModel = require('../models/basket-model');
const ProductModel = require('../models/product-model');

class BasketService {
  async addToBasket(customerID, productID) {
    const valid = await ProductModel.findById(productID);
    const productInBasket = await BasketModel.create({ customerID, productID });
    return productInBasket;
  }
  async deleteFromBasket(id) {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      const deleteFromBasket = await BasketModel.findByIdAndDelete(id);
      if (!deleteFromBasket) {
        throw ApiError.NotFound('No product found');
      }
    }
  }
  async getProductsFromBasket(customerID) {
    const productInBasket = await BasketModel.find(
      { customerID },
      '-__v'
    ).populate('customerID productID', 'name -_id');
    return productInBasket;
  }
}
module.exports = new BasketService();
