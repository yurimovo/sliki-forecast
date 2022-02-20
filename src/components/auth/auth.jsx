import React, { useState } from 'react'
import axios from 'axios'
import { Button } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css'
import './auth.css'

export const Auth = () => {

    const [auth, setAuth] = useState(() => {
        return {
            username: "",
            password: ""
        }
    })

    const changeInputAuth = event => {
        event.persist()
        setAuth(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const submitAuth = async (userName, password) => {
        try {
            const response = await axios.post(`/login`, {
                userName,
                password
            })
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            console.log(e.response.data.message)
        }
    }

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-md-12'}>
                    <div className={'main-style-auth-form text-center'}>
                        <h4 className={'h4-auth-form'}>Авторизация</h4>
                        <form>
                            <input
                                type="username"
                                id="username"
                                name="username"
                                value={auth.username}
                                onChange={changeInputAuth}
                            />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={auth.password}
                                onChange={changeInputAuth}
                            />
                            <Button
                                className={'btn btn-submit btn-style-auth-form'}
                                type="submit"
                                onClick={submitAuth}
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