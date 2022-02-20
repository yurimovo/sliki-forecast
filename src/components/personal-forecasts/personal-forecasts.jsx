import React, { useState } from 'react'

const PersonalForecasts = () => {

    const [forecasts, setForecasts] = useState([])

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-sm-12'}>
                    Forecast List
                </div>
            </div>
        </div>
    )
}

export default PersonalForecasts