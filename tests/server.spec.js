const { createApp } = require('../src/app');
const { start } = require('../src/server');

jest.mock('../src/app', () => ({
  createApp: jest.fn(() => ({
    listen: jest.fn(),
    log: {
      error: jest.fn(),
    },
  })),
}));

jest.mock('../src/utils/mongo');

describe('#server', () => {
  describe('start()', () => {
    it('should test the happy path', async () => {
      const fakeConfig = {
        app: {},
      };
      await start(fakeConfig);
      expect(createApp).toHaveBeenCalled();
    });
  });
});
