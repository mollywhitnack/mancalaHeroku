const mongoose = require('mongoose')
let Schema = mongoose.Schema


const gameSchema = Schema({
  currPlayer: {type: Boolean, default: false},
  gameboard : {type: [], default: [0,4,4,4,4,4,4,0,4,4,4,4,4,4] }, //[new Array(14).fill(0)] }
  player0: {type: String, default: 'player 1'},
  player1: {type: String, defualt: 'player 2'},
});

let Game  = mongoose.model('Game', gameSchema);
module.exports = Game;
