const fastify = require('fastify');
const AutoLoad = require('@fastify/autoload');
const fastifySwagger = require('@fastify/swagger');
const { join } = require('path');

async function createApp(appConfig) {
  const app = fastify(appConfig);

  // register swagger
  app.register(fastifySwagger, {
    exposeRoute: true,
    routePrefix: '/',
    swagger: {
      info: { title: 'farm app' },
    },
  });

  // register autoload for routes
  app.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
  });

  return app;
}

module.exports = {
  createApp,
};
