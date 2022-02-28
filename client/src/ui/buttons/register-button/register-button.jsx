import React from 'react'
import { Button } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css'
import './register-button.css'
import {Link} from "react-router-dom"

const RegisterButton = () => {
    return (
        <div>
            <Button className={'btn btn-primary btn-style'}>
                <Link className={'nav-item'} to={'/register'}>Регистрация</Link>
            </Button>
        </div>
    )
}

export default RegisterButton