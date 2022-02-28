import React, { useState, useEffect } from 'react'

import './pilots-position.css'

const PilotsPosition = () => {

    const pilotsArray = [
        'Max Verstappen (1)',
        'Sergio Perez (11)',
        'Lewis Hamilton (44)',
        'George Russell (63)',
        'Charles Leclerc (16)',
        'Carlos Sainz (55)',
    ]

    /*const [pilots, setPilots] = useState([])

    useEffect(() => {
        (async () => {
            const response = await axios.get('/api/pilots/pilots')
            setPilots(response.data)
            console.log(response.data)
        })()
    },[])*/

    const pilots = pilotsArray.map((pilot, key) => {
        return (
            <tr key={key}>
                <td>
                    {pilot}
                </td>
            </tr>
        )
    })

    return (
        <div className={'pilots'}>
            <h5 className={'text-center'}>Зачет пилотов</h5>
            <hr className={'hr'}/>
            <table className={'table'}>
                <tbody>
                    {/*{pilots && pilots.map((pilot) => {
                        return (
                            <div className={'row'}>
                                <div className={'col-sm-2'}>
                                    pilot.position
                                </div>
                                <div className={'col-sm-8'}>
                                    pilot.name
                                </div>
                                <div className={'col-sm-2'}>
                                    pilot.points
                                </div>
                            </div>
                        )
                    })}*/}
                    {pilots}
                </tbody>
            </table>
        </div>
    )
}

export default PilotsPosition