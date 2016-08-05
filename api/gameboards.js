const express = require('express')
// { Router } from 'express'
const router = express.Router();

const Game = require('../db/Game');

router.get('/', (req, res) => {
  Game.find({}, (err, games) => {
    return res.status(err ? 400 : 200).send(err || games);
  })
})

router.get('/:id', (req, res) => {
  Game.findOne({'_id' : req.params.id}, (err, game) => {
    return res.status(err ? 400 : 200).send(err || game);
  })
})

//set players

router.post('/', (req, res) => {
  console.log("req.body in post: ", req.body);
  Game.create({player0: req.body.player0, player1: req.body.player1}, (err, game) => {
    return res.status(err ? 400 : 200).send(err || game);
  })
})

router.put('/', (req, res) => {
  console.log("req body:", req.body);
  console.log('id:', req.body._id);
  Game.findByIdAndUpdate(req.body._id, req.body, 'new', (err, game) => {
     console.log('game: ', game);
     return res.status(err ? 400 : 200).send(err || game)
  });
})

router.delete('/:id', (req, res) => {
  Game.findByIdAndRemove(req.params.id, (err, removed) => {
    if (err) return res.status(400).send(err);
    Game.find({}, (err, games) => {
      return res.status(err ? 400 : 200).send(err || games)
    })
  })
})

module.exports = router;
