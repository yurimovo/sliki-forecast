import React from "react"
import {Button} from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css'
import './add-forecast-btn.css'

const AddForecastButton = () => {
    return (
        <>
            <Button className={'btn btn-success btn-style'}>
                Сделать прогноз
            </Button>
        </>
    )
}

export default AddForecastButton