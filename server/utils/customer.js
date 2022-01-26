const CustomerModel = require('../models/customer-model');

const createCustomer = async (data) => {
  const customer = await CustomerModel.create(data);
  return customer;
};

module.exports = createCustomer;
