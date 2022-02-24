const Router = require("express")
const controller = require('../controllers/auth.controller')
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require("jsonwebtoken")
//const {check, validationResult} = require("express-validator")
const router = new Router()


router.post('/registration', controller.registration)

router.post('/login',
    async (req, res) => {
        try {
            const {userName, password} = req.body
            const user = await User.findOne({userName})
            if (!user) {
                return res.status(404).json({message: "Пользователь не найден"})
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({message: "Неверный пароль"})
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
            res.send({message: "Ошибка сервера"})
        }
    })


module.exports = router