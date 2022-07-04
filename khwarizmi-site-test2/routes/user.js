const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,'..','views','index.html'));
  });
router.get('/contact.html', (req, res, next) => {
    res.sendFile(path.join(__dirname,'..','views','contact.html'));
  });

router.get('/index.html', (req, res, next) => {
    res.sendFile(path.join(__dirname,'..','views','index.html'));
  });
router.get('/about.html', (req, res, next) => {
    res.sendFile(path.join(__dirname,'..','views','about.html'));
  });
router.get('/service.html', (req, res, next) => {
    res.sendFile(path.join(__dirname,'..','views','service.html'));
  });


module.exports = router;