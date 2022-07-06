const { createApp } = require('../src/app');

jest.mock('fastify', () => jest.fn(() => ({
  register: jest.fn(),
})));
jest.mock('@fastify/autoload');
jest.mock('@fastify/swagger');

describe('#app', () => {
  it('createApp()', async () => {
    const fakeConfig = {};
    const app = await createApp(fakeConfig);
    expect(app).toHaveProperty('register');
  });
});
