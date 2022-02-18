import React from 'react'

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
                    {pilots}
                </tbody>
            </table>
        </div>
    )
}

export default PilotsPosition