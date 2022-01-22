const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const res = require('express/lib/response');
const categoryService = require('../service/category-service');

class CategoryController {
  async getCategory(req, res, next) {
    try {
      const id = req.params.id;
      const GetCategory = await productService.getCategory(id);
      return res.status(200).json(GetCategory);
    } catch (e) {
      next(e);
    }
  }
}
module.exports = new CategoryController();
