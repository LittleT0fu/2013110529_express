const { find, findOne } = require("../models/company");
const Company = require("../models/company");

exports.company = async (req, res, next) => {
  const company = await Company.find();
  console.log(company);

  res.status(200).json({
    data: company,
    user : req.user
  });
};

exports.insert = async (req, res, next) => {
  try {
    const {
      name,
      address: { province },
    } = req.body;
    const existName = await Company.findOne({name : name})
    if(existName){
      const error = new Error("ชื่อ company มีอยู่แล้ว");
      error.statusCode = 400;
      throw error;
    }
    let company_data = new Company({
      name: name,
      address: {
        province: province,
      },
    });
    await company_data.save();

    res.status(400).json({
      message: "Insert Succeed",
    });
  } catch (error) {
    next(error)
  }
};

exports.show = async (req, res, next) => {
  try {
    const Company_data = await Company.findOne({
      _id: req.params.id,
    });
    if (!Company_data) {
      const error = new Error("ไม่พบข้อมูลที่ต้องการแสดง");
      error.statusCode = 400;
      throw error;
    } else {
      res.status(200).json({
        Data: Company_data,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findCompany = await Company.findOne({ _id: id });
    if (!findCompany) {
      const error = new Error("ไม่พบข้อมูลผู้ใช้งานที่ต้องการลบ");
      error.statusCode = 400;
      throw error;
    } else {
      const company = await Company.deleteOne({ _id: id });
      res.status(200).json({
        message: "ลบข้อมูลเรียบร้อย",
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const findCompany = await Company.findOne({ _id: id });
    if (!findCompany) {
      const error = new Error("ไม่พบข้อมูลผู้ใช้งานที่ต้องเปลี่ยนแปลง");
      error.statusCode = 400;
      throw error;
    } else {
      const {
        name,
        address: { province },
      } = req.body;
      const company = await Company.findByIdAndUpdate(id, {
        name: name,
        address: {
          province: province,
        },
      });
      res.status(200).json({
        message: "Update complete",
      });
    }

    res;
  } catch (error) {
    next(error)
  }
};
