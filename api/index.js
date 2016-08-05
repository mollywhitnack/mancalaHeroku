const express = require('express')
// { Router } from 'express'
const router = express.Router();

const gameboards = require('./gameboards')

router.use('/gameboards', gameboards);

module.exports = router;
