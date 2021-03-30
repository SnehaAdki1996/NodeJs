

const express = require("express");
const app = express();
const morgan = require('morgan')
const userRoutes = require('./router/user')
const mongoose = require('mongoose')

const  validationResult  = require('express-validator')

const dotenv = require('dotenv')

//body-parser we don't get the parsed data 
const bodyParser = require('body-parser')


//to get access for the .env global variables
dotenv.config()


//configure to db ie connecting to DB
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true , useUnifiedTopology: true })
.then( () => console.log("connected to DB"))
.catch( (err) => console.log(err))

//middleware
app.use(morgan("dev"))

app.use(bodyParser.json());
app.use(validationResult());
app.use("/",userRoutes)

app.listen(process.env.PORT, function () {
    console.log(`Listening to port ${process.env.PORT}`);
});



