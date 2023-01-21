var express = require('express');
var router = express.Router();
var staff_Route = require('../controllers/staffController')
const { body } = require('express-validator')
/* GET home page. */

router.get('/', staff_Route.staff );
// http://localhost:3000/staff/63942d99c1fef025d419b289

router.get('/:id', staff_Route.show );
router.delete('/:id', staff_Route.destroy );
router.put('/:id', staff_Route.update );
router.post('/',[
    body('name').not().isEmpty().withMessage('กรุณากรอกชื่อ'),
    body('salary').notEmpty().withMessage('กรุณากรอกเงินเดือน')
] , staff_Route.insert)


module.exports = router;