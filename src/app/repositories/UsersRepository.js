const knex = require('../../database');

class UsersRepository {
  async findAll() {
    const rows = await knex('users');

    return rows;
  }

  async findById(id) {
    const row = await knex('users').where('id', id);

    return row;
  }

  async findByEmail(email) {
    const row = await knex('users').where('email', email);

    return row;
  }

  async create({ email, password }) {
    const row = await knex('users').insert({ email, password });

    return row;
  }

  async update({ id, email, password }) {
    const row = await knex('users').update({ email, password }).where('id', id);

    return row;
  }

  async deleteAll() {
    const row = await knex('users').delete();

    return row;
  }

  async delete(id) {
    const row = await knex('users').delete().where('id', id);

    return row;
  }
}

module.exports = new UsersRepository();

/*
const db = require('../../database');

class UsersRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT * FROM users
    `);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT * FROM users WHERE id = $1
    `, [id]);

    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query(`
      SELECT * FROM users WHERE email = $1
    `, [email]);

    return row;
  }

  async create({ email, password }) {
    const [row] = await db.query(`
      INSERT INTO users(email, password)
      VALUES($1, $2)
      RETURNING *
    `, [email, password]);

    return row;
  }

  async update({ id, email, password }) {
    const [row] = await db.query(`
      UPDATE users
      SET email = $1, password = $2
      WHERE id = $3
    `, [email, password, id]);

    return row;
  }

  async delete(id) {
    const deleteOperation = await db.query(`
      DELETE FROM users
      WHERE id = $1
    `, [id]);

    return deleteOperation;
  }

  async deleteAll() {
    const deleteOperation = await db.query(`
      DELETE FROM users
    `);

    return deleteOperation;
  }
}

module.exports = new UsersRepository();
*/
