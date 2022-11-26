exports.index = (req , res ,next)=>{
    res.status(200).json({
        "data" : [{
            "id": 1,
            "name": "microsoft thailand",
            "address" : {
                "province" : "Bangkok",
                "postcode" : "10330"
            }
        },
        {
            "id": 2,
            "name": "GOOGLE thailand",
            "address" : {
                "province" : "Bangkok",
                "postcode" : "10330"
            }
        }]
      })
}