const mongoose = require("mongoose");
const { schema } = require("./company");
const Schema = mongoose.Schema;

const menuSchema = new Schema(
  {
    name: { type: String, require: true, trim: true },
    price: {type: Number},
    shop: {type: Schema.Types.ObjectId , ref:"Shop"}
  },
  { toJSON: {virtuals:true},
    timestamps : true,
    collection : "menus" }
);

menuSchema.virtual('price_vat').get(function(){
    return (this.price*0.07) + this.price
})

const menu = mongoose.model("menu", menuSchema);

module.exports = menu;
