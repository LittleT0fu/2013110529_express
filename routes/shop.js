var express = require('express');
var router = express.Router();
var shop_con = require('../controllers/shop')
const { body } =require('express-validator')
/* GET home page. */


router.get('/', shop_con.shop);
router.get('/menu', shop_con.menu);
router.get('/:id', shop_con.show);
router.post('/',[
    body("name").not().isEmpty().withMessage("กรุณาป้อนชื่อด้วย"),
    body("lat").not().isEmpty().withMessage("กรุณาป้อน lat"),
    body("lgn").not().isEmpty().withMessage("กรุณาป้อน lgn"),
    body("photo").not().isBase64().withMessage("รูปภาพไม่ใช่ base 64").not().isEmpty().withMessage("กรุณาป้อน photo")
],shop_con.insert);

module.exports = router;