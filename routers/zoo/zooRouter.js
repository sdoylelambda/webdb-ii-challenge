const express = require('express');
const router = express.Router();

const db = require('..data/db-config.js');

router.get('/', (req, res) => {
    res.json({up:'its up'})
});

module.exports = router