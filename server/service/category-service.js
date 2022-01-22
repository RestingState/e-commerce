const CategoryModel = require('../models/category-model');

class CategoryService {
  async getCategory(id) {
    const category = await CategoryModel.findById(id);
    return category;
  }
}
module.exports = new CategoryService();
