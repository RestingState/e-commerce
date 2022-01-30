const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
  parameters: [{}],
  description: String,
  deliveryTypes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'DeliveryType',
    },
  ],
  paymentTypes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'PaymentType',
    },
  ],
  guarantee: String,
  returnPolicy: String,
  price: Number,
  imgs: [''],
});

module.exports = model('Product', ProductSchema);
