module.exports.isAdmin = (req , res ,next) => {
    console.log(req.user)
    const { role } = req.user
    if(role === 'Admin'){
        next()
    }else{
        return res.status(403).json({
            error:{
                message: 'คุณไม่มีสิทธิ์ใช้งานส่วยนี้เฉพาะผู้ดูแลระบบเท่านั้น'
            }
        })
    }

}