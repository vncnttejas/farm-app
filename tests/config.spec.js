const config = require('../src/config');

describe('#config', () => {
  it('should test for essential config', () => {
    expect(config).toHaveProperty('port');
    expect(config).toHaveProperty('app');
    expect(config).toHaveProperty('mongo');
  });
});
