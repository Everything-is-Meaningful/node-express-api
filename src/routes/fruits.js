const express = require('express');
const fruits = require('../data/fruits.json');

const router = express.Router();

router.get('/:id', async (req, res, next) => {
  return res.json(fruits.find(({ id }) => id === Number(req.params.id)));
})

module.exports = router;
