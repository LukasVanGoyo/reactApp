const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name:{
        type: String,
        required: [true, 'Please add name']
    },

    email: {
        type: String,
        required: [true, 'Please add name'],
        unique: true
    },

    password: {
        type: String,
        required: [true, 'Please add password']

    }
});

module.exports = mongoose.model('user', userSchema)
