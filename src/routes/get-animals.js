const { getAnimals } = require('../modules/animals');

module.exports = {
  method: 'GET',
  url: '/animals',
  schema: {
    response: {
      200: {
        type: 'array',
        nullable: true,
        items: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            weight: {
              type: 'number',
            },
            height: {
              type: 'number',
            },
            type: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  handler: getAnimals,
};
