const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

const User = require('../collection/user.js')

const protect = asyncHandler(async(req, res, next) => {
        let token;

        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            try{

                token = req.headers.authorization.split(' ')[1]

                const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

                req.user = await User.findById(decoded.id).select('-password')

                next()

            }catch(error){
                console.log(error);

                res.status(401)
                throw new Error('Not authorized')
            }
        }

        if(!token){
            res.status(401)
            throw new Error('Not authorized , no token')
        }
    })

module.exports = protect;