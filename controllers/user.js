const userPost = require('../models/userModel')


exports.getUser = (req, res) => {
    //res.send("Hello from controller")
    userPost.find().select("_id userName data")
    .then (result => {
        res.status(200).json({data :result})
    })
    .catch(err => {
        res.status(400).json({error : err})
    })
}

exports.getUserById = (req,res) => {
    
    userPost.findById({_id : req.params.id}) 
    .then(result => {
        res.json({data : result})
    })
    .catch(err => {
        res.status(400).json({error : err})
    })
}


exports.postUser = (req,res) => {
    const user = new userPost(req.body)
    //console.log(req.body)
    user.save()
    .then(result => res.status(200).json({data : result}))
    .catch(err => res.status(400).json({error : err}))
}