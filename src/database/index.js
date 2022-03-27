const knexfile = require('../../knexfile');
// eslint-disable-next-line import/order
const knex = require('knex')(knexfile);

knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

module.exports = knex;
