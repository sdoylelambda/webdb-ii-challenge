const knex = require('knex');
const router = require('express').Router();

const config = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/rolex.db3'
    },
    debug: true
  }

  const db = knex(config);

  router.get('/', (req, res) => {
      .this()
      .catch()
  })

  module.exports = router;

