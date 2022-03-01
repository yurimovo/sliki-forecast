import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import {registration} from "../../actions/user"
import { Button } from "react-bootstrap"
import Input from "../../ui/text-fields/input-register/input-register"

import 'bootstrap/dist/css/bootstrap.min.css'
import './register.css'

export const Register = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const history = useNavigate()

    const handleRegister = async () => {
        if (userName === 'superadmin') {
            setIsAdmin(true)
        }
        await registration(userName, password, isAdmin)
        /*setUserName('')
        setPassword('')*/
        history('/auth')
    }

    return (
        <div className={'container container-register'}>
            <div className={'row'}>
                <div className={'col-md-12'}>
                    <div className={'main-style-reg-form text-center'}>
                        <h4 className={'h4-reg-form'}>Регистрация пользователя</h4>
                        <hr className={'hr-reg-form'}/>
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
                                className={'btn btn-submit btn-style-reg-form'}
                                onClick={handleRegister}
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