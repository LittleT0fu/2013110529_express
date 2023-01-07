const Shop = require("../models/shop");
const Menu = require("../models/menu")
const config = require("../config/index")

exports.shop = async (req, res, next) => {
    const shop = await Shop.find().select('name photo location').sort({id:-1});
    console.log(shop);
  

    const shopWithPhotoDomain = shop.map( (shop ,index)=>{
        return{
            id:shop._id,
            name:shop.name,
            photo: config.DOMAIN + config.PORT + '/images/' + shop.photo,
            location: shop.location
        }
    })

    res.status(200).json({
      data: shopWithPhotoDomain,
    });
  };


  exports.menu = async (req, res, next) => {
    const menu = await Menu.find().populate('shop');
    console.log(menu);

    res.status(200).json({
      data: menu,
    });
  };


  exports.show = async (req, res, next) => {
    try {
        const shop = await Shop.findById(req.params.id).populate("menu")
        res.status(200).json({
            data : shop,
         })
         if(!shop){
            throw new Error("No data found");
         }
    } catch (error) {
        
    }
    
  };