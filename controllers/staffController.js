const staff = require("../models/staff");

exports.staff = async (req, res, next) => {
  const data = await staff.find()

  res.status(200).json({
    Data: data,
  });
};

exports.insert = async (req, res, next) => {
  const { name, salary } = req.body;
  let staffData = new staff({
    name: name,
    salary: salary,
  });
  await staffData.save();

  res.status(200).json({
    Message: "เพิ่มข้อมูลเรียบร้อยแล้ว",
  });
};
