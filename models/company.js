const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name:  {type : String , trim : true , unique : true , index : true , require : true},
    address:{
        province : {type : String , trim:true , require:true},
    }
  },{ collection : "company"});

const company = mongoose.model("Company", companySchema);

module.exports = company;

