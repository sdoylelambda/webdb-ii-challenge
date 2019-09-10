const express = require('express');
const router = express.Router();

const db = require('../../data/db-config');

router.get('/', (req, res) => {
    db('zoos')
        .then(zoo => {
            res.status(200).json(zoo);
        })
        .catch(err => res.status(400).json({ err:err }))
});

router.get('/', (req, res) => {
    
});

router.post('/', (req, res) => {
    const newZoo = req.body
    db('zoos')
        .insert(newZoo)
        .then(ids => {
            db('zoos')
                .where({ id: ids[0] })
                .then(newZooEntry => {
                    res.status(200).json(newZooEntry)
                })
        })
        .catch(err => res.status(500).json({ err:err }))
});

router.delete('/', (req, res) => {
    
});

router.put('/', (req, res) => {
    
});



module.exports = router