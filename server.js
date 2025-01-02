const express = require ("express");
const app  = express();
const port = 4000;
const { default: mongoose } = require('mongoose');
const userSchema = require('./model/userSchema.js');
const connectDB = require("./config/db.js")
// mongoose.connect("mongodb://localhost:27017/MERN")
console.log("connect mongodb")

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});
 
app.post("/anni", async (req,res) => {
  try{
    const {email,password,name} = req.body;
    const userExist =  userModel.findOne({email})
    if(userExist){

      return res.send({message: "User already exist"})
    }
    const user = await userModel.create(req.body.name)
    UserModel.save();
    return res.send({message: "User created successfully"})
}
catch (err) {
  return res.send (error)
}
});
app.listen(port, () => {
  console.log( "Server is running on" )
});