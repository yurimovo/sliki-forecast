import React from 'react'
import NextGp from "../next-gp/next-gp"
import PilotsPosition from "../pilots-position/pilots-positions"
import TeamsPosition from "../teams-position/teams-position"
import ForecastersPosition from "../forecasters-position/forecasters-position"

import 'bootstrap/dist/css/bootstrap.min.css'
import './body.css'

const Body = () => {
    return (
        <div className={'container body-style'}>
            <div className={'row'}>
                <div className={'col-md-12'}>
                    <NextGp/>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-md-4'}>
                    <PilotsPosition/>
                </div>
                <div className={'col-md-4'}>
                    <TeamsPosition/>
                </div>
                <div className={'col-md-4'}>
                    <ForecastersPosition/>
                </div>
            </div>
        </div>
    )
}

export default Body  