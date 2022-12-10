var express = require('express');
var router = express.Router();
var test_router = require('../controllers/test_controller')
/* GET home page. */
router.get('/', test_router.test );


module.exports = router;