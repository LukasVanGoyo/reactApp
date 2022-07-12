const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({

    name: {
        type: String,
        require: true
    }

})

module.exports = mongoose.model('category', categorySchema)