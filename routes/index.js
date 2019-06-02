'use strict'
const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/', function(req, res, next) {
  return res.render('index', {
    title: 'Home'
  });
});
