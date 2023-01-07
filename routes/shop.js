var express = require('express');
var router = express.Router();
var shop_con = require('../controllers/shop')
/* GET home page. */


router.get('/', shop_con.shop);
router.get('/menu', shop_con.menu);
router.get('/:id', shop_con.show);
router.post('/',shop_con.insert);

module.exports = router;