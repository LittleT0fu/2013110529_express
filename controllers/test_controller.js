const testData = require("../models/test_modle")


exports.test = async (req, res, next)=> {
    
    const data = await testData.findOne();

    res.status(200).json({
      Data : data
    })
}