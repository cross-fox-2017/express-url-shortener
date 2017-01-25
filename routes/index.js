var express = require('express');
var router = express.Router();
var db = require('../models')
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(config.base_url)
  db.Url.findAll().then(function(urls){
    res.render('pages/table', { title: 'URLS',data: urls,depan: config.base_url });
  })

});

router.post('/', function(req, res, next) {
  db.Url.create({url:req.body.urlname}).then(function(){
    res.redirect('/')
  })
});

router.get('/:shorten_url',function(req,res){
  db.Url.findOne({where:{shorten_url:req.params.shorten_url}}).then(function(use){
    var a=use.click_count+1
    use.update({click_count:a})
    res.redirect(use.url)
  })
});


module.exports = router;
