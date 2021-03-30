const {check,validationResult} = require('express-validator')

exports.createUserValidator = (req,res,next) => {

    
    req.check('userName','UserName Reqired').notEmpty()
    req.check('userName','Min Length of 4').isLength({min: 4 })


    
    // req.check('data').notEmpty(),
    // req.check('data').isLength({min: 4 , max : 100});

    const errors =req.validationErrors()

    if(errors.length>0){
        return res.status(400).json({error : errors})
    }
    next()
}