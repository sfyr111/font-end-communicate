var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '跨域通信' });
});

router.get('/a', function(req, res, next) {
  res.render('a');
});

router.get('/b', function(req, res, next) {
  res.render('b');
});

router.get('/c', function(req, res, next) {
  res.render('c');
});

router.get('/d', function(req, res, next) {
  res.render('d');
});

// 跨域限制
router.get('/someurl', function(req, res, next) {
  res.send('somedata')
})

// JSONP
router.get('/jsonp', function(req, res, next) {
  let { callback: cb } = req.query
  const data = {
    type: 'jsonp',
    data: 'data'
  }
  cb = cb.replace(/\(/g, '');
  cb = cb.replace(/\)/g, '');
  res.send(cb + '(' + JSON.stringify(data) + ')')
})

// CORS
router.options('/cors', function(req, res, next) {
  // res.header('Access-Control-Allow-Origin', '*')
  res.send('options ok')
})
router.post('/cors', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.send('cors ok')
})


module.exports = router;
