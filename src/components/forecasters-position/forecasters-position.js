import React from 'react'

import './forecasters-position.css'

const ForecastersPosition = () => {

    const forecastersArray = [
        'User1',
        'User2',
        'User3',
        'User4',
        'User5',
        'User6'
    ]

    const forecasters = forecastersArray.map((forecaster, key) => {
        return (
            <tr key={key}>
                <td>
                    {forecaster}
                </td>
            </tr>
        )
    })

    return (
        <div className={'forecasters'}>
            <h5 className={'text-center'}>Forecasters</h5>
            <hr className={'hr'}/>
            <table className={'table'}>
                <tbody>
                    {forecasters}
                </tbody>
            </table>
        </div>
    )
}

export default ForecastersPosition