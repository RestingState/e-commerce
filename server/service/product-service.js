const ProductModel = '..models/product-model';
const CategoryModel = '..models/category-model';
const DeliveryTypeModel = '..models/deliveryType-model';
const PaymentTypeModel = '..models/paymentType-model';

class ProductService {
  async getProduct(id) {
    const product = await ProductModel.findById(id);
    return product;
  }
  async getCategory(id) {
    const category = await CategoryModel.findById(id);
    return category;
  }
  async getDeliveryType(id) {
    const deliveryType = await DeliveryTypeModel.findById(id);
    return deliveryType;
  }
  async getProduct(id) {
    const paymentType = await PaymentTypeModel.findById(id);
    return paymentType;
  }
}

module.exports = new ProductService();
