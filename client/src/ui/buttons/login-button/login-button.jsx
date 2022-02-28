import React from 'react'
import { Button } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css'
import './login-button.css'
import {Link} from "react-router-dom"

const LoginButton = () => {
    return (
        <div>
            <Button className={'btn btn-success'}>
                <Link className={'nav-item'} to={'/auth'}>Войти</Link>
            </Button>
        </div>
    )
}

export default LoginButton