const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const res = require('express/lib/response');
const categoryService = require('../service/category-service');

class CategoryController {
  async getCategory(req, res, next) {
    try {
      const id = req.params.id;
      const GetCategory = await categoryService.getCategory(id);
      return res.status(200).json(GetCategory);
    } catch (e) {
      next(e);
    }
  }
  async getCategories(req, res, next) {
    try {
      const array = req.query.array.split(',');
      const GetCategories = await categoryService.getCategories(array);
      return res.status(200).json(GetCategories);
    } catch (e) {
      next(e);
    }
  }
}
module.exports = new CategoryController();
