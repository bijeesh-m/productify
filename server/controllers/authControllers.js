const User = require("../models/user")



module.exports.register = async (req, res) => {
    try {

        const { username, password, email, mob } = req.body
        const newUser = await User.create({ username, password, email, mob })
        res.status(201).json({ success: true, message: "Login success", newUser })


    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}