let express = require('express');
let router = express.Router();
let models = require('../models')

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

router.post('/url', function(req, res, next) {
  models.Urls.create({url: req.body.url}).then(function (data) {
    res.redirect('/');
  })
});

let i = 0
router.get('/short/:url', (req, res, next) => {
  models.Urls.findOne({where: {url: req.params.url }}).then(function (find) {
    find.update({
      clicked: i++
    })
    res.redirect(`http://${req.params.url}`)
  })
})

router.get('/add', function (req, res, next) {
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
