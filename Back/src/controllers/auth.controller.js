const UserDB = require('../model/user.schema')
const yup = require('yup')
const registerValidationSchema = require('../validation-schemes/register-validation-schema')



module.exports = {
    register: async(req, res) => {

        const {email, name, password} = req.body

        const user = new UserDB({
            name,
            email,
            password
        });
        try{
            const savedUser = await user.save();
            res.send(savedUser);
        }catch(err){
            res.status(400).send(err);
        }
    }
}