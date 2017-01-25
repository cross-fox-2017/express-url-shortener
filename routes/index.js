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


router.get('/:short_url', function(req, res, next) {
  models.Links.find({where:{short_url: req.params.short_url}}).then(function (find) {
    let x = find.count + 1
    find.update({
      count: x
    }).then(function(){
      res.redirect(`http://${find.link}`)
    })
  })
});

module.exports = router;
