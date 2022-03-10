const {Router} = require("express")
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require('config')
const {check, validationResult} = require("express-validator")

const router = new Router()

// /api/auth/register
router.post('/register',
    [
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({min:3, max:12})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Incorrect request", errors})
        }
        const {userName, password} = req.body
        //console.log(req.body)
        const candidate = await User.findOne({userName})
        if(candidate) {
            return res.status(400).json({message: `User already exist`})
        }
        const hashPassword = await bcrypt.hash(password, 8)
        const user = new User({userName, password: hashPassword, isAdmin: false})
        await user.save()
        res.json({message: "User was created"})
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

// /api/auth/login
router.post('/login',
    async (req, res) => {
        try {
            const {userName, password} = req.body
            const user = await User.findOne({userName})
            if (!user) {
                return res.status(404).json({message: "User not found"})
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({message: "Invalid password"})
            }
            const token = jwt.sign({id: user.id}, config.get("jwtSecret"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    userName: user.userName,
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })


module.exports = router