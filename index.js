// var express = require('express');
// var app = express()
// var mongoose = require('mongoose')

// //LocalHost to hit API at port 3000
// app.listen(3000,function(){
//     console.log("Listening to port 3000");
// })

const userRoute = require("./router/user");
var bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({extended : true}))
// app.use(cors({ origin: "http://localhost:4200" }))
//console.log(app)
// app.get('/',function(req,res,next){
//     res.status(  200).json({success : 'Send success'})
//     res.send('Hello World')
//     next()
// })
// app.use('/',router)

// module.exports = app;

var express = require("express");

var mongoose = require("mongoose");

// const context = require('context');

//connect to MongoDB
let url = "mongodb://localhost:27017/Demo";
let client = mongoose.createConnection(url, { useNewUrlParser: true ,useUnifiedTopology: true});
client.on("error", console.error.bind(console, "Error with DB connection"));
console.log(mongoose.connection.readyState);
client.on("connected", () => {
  console.log("Connected Successfully!...");
  var app = express();

  app.listen(3000, function () {
    console.log("Listening to port 3000");
  });

  app.use(bodyParser.json());

  app.use("/", userRoute);
});

module.exports = client;
// const newContext = {}
// newContext.mongoseConnection = client;

// context.put(newContext)
