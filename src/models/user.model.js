const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true }, 
    
})

module.exports = mongoose.model('User', userSchema)