import React from 'react'

import './next-gp.css'
import NextGpFlag from "../next-gp-flag/next-gp-flag"
import NextGpDeadline from "../next-gp-deadline/next-gp-deadline"
import NextGpTimer from "../next-gp-timer/next-gp-timer"
import AddForecastButton from "../../ui/buttons/add-forecast-button/add-forecast-button"

const NextGp = () => {
    return (
        <div className={'container'}>
            <div className={'row align-items-center next-gp'}>
                <div className={'col-md-2 text-center'}>
                    <NextGpFlag/>
                </div>
                <div className={'col-md-4 text-center'}>
                    <NextGpDeadline/>
                </div>
                <div className={'col-md-2 text-center'}>
                    <NextGpTimer/>
                </div>
                <div className={'col-md-4 text-center'}>
                    <AddForecastButton/>
                </div>
            </div>
        </div>
    )
}

export default NextGp