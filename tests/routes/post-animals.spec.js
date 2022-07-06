const Fastify = require('fastify');
const { emptyAnimalList } = require('../../src/modules/animals');
const postAnimalRoute = require('../../src/routes/post-animal');
const catData = require('../fixtures/cat-1.json');
const { initTestMongo, stopTestMongo } = require('../helpers/mongo-testdb');

const app = Fastify();
app.route(postAnimalRoute);

const reqMock = {
  log: {
    info: jest.fn(),
  },
};

describe('/post-animal', () => {
  let mongod;

  beforeAll(async () => {
    mongod = await initTestMongo();
    await app.ready();
  });

  afterAll(async () => {
    await stopTestMongo(mongod);
    await app.close();
  });

  it('should throw error if name is not provided', async () => {
    const { name, ...cat } = catData;
    const { statusCode, statusMessage, body } = await app.inject({
      method: 'POST',
      url: '/animal',
      payload: cat,
    });
    const { message } = JSON.parse(body);
    expect(statusCode).toBe(400);
    expect(statusMessage).toBe('Bad Request');
    expect(message).toBe('body must have required property \'name\'');
  });

  it('should test right input', async () => {
    await emptyAnimalList(reqMock);
    const { statusCode, statusMessage, body } = await app.inject({
      method: 'POST',
      url: '/animal',
      payload: catData,
    });
    const response = JSON.parse(body);
    expect(statusCode).toBe(200);
    expect(statusMessage).toBe('OK');
    expect(response).toHaveProperty('_id');
  });
});
