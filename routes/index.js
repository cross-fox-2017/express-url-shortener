var express = require('express');
var router = express.Router();
var models = require('../models');
var url = models.Url

/* GET home page. */
router.get('/', function(req, res, next) {
  url.findAll().then(function(data){
    res.render('index', { title: 'Express', data: data });
  })
});

router.post('/urls', function(req, res, next) {
  res.redirect('/')
});

router.get('/:short_url', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
