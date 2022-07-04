const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
  res.render('index',{pageTitle:"home"})
  });
router.get('/contact.html', (req, res, next) => {
  res.render('contact',{pageTitle:"contact"})
  });

router.get('/index.html', (req, res, next) => {
  res.render('index',{pageTitle:"home"})
  });
router.get('/about.html', (req, res, next) => {
    res.render('about',{pageTitle:"about"})
  });
router.get('/service.html', (req, res, next) => {
  res.render('service',{pageTitle:"services"})
  });


module.exports = router;