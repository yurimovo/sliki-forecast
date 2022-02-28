import React from 'react'
import { Button } from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../../../store/actions/authActions"

import 'bootstrap/dist/css/bootstrap.min.css'
import './logout-button.css'

const LogoutButton = () => {

    const history = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        history('/auth')
    }

    return (
        <div>
            <Button className={'btn btn-success'}>
                <Link
                    className={'nav-item'} to={'/auth'}
                    onClick={handleLogout}
                >
                    Выйти
                </Link>
            </Button>
        </div>
    )
}

export default LogoutButton