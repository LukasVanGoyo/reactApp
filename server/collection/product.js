const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
},
    img: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'image'
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
        ref: 'user'
    },
    category: {
        type: String
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('product', productSchema)