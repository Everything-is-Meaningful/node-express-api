const express = require('express');
const fruits = require('../data/fruits.json');

const router = express.Router();

router.get('/', async (req, res, next) => {
  return res.json(fruits);
})

module.exports = router;
