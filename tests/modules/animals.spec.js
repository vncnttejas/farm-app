const { getAnimals, addAnimal, emptyAnimalList } = require('../../src/modules/animals');
const { initTestMongo, stopTestMongo } = require('../helpers/mongo-testdb');

const reqMock = {
  log: {
    info: jest.fn(),
  },
};

describe('#animals', () => {
  let mongod;
  beforeAll(async () => {
    mongod = await initTestMongo();
  });

  afterAll(async () => {
    await stopTestMongo(mongod);
  });

  describe('getAnimals()', () => {
    it('should test if getAnimals returns empty if animals is empty', async () => {
      const animals = await getAnimals(reqMock);
      expect(animals).toMatchObject([]);
    });
  });

  describe('addAnimal()', () => {
    it('should return animals on calling getAnimals', async () => {
      await emptyAnimalList(reqMock);
      const cat = { name: 'Tom' };
      await addAnimal(reqMock, cat);
      const animals = await getAnimals(reqMock);
      expect(animals).toHaveLength(1);
      expect(animals[0]).toMatchObject(cat);
    });
  });
});
