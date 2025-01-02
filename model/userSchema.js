const mongoose = require('mongoose');
const { type } = require('os');
mongoose.connect("mongodb://localhost:27017")
const userSchema = new mongoose.Schema({

  name:{
type:String,
required:true
  },
  email:{
type:String,
required:true
}
  password :{
    type:String,
    required:true
}
);
module.exports = mongoose.model('User', userSchema);
