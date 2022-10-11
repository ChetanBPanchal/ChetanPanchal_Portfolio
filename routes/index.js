var express = require('express');
var router = express.Router();

const path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'Contact Us'});
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me'});
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

module.exports = router;
