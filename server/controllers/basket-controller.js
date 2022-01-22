const basketService = require('../service/basket-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const res = require('express/lib/response');

class BasketController {
  async addToBasket(req, res, next) {
    try {
      const customerID = req.user.id;
      const productID = req.params.id;
      const productInBasket = await basketService.addToBasket(
        customerID,
        productID
      );
      return res.status(200).json(productInBasket);
    } catch (e) {
      next(e);
    }
  }
  async deleteFromBasket(req, res, next) {
    try {
      const id = req.params.id;
      const deleteFromBasket = await basketService.deleteFromBasket(id);
      return res.status(200).json('Deleted');
    } catch (e) {
      next(e);
    }
  }
  async getProductsFromBasket(req, res, next) {
    try {
      const id = req.user.id;
      const productsFromBasket = await basketService.getProductsFromBasket(id);
      return res.status(200).json(productsFromBasket);
    } catch (e) {
      next(e);
    }
  }
}
module.exports = new BasketController();
