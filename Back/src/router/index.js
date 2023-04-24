const express = require('express')
const authController = require('../controllers/auth.controller')
const router = express.Router()
const validation = require('../middlewares/validation.middleware')
const registerSchema = require('../validation-schemes/register-validation-schema')
const postController = require('../controllers/posts.constroller')
const verifyToken = require('../middlewares/verifyToken')


router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/getUsers', verifyToken, postController.getPosts )
module.exports = router