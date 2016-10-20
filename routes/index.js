var express = require('express');
var parser = require('../utilities/parser.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fantastic Mobiusor' });
});

router.get('/strategy/:name', function(req, res, next) {
  var name = req.params.name;
  var data = parser.getJsonData();
  res.render('strategy', { title: name + 'Game Strategy', content: data });
});

router.get('/file/:name', function (req, res, next) {

  var options = {
    root: './public/files/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });

});

module.exports = router;
