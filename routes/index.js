let express = require('express');
let router = express.Router();
let models = require('../models')
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Urls.findAll({raw:true}).then(function (find) {
    res.render('pages/', {title: 'Shortened URL', url_data: find});
  })
});

// let tam = req.body.url.split(".")
// let shortened = ""
// for (let i = 0; i < tam.length; i++) {
//   if (tam[i].toLowerCase() !== "www" && tam[i].toLowerCase() !== "com") {
//     shortened = tam[i]
//   }
// }

router.post('/create/url', function(req, res, next) {
  models.Urls.create({url: req.body.url}).then(function (data) {
    res.redirect('/');
  })
});


router.get('/:url', (req, res, next) => {
  let url = `${config.base_url}${req.params.url}`
  models.Urls.findOne({where: {shortened: url }}).then(function (find) {
    find.update({
      clicked: find.clicked+1
    }).then(function (data) {
      res.writeHead(301, {
        Location: "http" + (req.socket.encrypted ? "s" : "") + "://" + 
        data.url
      });
      res.end();
    })
  })
})

router.get('/create/add', function (req, res, next) {
  res.render('pages/add');
})

router.get('/delete/:url', function (req, res, next){
  models.Urls.destroy({
    where: {
      url: req.params.url
    }
  })
  res.redirect('/')
})

module.exports = router;
