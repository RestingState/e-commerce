const { Schema, model } = require('mongoose');

const PaymentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = model('OrderReceiver', PaymentSchema);
