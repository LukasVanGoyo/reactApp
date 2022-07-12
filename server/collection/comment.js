const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
        text: {
            type: String,
            required: true
        },

        author:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }

    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('comment', CommentSchema)