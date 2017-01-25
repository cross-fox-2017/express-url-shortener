var express = require('express');
var router = express.Router();
let models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index');
});

router.post('/urls',function (req,res){
  models.Links.create({link: req.body.url, createdAt: new Date()}).then(function (data) {
    res.redirect(`/table/${req.body.url}`)
  })
});

router.get('/table/:short_url', function(req, res, next) {
  models.Links.findAll({raw:true}).then(function (find) {
    res.render("pages/table", {data: find, url: req.params.short_url})
  })
});

let i = 1
router.get('/:short_url', function(req, res, next) {
  i++
  models.Links.find({where:{short_url: req.params.short_url}}).then(function (find) {
    find.update({
      count: i
    }).then(function(){
      res.redirect(`http://${find.link}`)
    })
  })
});

module.exports = router;
