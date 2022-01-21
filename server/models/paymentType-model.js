const { Schema, model } = require('mongoose');

const PaymentTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = model('OrderReceiver', PaymentTypeSchema);
