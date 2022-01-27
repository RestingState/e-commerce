const createServer = require('../utils/server');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const createCustomer = require('../utils/customer');
const customerData = require('../testsData/customer');

const app = createServer();
const request = require('supertest')(app);

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
          .send(customerData.customerCorrect);

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
          .send(customerData.customerLoginAbsence);

        expect(statusCode).toBe(400);
        expect(body.errors.login.message).toBe('Path `login` is required.');
      });
    });

    describe('given the absence of password', () => {
      it('should return a 400 status and json with message', async () => {
        const { body, statusCode } = await request
          .post(`/api/customer/registration`)
          .send(customerData.customerPasswordAbsence);

        expect(statusCode).toBe(400);
        expect(body.errors.password.message).toBe(
          'Path `password` is required.'
        );
      });
    });

    describe('given the absence of name', () => {
      it('should return a 400 status and json with message', async () => {
        const { body, statusCode } = await request
          .post(`/api/customer/registration`)
          .send(customerData.customerNameAbsence);

        expect(statusCode).toBe(400);
        expect(body.errors.name.message).toBe('Path `name` is required.');
      });
    });

    describe('given the absence of surname', () => {
      it('should return a 400 status and json with message', async () => {
        const { body, statusCode } = await request
          .post(`/api/customer/registration`)
          .send(customerData.customerSurnameAbsence);

        expect(statusCode).toBe(400);
        expect(body.errors.surname.message).toBe('Path `surname` is required.');
      });
    });

    describe('given the absence of phone', () => {
      it('should return a 400 status and json with message', async () => {
        const { body, statusCode } = await request
          .post(`/api/customer/registration`)
          .send(customerData.customerPhoneAbsence);

        expect(statusCode).toBe(400);
        expect(body.errors.phone.message).toBe('Path `phone` is required.');
      });
    });

    describe('given the absence of email', () => {
      it('should return a 400 status and json with message', async () => {
        const { body, statusCode } = await request
          .post(`/api/customer/registration`)
          .send(customerData.customerEmailAbsence);

        expect(statusCode).toBe(400);
        expect(body.errors.email.message).toBe('Path `email` is required.');
      });
    });

    describe('given the fact that customer with such login already exists', () => {
      it('should return a 409 status and json with message', async () => {
        // await createCustomer(customerData.customerCorrect);
        // const { body, statusCode } = await request
        //   .post(`/api/customer/registration`)
        //   .send(customerData.customerCorrect);
        // expect(statusCode).toBe(409);
        // expect(body.errors.login.properties.type).toBe('unique');
      });
    });
  });
});
