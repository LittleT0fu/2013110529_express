var express = require('express');
var router = express.Router();
var companyRouter = require('../controllers/companyController')
/* GET home page. */
router.get('/', companyRouter.index );


module.exports = router;