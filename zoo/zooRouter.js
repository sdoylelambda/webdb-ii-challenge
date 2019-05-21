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
        db('zoos').where({ id })
        .then(records => res.json(records))
        .catch(err => res.status(500).json(err))
  });

  router.post('/', (req, res) => {
      const role = req.body;
      db('zoos').insert(role)
      .then(name => res.status(201).json(name))
      .catch(err => res.status(500).json(err))
  });

  router.put('/:id', (req, res) => {
      const { id } = req.params;
      const role = req.body;
      db('zoos').where({ id }).update(role)
      .then(count => res.json({count}))
      .catch(err => res.status(500).json(err))
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const role = req.body;
      db('zoos').where({ id }).del()
      .then(count => res.json({count}))
      .catch(err => res.status(500).json(err))
  });

  module.exports = router;

