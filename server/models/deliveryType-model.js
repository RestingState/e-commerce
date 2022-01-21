const { Schema, model } = require('mongoose');

const DeliveryTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = model('OrderReceiver', DeliveryTypeSchema);
