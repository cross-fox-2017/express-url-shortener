var express = require('express');
var router = express.Router();
const models = require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {
  models.Url.findAll().then (function(asal){
    res.render('halamanurl', {isidata:asal });
  })
});

router.post('/add', function(req, res, next) {
  models.Url.create({url: req.body.masukanurl}).then(function(bebas){
  res.redirect('/')
 })
});

router.get('/newtab/:bebasaja', function(req, res, next) {
  models.Url.findOne({
    where: {
      shorturls: req.params.bebasaja
    }
  }).then(function(tes){
    tes.click_count+=1
    tes.update({click_count: tes.click_count})
    res.redirect(tes.url)
  })
});

module.exports = router;
