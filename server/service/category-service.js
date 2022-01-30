const CategoryModel = require('../models/category-model');

class CategoryService {
  async getCategory(id) {
    const category = await CategoryModel.findById(id);
    return category;
  }
  async getCategories(array) {
    const category = await CategoryModel.find({ _id: { $in: array } }, '-_id');
    return category;
  }
}
module.exports = new CategoryService();
