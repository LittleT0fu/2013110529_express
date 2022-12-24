var express = require('express');
var router = express.Router();
var shop_con = require('../controllers/shop')
/* GET home page. */


router.get('/', shop_con.shop);

module.exports = router;