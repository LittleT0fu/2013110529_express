const staff = require("../models/staff");
const { validationResult } = require('express-validator')

exports.staff = async (req, res, next) => {
  const data = await staff.find().sort({ _id: -1 });

  res.status(200).json({
    Data: data,
  });
};

exports.insert = async (req, res, next) => {
  try {
    const { name, salary } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("อะไรสักอย่างผิดแหละ")
    error.statusCode = 422  // common validation
    error.validation = errors.array()
    throw error
  }

  let staffData = new staff({
    name: name,
    salary: salary,
  });
  await staffData.save();

  res.status(200).json({
    Message: "เพิ่มข้อมูลเรียบร้อยแล้ว",
  });
  } catch (error) {
    next(error)
  }
};

exports.show = async (req, res, next) => {
  // http://localhost:3000/staff/63942d99c1fef025d419b289

  try {
    const data = await staff.findOne({
      _id: req.params.id,
    });

    if (!data) {
      throw new Error("ไม่พบผู้ใช้งาน");
    } else {
      res.status(200).json({
        Data: data,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "เกิดข้อผิดพลาด " + error.message,
    });
  }
};


exports.destroy = async (req, res, next) => {
    // http://localhost:3000/staff/63942d99c1fef025d419b289
  
    try {
        const { id } = req.params
        const Staff = await staff.deleteOne({
            _id: id,
          });
        if(Staff.deleteCount === 0 ){
            throw new Error("ไม่พบข้อมูลผู้ใช้งาน / ไม่พบข้อมูลผู้ใช้งาน")
        }else{
            res.status(200).json({
                message: "ลบข้อมูลเรียบร้อย",
              });
        }


    } catch (error) {
      res.status(400).json({
        message: "เกิดข้อผิดพลาด " + error.message,
      });
    }
  };


  exports.destroy = async (req, res, next) => {
    // http://localhost:3000/staff/63942d99c1fef025d419b289
  
    try {
        const { id } = req.params
        const Staff = await staff.deleteOne({
            _id: id,
          });
        if(Staff.deleteCount === 0 ){
            throw new Error("ไม่พบข้อมูลผู้ใช้งาน / ไม่พบข้อมูลผู้ใช้งาน")
        }else{
            res.status(200).json({
                message: "ลบข้อมูลเรียบร้อย",
              });
        }


    } catch (error) {
      res.status(400).json({
        message: "เกิดข้อผิดพลาด " + error.message,
      });
    }
  };


  //Update
  exports.update = async (req,res,next)=>
  {
    try {
        const { id } = req.params
        const { name , salary } = req.body
       
        // const Staff = await staff.findById(id)
        // Staff.name = name;
        // Staff.salary = salary
        // await Staff.save()

        // const Staff = await staff.findByIdAndUpdate(id,{
        //     name : name,
        //     salary : salary
        // })

        const Staff = await staff.updateOne({_id : id},{
            name : name,
            salary : salary
        })
        console.log(Staff)

        res.status(200).json({
            message : "อัพเดตข้อมูลเรียบร้อย"
        })

    } catch (error) {
        res.status(400).json({
            message: "เกิดข้อผิดพลาด " + error.message,
          });
    }

  }

  
