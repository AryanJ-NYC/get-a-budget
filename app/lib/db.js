import Sequelize from 'sequelize';

const db = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',

  // the storage engine for sqlite
  // - default ':memory:'
  storage: './database.sqlite'
})

export default db;
