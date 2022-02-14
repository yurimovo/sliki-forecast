import React from 'react'

import {Button} from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css'
import './personal-page-button.css'

const PersonalPageButton = () => {
    return (
        <div>
            <Button className={'btn btn-warning'}>
                Личный кабинет
            </Button>
        </div>
    );
};

export default PersonalPageButton