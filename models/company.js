const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name:  String,
    address:{
        province : String,
    }
  },{ collection : "company"});

const company = mongoose.model("company", companySchema);

module.exports = company;

