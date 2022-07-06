require('dotenv-safe').config({
  allowEmptyValues: true,
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.APP_PORT,
  host: process.env.NODE_HOST,
  app: {
    logger: true,
  },
  mongo: {
    uri: process.env.MONGO_URI,
  },
  allowedAnimalList: ['pig', 'cow', 'chicken', 'dog', 'cat', 'horse'],
};
