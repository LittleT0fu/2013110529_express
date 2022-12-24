const Shop = require("../models/shop");
const Menu = require("../models/menu")

exports.shop = async (req, res, next) => {
    const shop = await Shop.find().select('name photo location').sort({id:-1});
    console.log(shop);
  

    const shopWithPhotoDomain = shop.map( (shop ,index)=>{
        return{
            id:shop._id,
            name:shop.name,
            photo:'http://localhost:3000/images/'+shop.photo,
            location: shop.location
        }
    })

    res.status(200).json({
      data: shopWithPhotoDomain,
    });
  };


  exports.menu = async (req, res, next) => {
    const menu = await Menu.find();
    console.log(menu);

    res.status(200).json({
      data: menu,
    });
  };

