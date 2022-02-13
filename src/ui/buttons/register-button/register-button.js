import React from 'react'
import { Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css'
import './register-button.css'

const RegisterButton = () => {
    return (
        <div>
            <Button className={'btn btn-primary'}>Регистрация</Button>
        </div>
    )
}

export default RegisterButton