const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const menu_model = require("../models/menu")

const staffSchema = new Schema(
  {
    name: { type: String, require: true, trim: true },
    photo: {
      type: String, 
      default: 'nopic.png'
    },
    location:{
        lat: Number,
        lgn: Number
    } ,
    // createdAt: { type: Date, default: Date.now },
    // updateAt: { type: Date, default: Date.now },
  },
  { toJSON : {virtuals : true},
    timestamps : true,
    collection : "shops" }
);

staffSchema.virtual('menu', {
    ref: 'menu',
    localField: '_id',
    foreignField: 'shop', 
    });


const shop = mongoose.model("Shop", staffSchema);



module.exports = shop;
