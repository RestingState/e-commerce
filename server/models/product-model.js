const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  categories: [{}],
  parameters: [{}],
  description: String,
  deliveryTypes: [{}],
  paymentTypes: [{}],
  guarantee: String,
  returnPolicy: String,
  price: Number,
  imgs: [''],
});

module.exports = model('OrderReceiver', ProductSchema);
