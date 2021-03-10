

const express = require('express');
const userModel = require('../models/userModel');
const router = express.Router();
const client = require('../index')
const mongoose = require('mongoose')

const {UserRepo } = require('../repository/userRepo')

router.post('/user',async(req,res) => {
    console.log(client,mongoose)
    const user = new userModel({
        name : req.body.name
    });
    let userData = []

    userData.push({
        
        
                name : req.body.name
        
    })
    const userRepo = mongoose.models.userTable;
    await userRepo.collection.insertOne(userData)
    res.send(user);
})
module.exports = router