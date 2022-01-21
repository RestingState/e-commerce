const OrderService = require('../service/order-service');
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
  async getCategory(req, res, next) {
    try {
      const id = req.params.id;
      const GetCategory = await productService.getCategory(id);
      return res.status(200).json(GetCategory);
    } catch (e) {
      next(e);
    }
  }
  async getDeliveryType(req, res, next) {
    try {
      const id = req.params.id;
      const GetDeliveryType = await productService.getDeliveryType(id);
      return res.status(200).json(GetDeliveryType);
    } catch (e) {
      next(e);
    }
  }
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

module.exports = new ProductController();
