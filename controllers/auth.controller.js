const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

class authController {

    async registration(req, res) {
        try {
            const {username, email, password} = req.body;
            const candidate = await User.findOne({email})
            if (candidate) {
                return res.json({message: 'Пользователь существует', code: 1})
            }
            const hashPassword = bcrypt.hashSync(password, 10);
            const user = new User({username, email, password: hashPassword})
            await user.save();
            return res.json(true)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка регистрации'})
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({email})
            if(!user) {
                return res.json({message: 'Неверный Email', code: 2})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword) {
                return res.json({message: 'Неверный пароль', code: 2 })
            }
            const token = generateAccessToken(user.userId, user.email);
            return res.json({token})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка авторизации'})
        }
    }
}

const generateAccessToken = (id, email) => {
    const payload = {
        userId: id,
        email: email
    }
    return jwt.sign(payload, 'sliki-forecast', {expiresIn: "1h"})
}

module.exports = authController