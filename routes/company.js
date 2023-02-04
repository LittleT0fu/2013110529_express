var express = require('express');
var router = express.Router();
var companyRouter = require('../controllers/companyController')
const passportJWT = require('../middleware/passportJWT')
const checkAdmin = require('../middleware/checkAdmin')
/* GET home page. */


router.get('/',[passportJWT.isLogin, checkAdmin.isAdmin] ,companyRouter.company );
router.post('/',companyRouter.insert);
router.get('/:id' , companyRouter.show)
router.delete('/:id' , companyRouter.destroy)
router.put('/:id' , companyRouter.update)

module.exports = router;