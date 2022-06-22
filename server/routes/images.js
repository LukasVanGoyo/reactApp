const express = require('express');
const router = express.Router();
const { getImage } = require('../controllers/imagesController')

const Image = require("../collection/image");

const asyncHandler = require('express-async-handler')

router.get('/getimage/:id', getImage)


module.exports = router;