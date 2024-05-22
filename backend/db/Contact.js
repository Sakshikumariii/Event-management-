const mongoose=require('mongoose');
const ContactSchema = new mongoose.Schema({
    name: String,
    email:String,
    phone:Number,
    message:String,
    user_file:String
  });
  module.exports=mongoose.model('contacts',ContactSchema);