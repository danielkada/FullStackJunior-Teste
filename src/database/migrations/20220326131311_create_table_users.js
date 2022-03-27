exports.up = (knex) => (
  knex.schema.createTable('users', (table) => {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
  }));

exports.down = (knex) => (
  knex.schema.dropTable('users')
);
