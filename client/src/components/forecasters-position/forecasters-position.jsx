import React, { useEffect, useState } from 'react'
import axios from "axios"

import 'bootstrap/dist/css/bootstrap.min.css'
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

    /*const [forecasters, setForecasters] = useState([])

    useEffect(() => {
        (async () => {
            const response = await axios.get('/api/forecasters/forecasters')
            setForecasters(response.data)
            console.log(response.data)
        })()
    },[])*/

    const forecastersList = forecastersArray.map((forecaster, key) => {
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
            <h5 className={'text-center'}>Участники прогнозов</h5>
            <hr className={'hr'}/>
            <table className={'table'}>
                <tbody>
                    {/*{forecasters && forecasters.map((forecaster) => {
                        return (
                            forecaster
                        )
                    })}*/}
                    {forecastersList}
                </tbody>
            </table>
        </div>
    )
}

export default ForecastersPosition