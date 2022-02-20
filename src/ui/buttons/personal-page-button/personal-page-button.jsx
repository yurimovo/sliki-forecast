import React from 'react'

import {Button} from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css'
import './personal-page-button.css'
import {Link} from "react-router-dom";

const PersonalPageButton = () => {
    return (
        <div>
            <Button className={'btn btn-warning'}>
                <Link className={'nav-item'} to="/personal-page">Личный кабинет</Link>
            </Button>
        </div>
    );
};

export default PersonalPageButton