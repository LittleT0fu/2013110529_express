var express = require('express');
var router = express.Router();
var companyRouter = require('../controllers/companyController')
/* GET home page. */


router.get('/', companyRouter.company );
router.post('/',companyRouter.insert);
router.get('/:id' , companyRouter.show)
router.delete('/:id' , companyRouter.destroy)
router.put('/:id' , companyRouter.update)

module.exports = router;