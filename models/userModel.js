var mongoose =  require('mongoose')


var schema = mongoose.Schema({
    userName : String,  
})


module.exports = mongoose.model("userTable" , schema)