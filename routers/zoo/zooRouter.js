const express = require('express');
const router = express.Router();

const db = require('../../data/db-config');

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

router.get('/', (req, res) => {
    db('zoos')
        .then(zoo => {
            res.status(200).json(zoo);
        })
        .catch(err => res.status(400).json({ err:err }))
});

router.get('/:id', (req, res) => {
    const { id } = req.params.id
    db('zoos')
        .where({ id })
        .first()
        .then(fruit => {
            res.status(200).json(fruit)
        })
        .catch(err => {
            res.status(500).json({ err: err })
        })
});

router.delete('/:id', (req, res) => {
    const { id } = req.params.id
    db('zoos')
        .where({ id })
        .delete()
        .then(del => {
            res.status(200).json(del)
        })
        .catch(err => {
            res.status(500).json({ err: err })
        })
});

router.put('/:id', (req, res) => {
    const { id } = req.params.id
    const newZoo = req.body
    db('zoos')
        
        .then(ids => {
            db('zoos')
                .where({ id: ids[0] })
                .insert(newZoo)
                .then(newZooEntry => {
                    res.status(200).json(newZooEntry)
                })
        })
        .catch(err => res.status(500).json({ err:err }))
});



module.exports = router