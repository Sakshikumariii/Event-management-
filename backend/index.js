
const express=require('express');
const cors=require('cors');
const app=express();
// require('./db/config');
const User=require('./db/User');
const Contact=require('./db/Contact');
const Bookingdata=require('./db/Bookingdata');
app.use(cors());
app.use(express.json());


require('dotenv').config();


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL);
const port = process.env.PORT;


app.post('/register',async(req,resp)=>{
    let user=new User(req.body);
    let result=await user.save();
    result=result.toObject();
    delete result.password;
    resp.send(result);
})

app.post('/contact',async(req,resp)=>{
    let contacts=new Contact(req.body);
    let result=await contacts.save();
    result=result.toObject();
    delete result.password;
    resp.send(result);
})
app.post('/booking',async(req,resp)=>{
    let bookings=new Bookingdata(req.body);
    let result=await bookings.save();
    result=result.toObject();
    delete result.password;
    resp.send(result);
})

app.post('/login',async(req,resp)=>{
    if(req.body.password && req.body.email)
    {
        let user=await User.findOne(req.body).select("-password");
        if(user)
        {
           resp.send(user)
        }
         else
        {
           resp.send({result:'No User Found'})
        }
    }
    else
        {
           resp.send({result:'No User Found'})
        }
   
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});