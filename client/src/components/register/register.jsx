import React, { useState } from 'react'
import axios from 'axios'
import validator from 'validator'

import 'bootstrap/dist/css/bootstrap.min.css'
import './register.css'
import { Button } from "react-bootstrap"

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

    const submitCheckIn = event => {
        event.preventDefault()
        if(!validator.isEmail(register.email)) {
            alert("Вы не ввели Email")
        } else if(register.password !== register.password2) {
            alert("Пароли не совпадают")
        } else if(!validator.isStrongPassword(register.password, {minSymbols: 0})) {
            alert("Пароль должен содержать символы верхнего и нижнего регистра и иметь длину не менее 8 символов")
        } else {
            axios.post("/registration", {
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
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-md-12'}>
                    <div className={'main-style-reg-form text-center'}>
                        <h4 className={'h4-reg-form'}>Регистрация пользователя</h4>
                        <hr className={'hr-reg-form'}/>
                        <form>
                            <input
                                className={'input-reg-form'}
                                placeholder={'Имя пользователя'}
                                type="username"
                                id="username"
                                name="username"
                                value={register.username}
                                onChange={changeInputRegister}
                            />
                            <input
                                className={'input-reg-form'}
                                placeholder={'Email'}
                                type="email"
                                id="email"
                                name="email"
                                value={register.email}
                                onChange={changeInputRegister}
                                formNoValidate
                            />
                            <input
                                className={'input-reg-form'}
                                placeholder={'Пароль'}
                                type="password"
                                id="password"
                                name="password"
                                value={register.password}
                                onChange={changeInputRegister}
                            />
                            <input
                                className={'input-reg-form'}
                                placeholder={'Повтор пароля'}
                                type="password"
                                id="password2"
                                name="password2"
                                value={register.password2}
                                onChange={changeInputRegister}
                            />
                            <Button
                                className={'btn btn-submit btn-style-reg-form'}
                                onClick={submitCheckIn}
                            >
                                OK
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}