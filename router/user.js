const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();

const { UserRepo } = require("../repository/userRepo");


router.get("/data", async(req, res) => {
    try{
        const user = await userModel.find()
        res.status(200).json(user)
    }catch(err){
        res.status(500).json({message : err.messgae})
    }
    // res.send('Hello World')
});

router.post("/user", async (req, res) => {
  const user = new userModel({
    name: req.body.name,
  });
  

  try{
    const newUSer = await user.save()
    res.status(201).json({data : newUSer})
  }
  catch(err){
    res.status(400).json({message : err.message})
  }
});
module.exports = router;
