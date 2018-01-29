var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '跨域通信' });
});

// 跨域限制
router.get('/someurl', function(req, res, next) {
  res.send('somedata')
})

// JSONP
router.get('/jsonp', function(req, res, next) {
  const { callback } = req.query
  const data = {
    type: 'jsonp',
    data: 'data'
  }
  res.send(callback + '(' + JSON.stringify(data) + ')')
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
