const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    tech: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
        default: false,
    }

})

module.exports = mongoose.model('User', userSchema)