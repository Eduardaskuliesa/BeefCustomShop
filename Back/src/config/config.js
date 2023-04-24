const dotenv = require('dotenv')
require('dotenv').config()

const {
    SERVER_PORT,
    SERVER_DOMAIN,
    MONGO_KEY,
    BCRYPT_ROUNDS,
    JWT_TOKEN_KEY,
    JWT_TOKEN_EXPIRES,
} = process.env;

if(!SERVER_PORT
|| !SERVER_DOMAIN

|| !BCRYPT_ROUNDS

||!JWT_TOKEN_EXPIRES
||!JWT_TOKEN_KEY
){
    throw new Error('Please define constant in ".env" file')
}

const config ={
    server: {
        domain: SERVER_DOMAIN,
        port: SERVER_PORT,
    },
    mongo: {
        key: MONGO_KEY
    },
    passwordEncryption:{
        secret: Number(BCRYPT_ROUNDS)
    },
    jwtToken: {
        secret: JWT_TOKEN_KEY,
        expires: JWT_TOKEN_EXPIRES
    }
    
}

module.exports = config