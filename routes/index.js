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

// GET about-us
router.get('/about-us', function(req, res, next) {
  res.render('about-us', {
    title: 'About Us'
  });
});

// GET infant-program
router.get('/infant-program', function(req, res, next) {
  res.render('infant-program', {
    title: 'Infant Program'
  });
});

// GET infant-program
router.get('/admissions', function(req, res, next) {
  res.render('admissions', {
    title: 'Infant Program'
  });
});
