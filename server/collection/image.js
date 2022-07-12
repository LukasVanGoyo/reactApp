const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    fileName: {
        type: String,

    },
    file: {
        data: Buffer,
        contentType: String,

    },
    size: Number,

    uploadTime: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('image', ImageSchema)