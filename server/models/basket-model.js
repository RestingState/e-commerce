const { Schema, model } = require('mongoose');

const BasketSchema = new Schema({
  productID: {
    type: Schema.Types.ObjectId,
    ref: 'OrderReceiver',
  },
  customerID: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
  },
});

module.exports = model('Basket', BasketSchema);
