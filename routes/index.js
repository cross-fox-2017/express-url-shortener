const express = require('express');
let router = express.Router();
const models = require('../models');
var url = models.Url;
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

router.get('/', function(req, res) {
  url.findAll().then(function(result){
    res.render('index', {result: result, title: "URL List", config:config.base_url})
  })
});

router.post('/create', function(req, res) {
  url.create({url: req.body.url, shorturl: req.body.shorturl, clickcount: req.body.clickcount, createdAt: new Date(), updatedAt: new Date()}).then(function(result){
    res.redirect('/')
  })
});


router.get('/:shorturl',function(req,res){
  url.findOne({
  where: {
    shorturl: req.params.shorturl
  }
}).then(function(use){
  console.log(use);
    use.clickcount++;
    use.update({clickcount:use.clickcount, updatedAt: new Date()})
    res.redirect(use.url)
    })
});

module.exports = router;
