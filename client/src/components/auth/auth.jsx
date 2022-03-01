import React, { useState } from 'react'
import { Button } from "react-bootstrap"
import { authorization } from "../../actions/user"
import { useDispatch } from "react-redux"
import { login } from "../../store/actions/authActions"

import 'bootstrap/dist/css/bootstrap.min.css'
import './auth.css'
import {useNavigate} from "react-router-dom"
import Input from "../../ui/text-fields/input-register/input-register"

export const Auth = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = async () => {
        await authorization(userName, password)
        dispatch(login())
        /*setUserName('')
        setPassword('')*/
        history('/')
    }

    return (
        <div className={'container'} style={{
            height: '83vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className={'row'}>
                <div className={'col-md-12'}>
                    <div className={'main-style-auth-form text-center'}>
                        <h4 className={'h4-auth-form'}>Авторизация</h4>
                        <form>
                            <Input
                                className={'input-reg-form'}
                                value={userName}
                                setValue={setUserName}
                                type="text"
                                placeholder={'Имя пользователя'}
                            />
                            <Input
                                className={'input-reg-form'}
                                value={password}
                                setValue={setPassword}
                                type="password"
                                placeholder={'Пароль'}
                            />
                            <Button
                                className={'btn btn-submit btn-style-auth-form'}
                                onClick={handleLogin}
                            >
                                ОК
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}