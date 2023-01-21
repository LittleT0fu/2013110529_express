var express = require('express');
var router = express.Router();
const userContoller = require('../controllers/userController')
const { body } = require('express-validator');

/* GET users listing. */
router.get('/', userContoller.index);

router.post('/',[
    body('name').not().isEmpty().withMessage("กรุณาป้อนชื่อด้วย"),
    body('email').not().isEmpty().withMessage("กรุณาป้อนอีเมลล์").isEmail().withMessage("รูปแบบอีเมลล์ไม่ถูกต้อง"),
    body('password').not().isEmpty().withMessage("กรณาใส่พาสเวิร์ด").isLength({min :  5}).withMessage("รหัสผ่านต้องมีค่ามากกว่า 5 ตัวอักษรขึ้นไป")
], userContoller.register)

router.get('/bio' , userContoller.bio);

router.post('/login' ,[
    body('email').not().isEmpty().withMessage("กรุณาป้อนอีเมลล์").isEmail().withMessage("รูปแบบอีเมลล์ไม่ถูกต้อง"),
    body('password').not().isEmpty().withMessage("กรณาใส่พาสเวิร์ด")
],userContoller.login)



module.exports = router;
