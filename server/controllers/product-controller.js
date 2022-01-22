const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const res = require('express/lib/response');
const productService = require('../service/product-service');

class ProductController {
  async getProduct(req, res, next) {
    try {
      const id = req.params.id;
      const GetProduct = await productService.getProduct(id);
      return res.status(200).json(GetProduct);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProductController();
