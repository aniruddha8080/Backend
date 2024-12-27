

const express = require ("express");
const app  = express();
const port = 3000;
const { default: mongoose } = require('mongoose');

const connectDB = require("./config/db.js")
mongoose.connect("mongodb://localhost:27017/MERN")




app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(port, () => {
  console.log( "Server is running on" )
});