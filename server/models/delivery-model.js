const { Schema, model } = require('mongoose');

const DeliverySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = model('OrderReceiver', DeliverySchema);
