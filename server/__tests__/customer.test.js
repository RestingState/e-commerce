const createServer = require('../utils/server');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const createCustomer = require('../utils/customer');

const app = createServer();
const request = require('supertest')(app);

const customerCorrect = {
  login: 'strawberry',
  password: 'qwerty123',
  name: 'Vladik',
  surname: 'Lavandos',
  phone: '+380992997523',
  email: 'lavandos@gmail.com'
};

const customerLoginAbsence = {
  password: 'qwerty123',
  name: 'Vladik',
  surname: 'Lavandos',
  phone: '+380992997523',
  email: 'lavandos@gmail.com'
};

describe('customer', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  describe('POST /customer/registration', () => {
    describe('given the input data is correct', () => {
      it('should return a 201 status and json with tokens and customerDto', async () => {
        const { body, statusCode } = await request
          .post(`/api/customer/registration`)
          .send(customerCorrect);

        expect(statusCode).toBe(201);
        expect(body.accessToken).toBeDefined();
        expect(body.refreshToken).toBeDefined();
        expect(body.customer).toBeDefined();
      });
    });

    describe('given the absence of login', () => {
      it('should return a 400 status and json with message', async () => {
        const { body, statusCode } = await request
          .post(`/api/customer/registration`)
          .send(customerLoginAbsence);

        expect(statusCode).toBe(400);
        expect(body.message).toBe('Validation error');
      });
    });
  });
});
