const Company = require("../models/company");

exports.company = async (req, res, next) => {
  const company = await Company.find();
  console.log(company);

  res.status(200).json({
    data: company,
  });
};

exports.insert = async (req, res, next) => {
  try {
    const {
      name,
      address: { province },
    } = req.body;
    let company_data = new Company({
      name: name,
      address: {
        province: province,
      },
    });
    await company_data.save()
    res.status(400).json({
      message: "Insert Succeed",
    });
  } catch (error) {
    res.status(400).json({
      message: "Insert data fail",
    });
  }
};

exports.show = async (req, res, next) => {
  try {
    const Company_data = await Company.findOne({
      _id: req.params.id,
    });
    if (!Company_data) {
      throw new Error("No data found");
    } else {
      res.status(200).json({
        Data: Company_data,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "No data found",
    });
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const company = await Company.deleteOne({
      _id: id,
    });
    if (company.deleteCount === 0) {
      throw new Error("ไม่พบข้อมูลผู้ใช้งาน / ไม่พบข้อมูลผู้ใช้งาน");
    } else {
      res.status(200).json({
        message: "ลบข้อมูลเรียบร้อย",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "No data found",
    });
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
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

    res;
  } catch (error) {
    res.status(400).json({
        message: "No data found",
      });
  }
};
