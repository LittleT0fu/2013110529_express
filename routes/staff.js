var express = require('express');
var router = express.Router();
var staff_Route = require('../controllers/staffController')
/* GET home page. */

router.get('/', staff_Route.staff );

router.post('/', staff_Route.insert)


module.exports = router;