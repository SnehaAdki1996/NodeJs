
// const context = require('context')
const userModel = require('../models/userModel')
//const context = require('context')
const con = require('../index')

class UserRepo{
    constructor(){
    }

    async createUser(req,res){

        console.log(req,res,con)
        
        const userData = new userModel({
            name : req.body.name
        });

        return await userData.save()
        
    }
}

exports.UserRepo = UserRepo