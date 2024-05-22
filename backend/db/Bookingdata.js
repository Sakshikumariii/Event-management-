const mongoose=require('mongoose');
const BookingdataSchema = new mongoose.Schema({
    name: String,
    location:String,
    date1:Date,
    date2:Date,
    message:String,
    user_file:String
  });
  module.exports=mongoose.model('bookings',BookingdataSchema);