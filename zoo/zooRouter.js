const knex = require('knex');
const router = require('express').Router();

const config = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/lambda.sqlite3'
    },
    debug: true
  }

  const db = knex(config);

  router.get('/', (req, res) => {
      db('zoos').then(records => res.status(201).json(records))
      .catch(err => res.status(500).json({ error: "Cannot find records."}))
  });

  router.get('/:id', (req, res) => {
        const { id } = req.params;
        db('roles').where({ id })
        .then(records => res.json(records))
        .catch(err => res.status(500).json(err))
  });

  

  module.exports = router;

