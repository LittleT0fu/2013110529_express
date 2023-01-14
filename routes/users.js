var express = require('express');
var router = express.Router();
const userContoller = require('../controllers/userController')

/* GET users listing. */
router.get('/', userContoller.index);

router.post('/', userContoller.register)

router.get('/bio' , userContoller.bio);



module.exports = router;
