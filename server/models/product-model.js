const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'category',
    },
  ],
  parameters: [{}],
  description: String,
  deliveryTypes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'delivery',
    },
  ],
  paymentTypes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'payment',
    },
  ],
  guarantee: String,
  returnPolicy: String,
  price: Number,
  imgs: [''],
});

module.exports = model('OrderReceiver', ProductSchema);
