'use strict';

module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'GET',
    url: '/healthcheck',
    schema: {
      tags: ['Healthcheck'],
      description: 'Healthcheck to check if the server is running',
      response: {
        200: {
          type: 'object',
          properties: {
            status: { type: 'string' },
            timestamp: { type: 'string' },
          },
        },
      },
    },
    handler: async (request, reply) => {
      return { status: 'ok', timestamp: new Date().toISOString() };
    },
  });
};
