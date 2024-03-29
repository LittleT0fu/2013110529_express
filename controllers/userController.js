const { schema } = require("../models/user");
const User = require("../models/user");
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
const config = require('../config/index')

exports.index = (req, res, next) => {
  // res.send('Hello with a resource');
  res.status(200).json({
    fullname: "Kraiwit Chinchanathavorn",
  });
};

exports.bio = (req, res, next) => {
  res.status(200).json({
    fullname: "Kraiwit Chinchanathavorn",
    nickname: "Got",
    hobby: "sleep",
    gitusername: "LittleT0fu",
  });
};

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("อะไรสักอย่างผิดแหละ")
      error.statusCode = 422  // common validation
      error.validation = errors.array()
      throw error
    }

    const existemail = await User.findOne({ email: email });
    if (existemail) {
      const error = new Error("อีเมลล์นี้มีผู้ใช้แล้ว")
      error.statusCode = 400
      throw error
    }
    let user = new User();
    user.name = name;
    user.email = email;
    user.password = await user.encryptPassword(password);

    await user.save();

    res.status(201).json({
      messege: "ลงทะเบียนเรียบร้อย",
    });
  } catch (error) {
    next(error)
  }
};


exports.login = async (req,res,next) => {
  try {
    const { email, password } = req.body;



    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("อะไรสักอย่างผิดแหละ")
      error.statusCode = 422  // common validation
      error.validation = errors.array()
      throw error
    }
    //check user
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error("ไม่มีผู้ใช้นี้")
      error.statusCode = 400
      throw error
    }

    //check password
    const isValid = await user.checkPassword(password)
    if(!isValid){
      const error = new Error("รหัสผ่านไม่ถูกต้อง")
      error.statusCode = 401
      throw error
    }

    //create token
    const token = await jwt.sign({
      id:user._id,
      role:user.role
    },config.SECRET_KEY,{expiresIn: "5 days"})
    const expire_in = jwt.decode(token)

    res.status(201).json({
      access_token:token,
      expire_in: expire_in.exp,
      token_type: 'Bearer'
    });
  } catch (error) {
    next(error)
  }
}

exports.profile = (req, res, next) => {
  // res.send('Hello with a resource');
  const {role , name , email} = req.user
  res.status(200).json({
   role: role,
   name : name ,
   email : email
  });
};