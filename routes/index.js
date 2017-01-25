var express = require('express');
var router = express.Router();
var models = require('../models');
var url = models.Url

/* GET home page. */
router.get('/', function(req, res, next) {
  url.findAll({order: [['id', 'ASC']]}).then(function(data){
    res.render('index', { title: 'Express URL Shortener', data: data });
  })
});

router.post('/urls', function(req, res, next) {
  let link = req.body.link
  url.create({url: link}).then(function() {
    res.redirect('/')
  })
});

router.get('/:short_url', function(req, res, next) {
  let short = req.params.short_url
  url.find({where: {shorturl : short}}).then(function (data){
    let plus = data.clickcount + 1
    data.update({clickcount: plus}).then(function() {
      res.redirect(data.url)
    })
  })
});

module.exports = router;
