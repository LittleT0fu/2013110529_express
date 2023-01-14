const { schema } = require('../models/user')
const User = require('../models/user')


exports.index = (req, res, next)=> {
    // res.send('Hello with a resource');
    res.status(200).json({
      fullname : 'Kraiwit Chinchanathavorn'
    })
}

exports.bio = (req, res, next)=> {
    res.status(200).json({
      fullname : 'Kraiwit Chinchanathavorn',
      nickname : 'Got',
      hobby : 'sleep',
      gitusername : 'LittleT0fu'
  
    })
  }

  exports.register = async (req, res, next)=> {
    const {name , email , password} = req.body

    let user = new User();
    user.name = name
    user.email = email
    user.password = await user.encryptPassword(password)

    await user.save()

    res.status(201).json({
      messege : "ลงทะเบียนเรียบร้อย"
    })
  }