const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
},
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image'
    },
    price: {
        type: Number,
        require: true
    },
    hasDiscount: {
        type: Boolean,
        default: false
    },
    discountValue: Number,
    rating: {
        type: Number,
        default: 0
    },
    votes: {
        type: Number,
        default: 0
    },
    addedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: String
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('product', productSchema)