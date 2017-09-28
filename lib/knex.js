
'use strict'

const knex = require('knex')

const client = knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: 'mysql',
    database: 'jm_dev',
    charset: 'utf8mb4',
    connectTimeout: 15000,
    stringifyObjects: false,
    multipleStatements: true,
    supportBigNumbers: true,
    connectionLimit: 1
  }
})

module.exports = client
