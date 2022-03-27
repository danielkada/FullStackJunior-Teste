module.exports = {
  client: 'pg',
  connection: {
    database: 'pg_contele',
    user: 'contele',
    password: 'fullstack',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/src/database/migrations`,
  },

};
