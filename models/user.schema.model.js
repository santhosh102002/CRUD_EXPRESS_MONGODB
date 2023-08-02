const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require : [true, 'error can mention here'],
        maxLenght: [10,'enter your name'],
        trim: true
    },
    email:{
        type: String,
        require: true,
        unique : true
    }
})

module.exports= mongoose.model("User",userSchema)

// mongodb converts this User to lowercase and it makes plural
// User becomes users
