var express = require('express');
var router = express.Router();
var models = require('../models')
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];


/* GET home page. */
router.get('/', function(req, res, next) {
  models.Url.findAll({raw: true}).then(function(users){
    res.render('index', { result : users, config : config.base_url});
  })
});

router.post('/add', function(req, res, next) {
  models.Url.create({url_name: req.body.urlname,click_count: 0}).then(function (data) {
    res.redirect('/')
  })
});

router.get('/edit/:id', function(req, res, next) {
  models.Url.findById(req.params.id).then(function (data) {
    res.render("edit",{hasil: data})
  })
});

router.post('/update', function(req, res, next) {
  models.Url.findById(req.body.id).then(function (data) {
    data.update({
      url_name: req.body.urlname,
      url_short: req.body.urlshort,
      click_count: req.body.clickcount
    }).then(function(){
      res.redirect('/')
    })
  })
});

router.get('/delete/:id', function(req, res, next) {
  models.Url.destroy({
    where: {
      id: req.params.id
    }
  })
  res.redirect('/')
});

router.get('/val/:short_url', function(req, res, next) {
  models.Url.findOne({
    where:{
      url_short: req.params.short_url
    }
  }).then(function (data) {
    data.update({click_count : data.click_count + 1})
    res.redirect(`${data.url_name}`)
  })
});
module.exports = router;
