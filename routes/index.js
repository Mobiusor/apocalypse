var express = require('express');
var parser = require('../utilities/parser.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fantastic Mobiusor' });
});

router.get('/strategy', function(req, res, next) {
  var name = req.query.game;
  var data = parser.getJsonData();
  res.render('strategy', { title: name + 'Game Strategy', content: data });
});

router.get('/file', function (req, res, next) {

  var options = {
    root: './public/files/' + req.query.game + '/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.query.game + '.gba';
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
