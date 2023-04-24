const yup = require('yup')


const loginValidationSchema = yup.object({
    email: yup.string()
    .required('email is required')
    .email('incorrect email format'),

    password: yup.string()
    .required('password is required')
    .min(2, 'password must have at least 2 symbols')
    .max(32, 'password can\'t have more than 32 symbols'),

}).strict(true);

module.exports = loginValidationSchema