const mongoose = require("mongoose");
const chat=require("./models/chat.js");

 main().then(()=>{
     console.log("Connection successful");
 })
 .catch(err => console.log(err));
 
 async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
 }

 chat.insertMany([{
    from:"Neha",
    to:"Abhijeet",
    msg:"hello . hope him well ! ",
    created_at : new Date(),
 },
{
    from:"Niha",
    to:"Abhishek",
    msg:"hello . hope  well us ! ",
    created_at : new Date(),
 },
   {from:"Pooja",
    to:"Abhinav",
    msg:"hello . i am ! ",
    created_at : new Date(),
 },
]);
