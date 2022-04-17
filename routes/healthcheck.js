'use strict'

module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'GET',
    url: '/healthcheck',
    handler: async (request, reply) => {
      return { status: 'ok' };
    }
  })
}
