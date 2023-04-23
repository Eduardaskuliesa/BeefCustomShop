const express = require('express')
const config = require('./config/config')
const morgan = require('morgan')
const router = require('./router/index')
const mongoose = require('mongoose')
require('dotenv').config()

const server = express()

server.use(morgan('tiny'));
server.use(express.json())

mongoose.connect(config.mongo.key)
.then(() => {
    console.log('mongoose connected')
}).catch(e => {
    console.log(e)
});

server.use('/', router)

server.listen(config.server.port, () => {
    console.log(`server is running on : http://${config.server.domain}:${config.server.port}`)
});
