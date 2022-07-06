const { connect } = require('mongoose');
const { initMongo } = require('../../src/utils/mongo');

jest.mock('mongoose', () => ({
  connect: jest.fn(),
}));

describe('#mongo', () => {
  describe('initMongo()', () => {
    it('should test initMongo()', () => {
      const mongoConfig = { uri: '' };
      initMongo(mongoConfig);
      expect(connect).toHaveBeenCalledWith(mongoConfig.uri);
    });
  });
});
