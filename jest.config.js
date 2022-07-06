module.exports = {
  testEnvironment: 'node',
  verbose: true,
  testRegex: ['/*.spec.js$'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**', '!src/log-process-exit.js'],
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
  moduleDirectories: ['node_modules'],
};
