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
    password: {
        type: String,
        required: true,
    },
    tech: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
    },
    token: {
        type: String,
        default: ''
    }

})

module.exports = mongoose.model('User', userSchema)