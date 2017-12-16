'use strict';
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    users: [
      {_id: 1, email: 'test.a@test.com'},
      {_id: 2, email: 'test.b@test.com'},
      {_id: 3, email: 'test.c@test.com'},
      {_id: 4, email: 'test.d@test.com'}
    ]
  })
});

module.exports = router;
