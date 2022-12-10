const Company = require('../models/company')

exports.company = async (req,res,next) => {

    const company = await Company.findOne()
    console.log(company)

    res.status(200).json({
        data: company
    })
}

