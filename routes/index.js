var express = require('express');
var router = express.Router();
let models = require('../models')
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];

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
  let url = `${config.base_url}${req.params.short_url}`
  models.Links.find({where:{short_url: url}}).then(function (find) {
    let x = find.count + 1
    find.update({
      count: x
    }).then(function(data){
      res.writeHead(301, {
        Location: "http" + (req.socket.encrypted ? "s" : "") + "://" + data.link
      })
      res.end();
    })
  })
});

module.exports = router;
