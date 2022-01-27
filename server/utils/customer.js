const CustomerModel = require('../models/customer-model');
const CustomerData = require('../testsData/customer');
const bcrypt = require('bcrypt');

const createCustomer = async (data) => {
  const customer = Object.assign({}, data);
  const hashPassword = await bcrypt.hash(customer.password, 3);
  customer.password = hashPassword;
  await CustomerModel.create(customer);
};

const createCustomers = async (arrOfCustomersData) => {
  for (let i = 0; i < arrOfCustomersData.length; ++i) {
    await createCustomer(arrOfCustomersData[i]);
  }
};

const clearCustomerCollection = async () => {
  await CustomerModel.deleteMany();
};

const initializeCustomerCollectionWithOneCustomer = async () => {
  await createCustomer(CustomerData.correct1);
};

const initializeCustomerCollectionWithManyCustomers = async () => {
  await createCustomers([
    CustomerData.correct1,
    CustomerData.correct2,
    CustomerData.correct3
  ]);
};

module.exports = {
  clearCustomerCollection,
  initializeCustomerCollectionWithOneCustomer,
  initializeCustomerCollectionWithManyCustomers
};
