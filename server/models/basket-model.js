const { Schema, model } = require('mongoose');

const BasketSchema = new Schema({
  productID: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  customerID: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
  },
});

module.exports = model('Basket', BasketSchema);
