const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getUser } = require('../controllers/userController.js')
const { protect } = require('../middleware/authMiddleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/getuser', getUser)


module.exports = router;