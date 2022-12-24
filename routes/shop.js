var express = require('express');
var router = express.Router();
var shop_con = require('../controllers/shop')
/* GET home page. */


router.get('/', shop_con.shop);
router.get('/menu', shop_con.menu);
router.get('/:id', shop_con.show);

module.exports = router;