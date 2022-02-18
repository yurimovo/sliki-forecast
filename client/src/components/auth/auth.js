import React, { useState } from 'react'
import axios from 'axios'

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
        <div className={'form'}>
            <h2>Register user:</h2>
            <form onSubmit={submitAuth}>
                <p>Name: <input
                    type="username"
                    id="username"
                    name="username"
                    value={auth.username}
                    onChange={changeInputAuth}
                /></p>
                <p>Password: <input
                    type="password"
                    id="password"
                    name="password"
                    value={auth.password}
                    onChange={changeInputAuth}
                /></p>
                <input type="submit"/>
            </form>
        </div>
    )
}