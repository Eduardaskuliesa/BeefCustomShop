const dotenv = require('dotenv')
require('dotenv').config()

const {
    SERVER_PORT,
    SERVER_DOMAIN,
    MONGO_KEY,
    JWT_KEY,
} = process.env;

if(!SERVER_PORT
|| !SERVER_DOMAIN
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
    }
}

module.exports = config