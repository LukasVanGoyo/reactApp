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
    if(req.files === null ){
       res.status(400);
       throw new Error('Nie załadowano pliku')
    }

    const file = req.files.file;
    const buffer = file.data;
    const name = file.name;
    const type = file.mimetype;
    const size = file.size;

    if(size > (1024*1024*2)){
        res.status(400)
        throw new Error('Plik jest za duży')
    }

    if(type === 'image/jpeg' || type === 'image/png' || type === 'image/jpg'){
        const image = await Image.create({
            fileName: name,
            file: {
                data: buffer,
                contentType: type
            },
            size: size,
        })

        if(image) {
            const encoded = new Buffer(image.file.data, 'binary').toString('base64')

            res.status(201).json({
                file: encoded
            })
        } else {
            res.status(400)

        }
    }else{
        res.status(400)
        throw new Error('Niepoprawny format pliku')
    }


})

module.exports = {
    addImage,
    getImage
}