const { Mongoose } = require('mongoose');
const ProductModel = require('../models/product-model');

class ProductService {
  async getProduct(id) {
    const product = await ProductModel.findById(id).populate(
      'categories deliveryTypes paymentTypes',
      'name -_id'
    );
    return product;
  }
  async getProductByCategories(array) {
    const product = await ProductModel.find(
      {
        categories: { $in: array },
      },
      'name -_id'
    );
    return product;
  }
}

module.exports = new ProductService();
