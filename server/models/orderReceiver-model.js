const { Schema, model } = require('mongoose');

const OrderReceiverSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    middleName: String,
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
    },
    updatedAt: {
      type: Date,
      default: () => Date.now(),
    },
  });

module.exports = model('OrderReceiver', OrderReceiverSchema);