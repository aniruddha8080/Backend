const mongoose = require ('mongoose');
const url = "mongodb://localhost:27017/MERN";

function connectDB() {
   connect(url)
   .then(() => console.log("Connected to MongoDB"))
   .catch(err => console.log("connection error", err));
}
 module.exports = connectDB;