import React from "react"
import {Button} from "react-bootstrap"
import { Link/*, useNavigate*/ } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './add-forecast-btn.css'

const AddForecastButton = () => {

    /*const history = useNavigate()*/

    return (
        <>
            <Button
                className={'btn btn-success btn-style'}
            >
                <Link className={'nav-item'} to="/new-forecast">Сделать прогноз</Link>
            </Button>
        </>
    )
}

export default AddForecastButton