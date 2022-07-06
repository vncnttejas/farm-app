const Fastify = require('fastify');
const { addAnimal } = require('../../src/modules/animals');
const getAnimalsRoute = require('../../src/routes/get-animals');
const catData = require('../fixtures/cat-1.json');
const { initTestMongo, stopTestMongo } = require('../helpers/mongo-testdb');

const app = Fastify();
app.route(getAnimalsRoute);

const reqMock = {
  log: {
    info: jest.fn(),
  },
};

describe('/get-animals', () => {
  let mongod;

  beforeAll(async () => {
    await app.ready();
    mongod = await initTestMongo();
  });

  afterAll(async () => {
    await stopTestMongo(mongod);
    await app.close();
  });

  it('should test if getAnimals returns empty if animals is empty', async () => {
    const { body, statusCode } = await app.inject({
      method: 'GET',
      url: '/animals',
    });
    const animals = JSON.parse(body);
    expect(statusCode).toBe(200);
    expect(animals).toHaveLength(0);
  });

  it('should test if getAnimals returns empty if animals is empty', async () => {
    await addAnimal(reqMock, catData);
    const { body, statusCode } = await app.inject({
      method: 'GET',
      url: '/animals',
    });
    const animals = JSON.parse(body);
    expect(statusCode).toBe(200);
    expect(animals).toHaveLength(1);
    expect(animals[0]).toHaveProperty('_id');
    expect(animals[0]).toHaveProperty('name');
    expect(animals[0]).toHaveProperty('type');
  });
});
