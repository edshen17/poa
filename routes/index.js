'use strict'
const express = require('express');
const router = express.Router();
module.exports = router;

// GET /
router.get('/', function(req, res, next) {
  return res.render('index', {
    title: 'Home'
  });
});

// GET About
router.get('/about-us', function(req, res, next) {
  res.render('about-us', {
    title: 'About Us'
  });
});
