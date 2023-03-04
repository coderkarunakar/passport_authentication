
// To connect with your mongoDB database to;mongodb compass 
const mongoose = require("mongoose");
const db = mongoose.connection;

// Connecting to database
mongoose.connect(
"mongodb://localhost:27017/",
{
	dbName: "passport_js",
	useNewUrlParser: true,
	useUnifiedTopology: true,
},
(err) =>
	err ? console.log(err) : console.log(
	"Connected to passport_js database")
);
const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 8000");
module.exports=db;	