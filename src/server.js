const config = require('./config');
const { createApp } = require('./app');
const { initMongo } = require('./utils/mongo');
require('./log-process-exit');

async function start(serverConfig) {
  const app = await createApp(serverConfig.app);
  await initMongo(serverConfig.mongo);
  app.listen({ port: serverConfig.port, host: serverConfig.host });
}

start(config);

module.exports = {
  start,
};
