var express = require('express');
var router = express.Router();
var model = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {

  model.Data.findAll().then(function(result){

    res.render('main',{ data : result });

  })

});

router.post('/urls', function(req, res, next) {
  let link = req.body.link
  model.Data.create({link : link}).then(function(result){
      res.redirect('/')
  })
});

router.get('/:short_url', function(req, res, next) {

  let param = req.params.short_url

  model.Data.findOne({
    where: {
      shorten_link : param
    }
  }).then(function(project) {
        if(project)

        project.updateAttributes({
            count : project.count + 1
        })
      res.redirect("https://"+project.link);
})

});



module.exports = router;
