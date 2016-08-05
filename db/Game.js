import mongoose, { Schema } from 'mongoose'

let Game;

let gameSchema = Schema({
  currPlayer: {type: Boolean, default: false},
  gameboard : {type: [], default: [0,4,4,4,4,4,4,0,4,4,4,4,4,4] }, //[new Array(14).fill(0)] }
  player0: {type: String, default: 'player 1'},
  player1: {type: String, defualt: 'player 2'},
});


Game = mongoose.model('Game', gameSchema);

export default Game;
