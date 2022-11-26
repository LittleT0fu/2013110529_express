var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('Hello with a resource');
  res.status(200).json({
    fullname : 'Kraiwit Chinchanathavorn'
  })
});

router.get('/bio' , function(req, res, next){
  res.status(200).json({
    fullname : 'Kraiwit Chinchanathavorn',
    nickname : 'Got',
    hobby: 'sleep',
    gitusername : 'LittleT0fu'

  })
})



module.exports = router;
