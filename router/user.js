

const express = require('express');
const userModel = require('../models/userModel');
const router = express.Router();

const {UserRepo } = require('../repository/userRepo')

router.post('/user',async(req,res) => {
    const user = new userModel({
        name : req.body.name
    });
    await user.save();
    res.send(user);
})

module.exports = router