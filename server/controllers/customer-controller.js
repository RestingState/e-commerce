const customerService = require('../service/customer-service')
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error');
const res = require('express/lib/response');

class CustomerController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()))
      }
      const data = req.body;
      const customerData = await customerService.registration(data);
      res.cookie('refreshToken', customerData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
      return res.status(201).json(customerData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const data = req.body;
      const customerData = await customerService.login(data);
      res.cookie('refreshToken', customerData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
      return res.json(customerData);
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      const {refreshToken} = req.cookies;
      const token = await customerService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token)
    } catch (e) {
      next(e);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await customerService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const {refreshToken} = req.cookies;
      const customerData = await customerService.refresh(refreshToken);
      res.cookie('refreshToken', customerData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
      return res.json(customerData);
    } catch (e) {
      next(e);
    }
  }

  async deleteCustomer(req, res, next) {
    try {
      const id = req.user.id;
      const {refreshToken} = req.cookies;
      const deleteCustomer = await customerService.deleteCustomer(id, refreshToken)
      return res.status(200).json(deleteCustomer);
    } catch (e) {
      next(e);
    }
  }

  async getPersonalInfo(req, res, next) {
    try {
      const id = req.user.id;
      const customer = await customerService.getCustomerPersonalInfo(id);
      return res.json(customer);
    } catch (e) {
      next(e);
    }
  }
  async createOrderReceiver(req, res, next){
    try {
      const data = req.body;
      const customerData = await customerService.createOrderReceiver(data);
      return res.status(201).json(customerData);
    } catch (e) {
      next(e);
    }
  }
  async updateOrderReceiver(req, res, next){
    try {
      const data = req.body;
      const customerData = await customerService.updateOrderReceiver(data);
      return res.status(200).json(customerData);
    } catch (e) {
      next(e);
    }
  }
  async deleteOrderReceiver(req, res, next){
    try {
      const id = req.user.id;
      const deleteOrderReceiver = await customerService.deleteOrderReceiver(id)
      return res.status(200).json(deleteOrderReceiver)
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new CustomerController();
