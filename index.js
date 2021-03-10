

var express = require("express");

var mongoose = require("mongoose");

var bodyParser = require('body-parser')
var app = express();

require('dotenv').config()

var userRoute = require('./router/user')


//connect to MongoDB
// let url = "mongodb://localhost:27017/Demo";
let db = mongoose.createConnection(process.env.DATA_BASE, { useNewUrlParser: true, useUnifiedTopology: true });


db.on("error", console.error.bind(console, "Error with DB connection"));

db.on("connected", () => {
    console.log("Connected Successfully!...");
});

app.use(express.json());

app.listen(3000, function () {
    console.log("Listening to port 3000");
});


app.use("/", userRoute);

module.exports = db;
// const newContext = {}
// newContext.mongoseConnection = db;

// context.put(newContext)
