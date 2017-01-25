var express = require('express');
var router = express.Router();
var model = require('../models')
var url = model.Url

/* GET home page. */
router.get('/', function (request, response) {
  url.findAll().then(function (url) {
      response.render('index', {title: ".:: URL SHORTENER ::.", url_short:url} )
  })
})

module.exports = router
