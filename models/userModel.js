var mongoose =  require('mongoose')


const userSchema = new mongoose.Schema({
    userName : {type  : String,required :true},
    data : {type  : String,required : true}
})


module.exports = mongoose.model("userModel" , userSchema) 