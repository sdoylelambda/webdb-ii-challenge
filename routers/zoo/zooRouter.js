const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({up:'its up'})
});

module.exports = router