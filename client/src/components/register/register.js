import React, { useState } from 'react'
import axios from 'axios'
import validator from 'validator'
//import { DOMEN_SERVER, DOMEN_SITE } from '../../config/const'

import 'bootstrap/dist/css/bootstrap.min.css'
import './register.css'

export const Register = () => {

    const [register, setRegister] = useState(() => {
        return {
            username: "",
            email: "",
            password: "",
            password2: "",
        }
    })

    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }


    const submitChackin = event => {
        event.preventDefault();
        if(!validator.isEmail(register.email)) {
            alert("Вы не ввели Email")
        } else if(register.password !== register.password2) {
            alert("Пароли не совпадают")
        } else if(!validator.isStrongPassword(register.password, {minSymbols: 0})) {
            alert("Пароль должен содержать символы верхнего и нижнего регистра и иметь длину не менее 8 символов")
        } else {
            axios.post("/auth/registration/", {
                username: register.username,
                email: register.email,
                password: register.password,
            }).then(res => {
                if (res.data === true) {
                    window.location.href = "/auth"
                } else {
                    alert("Пользователь с таким Email существует")
                }
            }).catch(() => {
                alert("Ошибка сервера")
            })
        }
    }

    return (
        <div className={'form'}>
            <h2>Register user:</h2>
            <form onSubmit={submitChackin}>
                <p>Name: <input
                    type="username"
                    id="username"
                    name="username"
                    value={register.username}
                    onChange={changeInputRegister}
                /></p>
                <p>Email:<input
                    type="email"
                    id="email"
                    name="email"
                    value={register.email}
                    onChange={changeInputRegister}
                    formnovalidate
                /></p>
                <p>Password: <input
                    type="password"
                    id="password"
                    name="password"
                    value={register.password}
                    onChange={changeInputRegister}
                /></p>
                <p>Repeat password: <input
                    type="password"
                    id="password2"
                    name="password2"
                    value={register.password2}
                    onChange={changeInputRegister}
                /></p>
                <input type="submit"/>
            </form>
        </div>
    )
}