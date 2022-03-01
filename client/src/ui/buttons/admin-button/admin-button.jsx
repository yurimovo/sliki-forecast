import React from 'react'
import {Button} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import './admin-button.css'
import {Link} from "react-router-dom";

const AdminButton = () => {
    return (
        <div>
            <Button className={'btn btn-danger'}>
                <Link className={'nav-item'} to="/race-result">Админка</Link>
            </Button>
        </div>
    )
}

export default AdminButton