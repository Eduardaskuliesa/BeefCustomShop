const userSchema = require("../model/user.schema")

module.exports = {
    getPosts: async(req, res) => {
        const users = await userSchema.find({}, {name:1, _id: 1})
        res.send({users})
    }
}