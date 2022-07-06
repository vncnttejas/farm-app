const { allowedAnimalList } = require('../config');
const { addAnimal } = require('../modules/animals');

async function handler(req) {
  return addAnimal(req, req.body);
}

module.exports = {
  method: 'POST',
  url: '/animal',
  schema: {
    body: {
      type: 'object',
      required: ['name', 'type'],
      properties: {
        name: {
          type: 'string',
          minLength: 1,
        },
        description: {
          type: 'string',
        },
        weight: {
          type: 'number',
          default: 1,
        },
        height: {
          type: 'number',
          default: 1,
        },
        type: {
          type: 'string',
          enum: allowedAnimalList,
        },
      },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
          },
        },
      },
    },
  },
  handler,
};
