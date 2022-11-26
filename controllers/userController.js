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