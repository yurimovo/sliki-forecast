import React from 'react'
import PersonalForecasts from "../personal-forecasts/personal-forecasts"
import PersonalForecastDetails from "../personal-forecast-details/personal-forecast-details"
import PersonalForecastPoints from "../personal-forecast-points/personal-forecast-points"
import PersonalForecastPosition from "../personal-forecast-position/personal-forecast-position"

import 'bootstrap/dist/css/bootstrap.min.css'
import './personal-page.css'

const PersonalPage = () => {
    return (
        <div className={'container design-personal-page'}>
            <div className={'row'}>
                <div className={'col-sm-3 text-center column-personal-page'}>
                    <PersonalForecasts />
                </div>
                <div className={'col-sm-9 text-center column-personal-page'}>
                    <PersonalForecastDetails />
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-sm-4 text-center column-personal-page'}>
                    <PersonalForecastPoints />
                </div>
                <div className={'col-sm-4 text-center column-personal-page'}>
                    <PersonalForecastPosition />
                </div>
            </div>
        </div>
    )
}

export default PersonalPage