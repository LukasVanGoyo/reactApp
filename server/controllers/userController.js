const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

const User = require('../collection/user.js')


const registerUser = asyncHandler(async (req, res) => {

   const { name, email, password } = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Wszystkie pola muszą zostać wypełnione')
    }

    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('Podany email jest już zajęty')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})

const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({email})


    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        })
    } else {
        res.status(400)
        throw new Error('Podany email lub hasło jest nieprawidłowe')
    }


})



const getUser = asyncHandler(async(req, res) => {

    const user = User.find({}, (err, user) =>{
        res.json(user)
    });

})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: '30d',
    })
}
module.exports = {
    registerUser,
    loginUser,
    getUser
}