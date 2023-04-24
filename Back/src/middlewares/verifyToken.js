const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = function(req, res, next) {
    const authHeader = req.headers['authorization']
    if(!authHeader) return res.sendStatus(401)
    console.log(authHeader)
    const token = authHeader.split(' ')[1];

    jwt.verify(token, config.jwtToken.secret, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}