const UserDB = require('../model/user.schema')
const registerValidationSchema = require('../validation-schemes/register-validation-schema')
const loginValidationSchema = require('../validation-schemes/login-validation-schema')
const config = require('../config/config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')





module.exports = {
    register: async(req, res) => {
        try{
            const {email, name, password} = req.body
            const validate = registerValidationSchema.validateSync(req.body, {abortEarly: false})

            const emailExist = await UserDB.findOne({email});
            if(emailExist) return res.status(400).json({message: 'Email is arleady exists'})

            const hashedPassword = await bcrypt.hash(password, config.passwordEncryption.secret)

            const user = new UserDB({
                name,
                email,
                password: hashedPassword
            });

            const newUser = await user.save();
            res.status(200).json({ success: true, message: 'Your account ready SIR'})

        }catch(error){
            return res.status(400).json({message: error.message})
        }
    },
    login: async(req, res) => {
        try{
            const {email, password} = req.body
            const validate = loginValidationSchema.validateSync(req.body, {abortEarly: false})

            const user = await UserDB.findOne({email});
            if(!user) return res.status(400).json({message: 'Wrong email'})

            const passwordMatch = await bcrypt.compare(password, user.password)
            if(!passwordMatch) return res.status(400).json({message: 'Wrong password'})

            const token = jwt.sign(
                {_id: user._id}, 
                config.jwtToken.secret,
                {expiresIn: 60})
               
            res.send(token)

        }catch(error){
            return res.status(400).json({message: error.message})
        }
    }
}