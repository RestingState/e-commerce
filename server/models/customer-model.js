const { Schema, model } = require('mongoose');

const CustomerSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // role: {
  //   type: String,
  //   required: true,
  //   enum: ['customer', 'seller', 'admin'],
  // },
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
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birthday: String,
  sex: String,
  interfaceLanguage: String,
  additionalInfo: [String],
  isActivated: {
    type: Boolean,
    default: false,
  },
  activationLink: {
    type: String,
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

module.exports = model('Customer', CustomerSchema);
