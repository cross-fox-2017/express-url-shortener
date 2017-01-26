var express = require('express');
var router = express.Router();
var models = require('../models')
var env = process.env.MODE_ENV || 'development';
var config =  require(__dirname + '/../config/config.json')[env];
var url = models.Url;

/* GET home page. */
router.get('/', function(req, res, next) {
  url.findAll().then(function(url){
    res.render('index', { title: 'URL Shortener', data_url: url, urlDinamis: config.base_url });
    console.log(config);
  })
});

router.post('/short_url', function(req, res, next) {
  url.create({
    url:req.body.url,
    short_url:req.body.short_url
  }).then(function(data_url){
    res.redirect('/')
  })
});

router.get('/:short_url', function(req, res, next) {
  let setting_url = `${req.params.short_url}`
  url.findOne(
    {
      where: {
      short_url:setting_url
    }
  }).then(function(addUrl){
    if(addUrl === null){
      console.log("nothing data");
    }else {
      res.redirect("https://"+ addUrl.url)
      addUrl.click_count++
      addUrl.update({click_count:addUrl.click_count, updatedAt:new Date()})
    }
  })
});

// router.get('/:shorturl',function(req,res){
//   url.findOne({
//   where: {
//     short_url: req.params.short_url
//   }
// }).then(function(use){
//   console.log(models.Url);
//     use.click_count++;
//     use.update({clickcount:use.click_count, updatedAt: new Date()})
//     res.redirect(use.url)
//     })
// });

module.exports = router;
