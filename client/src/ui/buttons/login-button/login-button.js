import React from 'react'
import { Button } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css'
import './login-button.css'

const LoginButton = () => {
    return (
        <div>
            <Button className={'btn btn-success'}>
                Войти
            </Button>
        </div>
    )
}

export default LoginButton