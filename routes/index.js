var express = require('express');
var router = express.Router();
const models = require('../models');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Url.findAll({raw: true}).then(function (data) {
    res.render('index',{title: 'Shortener URL ', link: data, config: config.base_url})
  })
});

router.post('/urls', function(req, res) {
  models.Url.create({
    url_link: req.body.url_link
  }).then(function (data) {
    if(data)
    res.redirect('/')
  })
});

router.get('/:short_url', function(req, res, next) {
  models.Url.findOne({
    where: {short_url: req.params.short_url}
  }).then(function(data) {
      data.update({
         click_count : data.click_count + 1
      })
    res.redirect(`${data.url_link}`)
  })
});


module.exports = router;
