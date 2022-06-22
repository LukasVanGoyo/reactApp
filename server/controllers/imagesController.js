const Image = require('../collection/image.js')
const fs = require('fs')
const asyncHandler = require('express-async-handler')

const getImage = asyncHandler(async (req,res) => {

    Image.findById({_id:req.params.id}, (err, result) => {
        if(err){
            res.status(400)
            throw new Error('Nie ma takiego zdjecia')
        }

        if(result){
            res.status(201)
            const file = result.file.data

                const encoded = new Buffer(file, 'binary').toString('base64')
                res.json({message: encoded})




        }
    })
})

const addImage = asyncHandler( async (req, res) => {

    const image = await Image.create({
        fileName: req.body.fileName,
        file: {
            data:req.body.file.buffer,
            contentType: req.body.file.mimetype
        }
    })

    if(image) {
        res.status(201).json({
            message: 'Zdjęcie zostało dodane'
        })
    } else {
        res.status(400)
        throw new Error('Zdjęcie nie zostało dodane')
    }
})

module.exports = {
    addImage,
    getImage
}