var express = require('express');
var router = express.Router();
var model = require('../models')
var url = model.Url
const faker = require('faker');
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];


/* GET home page. */
router.get('/', function (request, response) {
  url.findAll().then(function (url) {
      response.render('index', {title: ".:: URL SHORTENER ::.", url_short:url, config: config.base_url} )
  })
})

// ADD
router.post('/create', function(req, res) {
  url.create({url: req.body.url, shortener: req.body.shortener, click_count: req.body.click_count, createdAt: new Date(), updatedAt: new Date()}).then(function(result){
    res.redirect('/')
  })
});

router.get('/create/:url', function(req, res) {
  url.findOne({
      where: {
        shortener: req.params.url
      }
    }).then(function(tes){
    tes.click_count++
    tes.update({click_count:tes.click_count, updatedAt:new Date()})
    res.redirect(tes.url)
  })
})


//DELETE
router.get('/delete/:id', function(req, res, next) {
  let id = req.params.id;
  url.destroy({ where: { id: id }  }).then(function(){
    res.redirect('/')
  })
});

module.exports = router
