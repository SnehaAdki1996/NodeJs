
// const context = require('context')
const userModel = require('../models/userModel')
//const context = require('context')

class UserRepo{
    constructor(){
    }

    async createUser(req,res){

        console.log(req,res)
        
        const userData = new userModel({
            name : req.body.name
        });

        return await userData.save()
        
    }
}

exports.UserRepo = UserRepo